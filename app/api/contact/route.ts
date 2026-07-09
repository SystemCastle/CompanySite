import { sendContactEmail, type SmtpContactPayload } from "./smtpMailer";

export const runtime = "nodejs";

function isString(value: unknown): value is string {
    return typeof value === "string";
}

function normalizePayload(body: unknown): SmtpContactPayload | null {
    if (!body || typeof body !== "object") return null;

    const data = body as Record<string, unknown>;
    const payload = {
        name: isString(data.name) ? data.name.trim() : "",
        email: isString(data.email) ? data.email.trim() : "",
        phone: isString(data.phone) ? data.phone.trim() : "",
        company: isString(data.company) ? data.company.trim() : "",
        message: isString(data.message) ? data.message.trim() : "",
    };

    if (!payload.name || !payload.email || !payload.phone || !payload.message) {
        return null;
    }

    return payload;
}

export async function POST(request: Request) {
    let body: unknown;

    try {
        body = await request.json();
    } catch {
        return Response.json(
            { success: false, message: "Invalid request body." },
            { status: 400 }
        );
    }

    const payload = normalizePayload(body);

    if (!payload) {
        return Response.json(
            { success: false, message: "Please complete all required fields." },
            { status: 400 }
        );
    }

    try {
        await sendContactEmail(payload);
        return Response.json({ success: true, message: "Message sent successfully." });
    } catch (error) {
        console.error("Contact email failed:", error);
        return Response.json(
            { success: false, message: "Unable to send your message right now." },
            { status: 500 }
        );
    }
}
