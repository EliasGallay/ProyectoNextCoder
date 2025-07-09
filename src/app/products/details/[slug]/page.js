import Link from "next/link";
import { productsDB } from "../../[categories]/data/products";

export default async function DetailPage({ params }) {
  const { slug } = await params;
  const product = productsDB.find((item) => item.slug === slug);
  if (!product) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
        <p className="text-red-500">
          The product you are looking for does not exist.
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 ">
      <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-cover mb-4 rounded"
      />
      <p className="text-gray-600 mb-4">{product.description}</p>
      <p className="text-xl font-bold mb-4">${product.price}</p>
      <p className="text-sm text-gray-500 mb-4">Category: {product.category}</p>
      <div className="flex">
        <button className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-200">
          Add to Cart
        </button>
      </div>
      <Link
        className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-200"
        href={`/products/${product.category}`}
      >
        Back to {product.category} Products
      </Link>
    </div>
  );
}
