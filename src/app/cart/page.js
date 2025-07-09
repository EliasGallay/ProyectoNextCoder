export default function CartPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      <p className="mb-4">Your shopping cart is currently empty.</p>
      <p>Please add items to your cart to proceed with the checkout.</p>
    </div>
  );
}
export function generateMetadata({ params, searchParams }, parent) {
  const data = {
    title: "Cart",
    description: "View and manage your shopping cart",
    keywords: ["Cart", "Shopping Cart", "E-Commerce"],
  };

  return data;
}
