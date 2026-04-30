import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2).max(80),
  email: z.string().email(),
  message: z.string().min(10).max(2000),
  website: z.string().max(0).optional().or(z.literal("")),
});

const buckets = new Map<string, { count: number; reset: number }>();
const WINDOW_MS = 60 * 60 * 1000;
const MAX_PER_WINDOW = 5;

function rateLimit(ip: string): boolean {
  const now = Date.now();
  const b = buckets.get(ip);
  if (!b || now > b.reset) {
    buckets.set(ip, { count: 1, reset: now + WINDOW_MS });
    return true;
  }
  if (b.count >= MAX_PER_WINDOW) return false;
  b.count += 1;
  return true;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || "shashank.30choudhary@gmail.com";
  const from = process.env.CONTACT_FROM_EMAIL || "Portfolio <onboarding@resend.dev>";

  if (!apiKey) {
    return res
      .status(500)
      .json({ error: "Email service not configured. Please email me directly." });
  }

  const ip =
    (req.headers["x-forwarded-for"] as string | undefined)?.split(",")[0]?.trim() ||
    (req.socket?.remoteAddress as string | undefined) ||
    "unknown";

  if (!rateLimit(ip)) {
    return res.status(429).json({ error: "Too many messages. Try again later." });
  }

  const parsed = schema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: "Invalid input" });
  }
  const { name, email, message, website } = parsed.data;

  // Honeypot — silently succeed so the bot thinks it worked
  if (website && website.length > 0) {
    return res.status(200).json({ ok: true });
  }

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br/>");

  const html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; line-height: 1.6; color: #0a0f1e;">
      <h2 style="margin: 0 0 16px;">New portfolio message</h2>
      <p><strong>From:</strong> ${safeName} &lt;${safeEmail}&gt;</p>
      <p><strong>Message:</strong></p>
      <div style="border-left: 3px solid #22D3EE; padding: 12px 16px; background: #f6f9fc;">
        ${safeMessage}
      </div>
      <p style="margin-top: 24px; color: #5A6886; font-size: 12px;">
        Sent from your portfolio contact form · ${new Date().toISOString()}
      </p>
    </div>
  `;

  const resend = new Resend(apiKey);
  try {
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `Portfolio message from ${name}`,
      html,
      text: `From: ${name} <${email}>\n\n${message}`,
    });

    if (error) {
      console.error("Resend error:", error);
      return res.status(502).json({ error: "Couldn't deliver message" });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Unexpected error" });
  }
}
