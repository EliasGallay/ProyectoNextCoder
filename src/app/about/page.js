export function generateMetadata({ params, searchParams }, parent) {
  const data = {
    title: " About Us",
    description: " Learn more about our company and team",
    keywords: ["About Us", "E-Commerce"],
  };

  return data;
}

export default function AboutPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">About Us</h1>
      <p className="mb-4">
        Welcome to our e-commerce platform! We are dedicated to providing you
        with the best online shopping experience.
      </p>
      <p>
        Our team is passionate about delivering high-quality products and
        exceptional customer service. Thank you for choosing us!
      </p>
    </div>
  );
}
