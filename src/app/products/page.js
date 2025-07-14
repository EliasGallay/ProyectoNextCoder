export default function ProductsPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <p className="mb-4">Explore our wide range of products.</p>
      <p>More details about our products will be available soon.</p>
    </div>
  );
}

export function generateMetadata({ params, searchParams }, parent) {
  const data = {
    title: "Products",
    description: "Browse our collection of products",
    keywords: ["Products", "E-Commerce", "Shopping"],
  };

  return data;
}
