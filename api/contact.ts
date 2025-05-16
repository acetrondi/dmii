// api/contact.ts
export const config = {
  runtime: "edge", // Optional: You can remove this to use default Node.js runtime
};

export default async function handler(req: Request) {
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
    });
  }

  try {
    const body = await req.json();

    const payload = {
      name: body.name,
      email: body.email,
      phone: body.phone,
      whatsapp: body.whatsapp || body.phone,
      course: body.course,
    };

    const res = await fetch(
      "https://script.google.com/macros/s/AKfycbxMneLhcIXbMMLcMu96FR8LhIyetrCfwD4dRnhqyhiwFhaSOYn27z9F37dVfydhMES_/exec",
      {
        method: "POST",
        body: JSON.stringify(payload),
        headers: { "Content-Type": "application/json" },
      }
    );

    if (!res.ok) {
      return new Response(
        JSON.stringify({ error: "Failed to submit to Google Script" }),
        {
          status: 500,
        }
      );
    }

    return new Response(
      JSON.stringify({ message: "Form submitted successfully!" }),
      {
        status: 200,
      }
    );
  } catch (err: any) {
    return new Response(
      JSON.stringify({ error: "Internal Server Error", detail: err.message }),
      {
        status: 500,
      }
    );
  }
}
