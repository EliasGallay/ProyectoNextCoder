import Link from "next/link";

const ProductCard = ({ product }) => {
  return (
    <div
      key={product.id}
      className="border rounded-lg p-4 shadow hover:shadow-lg transition-shadow duration-200"
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover mb-4 rounded"
      />
      <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
      <p className="text-gray-600 mb-2">{product.description}</p>
      <p className="text-xl font-bold">${product.price}</p>
      <p className="text-sm text-gray-500 mt-2">Category: {product.category}</p>

      <Link
        className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-200"
        href={`/products/details/${product.slug}`}
      >
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;
