import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

function readField(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function redirectWithError(request: Request, message: string) {
  const url = new URL("/", request.url);
  url.searchParams.set("error", message);
  return NextResponse.redirect(url, { status: 303 });
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  const formData = await request.formData();

  const firstName = readField(formData, "firstName");
  const lastName = readField(formData, "lastName");
  const email = readField(formData, "email");
  const phone = readField(formData, "phone");
  const location = readField(formData, "location");
  const doorCount = readField(formData, "doorCount");
  const message = readField(formData, "message");
  const landingPage = readField(formData, "landingPage") || "Kitchen Cabinet Refinishing Landing Page";
  const serviceType = readField(formData, "serviceType") || "Kitchen cabinet refinishing";
  const photo = formData.get("photo");
  const photoFile = typeof File !== "undefined" && photo instanceof File && photo.size > 0 ? photo : null;
  const name = `${firstName} ${lastName}`.trim();

  if (!firstName || !lastName || !email || !phone) {
    return redirectWithError(request, "Please complete your first name, last name, email, and phone number.");
  }

  if (photoFile && photoFile.size > 10 * 1024 * 1024) {
    return redirectWithError(request, "Please upload a photo under 10MB.");
  }

  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.LEAD_RECIPIENT_EMAIL;
  const from = process.env.RESEND_FROM_EMAIL || "P2D Refinishing <quotes@paint2decor.com>";

  if (!apiKey || !recipient) {
    return redirectWithError(request, "The quote form is not configured yet. Please add the Resend environment variables.");
  }

  const resend = new Resend(apiKey);
  const subject = `New P2D lead: ${landingPage}`;
  const text = [
    `Landing page: ${landingPage}`,
    `Service type: ${serviceType}`,
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `Location: ${location || "Not provided"}`,
    `Doors and drawers: ${doorCount || "Not provided"}`,
    `Photo: ${photoFile ? `${photoFile.name} (${Math.round(photoFile.size / 1024)}KB)` : "Not provided"}`,
    "",
    "Message:",
    message || "Not provided"
  ].join("\n");

  const html = `
    <div style="font-family:Arial,sans-serif;line-height:1.5;color:#191919">
      <h1 style="color:#ff3048;margin-bottom:8px">New P2D Lead</h1>
      <p><strong>Landing page:</strong> ${escapeHtml(landingPage)}</p>
      <p><strong>Service type:</strong> ${escapeHtml(serviceType)}</p>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
      <p><strong>Location:</strong> ${escapeHtml(location || "Not provided")}</p>
      <p><strong>Doors and drawers:</strong> ${escapeHtml(doorCount || "Not provided")}</p>
      <p><strong>Photo:</strong> ${photoFile ? escapeHtml(`${photoFile.name} (${Math.round(photoFile.size / 1024)}KB)`) : "Not provided"}</p>
      <p><strong>Message:</strong><br>${escapeHtml(message || "Not provided").replaceAll("\n", "<br>")}</p>
    </div>
  `;

  const attachments = photoFile
    ? [
        {
          filename: photoFile.name || "project-photo.jpg",
          content: Buffer.from(await photoFile.arrayBuffer())
        }
      ]
    : undefined;

  const { error } = await resend.emails.send({
    from,
    to: recipient,
    replyTo: email,
    subject,
    text,
    html,
    attachments
  });

  if (error) {
    console.error("Resend submission failed", error);
    return redirectWithError(request, "We could not send your request. Please try again or call P2D directly.");
  }

  return NextResponse.redirect(new URL("/thank-you", request.url), { status: 303 });
}
