import nodemailer from "nodemailer";

export type SmtpContactPayload = {
    name: string;
    email: string;
    phone: string;
    company: string;
    message: string;
};

function getRequiredEnv(name: string, fallbackName?: string) {
    const value = process.env[name] || (fallbackName ? process.env[fallbackName] : "");

    if (!value) {
        throw new Error(`Missing ${fallbackName ? `${name} or ${fallbackName}` : name}`);
    }

    return value;
}

function escapeHtml(value: string) {
    return value
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

export async function sendContactEmail(payload: SmtpContactPayload) {
    const user = getRequiredEnv("GMAIL_USER", "SMTP_USER");
    const pass = getRequiredEnv("GMAIL_APP_PASSWORD", "SMTP_PASS").replace(/\s/g, "");
    const to = process.env.CONTACT_EMAIL_TO || user;

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user,
            pass,
        },
    });

    const safePayload = {
        name: escapeHtml(payload.name),
        email: escapeHtml(payload.email),
        phone: escapeHtml(payload.phone),
        company: escapeHtml(payload.company || "Not provided"),
        message: escapeHtml(payload.message).replaceAll("\n", "<br />"),
    };

    await transporter.sendMail({
        from: `"System Castle Website" <${user}>`,
        to,
        replyTo: payload.email,
        subject: `New Contact Form Submission - ${payload.name}`,
        text: [
            `Name: ${payload.name}`,
            `Email: ${payload.email}`,
            `Phone: ${payload.phone}`,
            `Company: ${payload.company || "Not provided"}`,
            "",
            payload.message,
        ].join("\n"),
        html: `
            <div style="font-family: Arial, sans-serif; color: #0f172a; line-height: 1.6;">
                <h2 style="margin: 0 0 16px;">New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${safePayload.name}</p>
                <p><strong>Email:</strong> ${safePayload.email}</p>
                <p><strong>Phone:</strong> ${safePayload.phone}</p>
                <p><strong>Company:</strong> ${safePayload.company}</p>
                <div style="margin-top: 20px;">
                    <strong>Message:</strong>
                    <p style="white-space: normal;">${safePayload.message}</p>
                </div>
            </div>
        `,
    });
}
