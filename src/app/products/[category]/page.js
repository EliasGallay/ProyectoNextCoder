import ProductCard from "../components/ProductCard";

export async function generateMetadata({ params }, parent) {
  const { category } = await params;

  return {
    title: `Products of ${category}`,
    description: `Explore products in the ${category} category.`,
    keywords: ["Products", "E-Commerce", "Shopping", category],
  };
}

export default async function CategoryPage({ params }) {
  const { category } = await params;

  const res = await fetch("http://localhost:3000/api/products", {
    cache: "no-store",
  });
  const productsDB = await res.json();

  const products =
    category === "all"
      ? productsDB
      : productsDB.filter((product) => product.category === category);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Products in {category}</h1>
      <p className="mb-4">
        Explore our wide range of products in the {category} category.
      </p>
      <p>
        More details about products in this category will be available soon.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
