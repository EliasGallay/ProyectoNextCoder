export async function POST(request) {
  try {
    const formData = await request.json();
    console.log("Form Data:", formData);

    return new Response(
      JSON.stringify({ message: "Form submitted successfully!" }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  } catch (error) {
    console.error("API error:", error);
    return new Response(JSON.stringify({ error: "Invalid request" }), {
      status: 400,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
