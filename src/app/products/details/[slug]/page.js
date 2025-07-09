import Link from "next/link";
import { productsDB } from "../../[categories]/data/products";

export default async function DetailPage({ params }) {
  const { slug } = await params;
  const product = productsDB.find((item) => item.slug === slug);

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="bg-zinc-900 p-6 rounded-lg shadow-md border border-white text-center">
          <h1 className="text-2xl font-bold text-white mb-2">
            Product Not Found
          </h1>
          <p className="text-red-400 mb-4">
            The product you are looking for does not exist.
          </p>
          <Link
            href="/"
            className="text-blue-400 underline hover:text-blue-300"
          >
            Go to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-zinc-950">
      <div className="bg-zinc-900 p-6 rounded-lg shadow-lg border border-white max-w-md w-full text-white">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover rounded mb-4"
        />
        <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
        <p className="text-gray-400 mb-2">{product.description}</p>
        <p className="text-xl font-semibold mb-2">${product.price}</p>
        <p className="text-sm text-gray-500 mb-4">
          Category: {product.category}
        </p>

        <div className="flex flex-col gap-2">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
            Add to Cart
          </button>
          <Link
            href={`/products/${product.category}`}
            className="text-center bg-gray-100 text-black px-4 py-2 rounded hover:bg-gray-200 transition-colors"
          >
            Back to {product.category} Products
          </Link>
        </div>
      </div>
    </div>
  );
}
