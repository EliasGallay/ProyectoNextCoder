export default function DetailPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Product Details</h1>
      <p className="mb-4">
        More details about the product will be available soon.
      </p>
      <p className="text-gray-500">
        This page will display detailed information about a specific product,
        including its features, specifications, and customer reviews.
      </p>
    </div>
  );
}
export async function generateMetadata({ params, searchParams }, parent) {
  const { categories } = await params;
  return {
    title: `Product Details of ${categories}`,
    description: `Explore detailed information about the product in the ${categories} category.`,
    keywords: ["Product Details", "E-Commerce", "Shopping", categories],
  };
}
