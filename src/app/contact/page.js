"use client";

export default function ContactPage() {
  const handleChange = (event) => {
    console.log(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { name, email, message } = event.target;

    if (!email.value || !name.value || !message.value) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.value,
          email: email.value,
          message: message.value,
        }),
      });

      const contentType = response.headers.get("Content-Type") || "";
      if (!response.ok) {
        const errorText = await response.text();
        console.error("Error response:", response.status, errorText);
        alert("There was an error submitting the form.");
        return;
      }

      if (contentType.includes("application/json")) {
        const data = await response.json();
        console.log("Response from API:", data);
      } else {
        const text = await response.text();
        console.warn("Expected JSON, got:", text);
      }

      event.target.reset();
    } catch (error) {
      console.error("Network or unexpected error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
      <p className="mb-4">
        If you have any questions or need assistance, please reach out to us.
      </p>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
            onChange={handleChange}
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
            onChange={handleChange}
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            id="message"
            rows="4"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
            onChange={handleChange}
          ></textarea>
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
