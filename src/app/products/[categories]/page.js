export async function generateMetadata({ params, searchParams }, parent) {
  const { categories } = await params;
  return {
    title: `Products of ${categories}`,
    description: `Explore products in the ${categories} category.`,
    keywords: ["Products", "E-Commerce", "Shopping", categories],
  };
}

export default async function CategoryPage({ params }) {
  const { categories } = await params;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Products in {categories}</h1>
      <p className="mb-4">
        Explore our wide range of products in the {categories} category.
      </p>
      <p>
        More details about products in this category will be available soon.
      </p>
    </div>
  );
}
