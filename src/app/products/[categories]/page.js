import ProductCard from "../components/ProductCard";

export async function generateMetadata({ params }, parent) {
  const { categories } = params;

  return {
    title: `Products of ${categories}`,
    description: `Explore products in the ${categories} category.`,
    keywords: ["Products", "E-Commerce", "Shopping", categories],
  };
}

export default async function CategoryPage({ params }) {
  const { categories } = params;

  const res = await fetch("http://localhost:3000/api/products", {
    cache: "no-store",
  });
  const productsDB = await res.json();

  const products =
    categories === "all"
      ? productsDB
      : productsDB.filter((product) => product.category === categories);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Products in {categories}</h1>
      <p className="mb-4">
        Explore our wide range of products in the {categories} category.
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
