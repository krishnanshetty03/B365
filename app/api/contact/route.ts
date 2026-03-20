import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, company, phone, message } = body;

        // Validate required fields
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Name, email, and message are required." },
                { status: 400 }
            );
        }

        const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

        if (!accessKey) {
            console.error("WEB3FORMS_ACCESS_KEY is not set in environment variables.");
            return NextResponse.json(
                { error: "Server configuration error." },
                { status: 500 }
            );
        }

        // Send to Web3Forms
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify({
                access_key: accessKey,
                subject: `New Pricing Inquiry from ${name}`,
                from_name: "buziness365 Website",
                name,
                email,
                company: company || "Not provided",
                phone: phone || "Not provided",
                message,
            }),
        });

        // Read the raw text first to handle non-JSON responses
        const responseText = await response.text();

        let data;
        try {
            data = JSON.parse(responseText);
        } catch {
            console.error("Web3Forms returned non-JSON response:", responseText.substring(0, 200));
            return NextResponse.json(
                { error: "Email service returned an unexpected response. Please try again." },
                { status: 502 }
            );
        }

        if (data.success) {
            return NextResponse.json({ success: true });
        } else {
            console.error("Web3Forms error:", data);
            return NextResponse.json(
                { error: data.message || "Failed to send message." },
                { status: 500 }
            );
        }
    } catch (error) {
        console.error("Contact form error:", error);
        return NextResponse.json(
            { error: "Internal server error." },
            { status: 500 }
        );
    }
}
