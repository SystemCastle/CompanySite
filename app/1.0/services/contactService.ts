export type ContactFormPayload = {
    name: string;
    email: string;
    phone: string;
    message: string;
};

type Web3FormsResponse = {
    success?: boolean;
    message?: string;
};

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export async function submitContactForm(payload: ContactFormPayload) {
    const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    });

    const result = (await response.json()) as Web3FormsResponse;

    if (!response.ok || !result.success) {
        throw new Error(result.message || "Unable to send your message right now.");
    }

    return result;
}

export async function submitContactFormWithWeb3Forms(payload: ContactFormPayload) {
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
        throw new Error("Missing NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY");
    }

    const formData = new FormData();
    formData.append("access_key", accessKey);
    formData.append("subject", "New Contact Form Submission - System Castle");
    formData.append("from_name", "System Castle Website");
    formData.append("name", payload.name);
    formData.append("email", payload.email);
    formData.append("phone", payload.phone);
    formData.append("company", payload.company || "Not provided");
    formData.append("message", payload.message);
    formData.append("botcheck", "");

    const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        body: formData,
    });

    const result = (await response.json()) as Web3FormsResponse;

    if (!response.ok || !result.success) {
        throw new Error(result.message || "Unable to send your message right now.");
    }

    return result;
}
