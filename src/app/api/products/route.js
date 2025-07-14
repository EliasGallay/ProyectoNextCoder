import { NextResponse } from "next/server";
import { productsDB } from "./data/products";

export async function GET(request) {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");

  if (category) {
    const filteredProducts = productsDB.filter(
      (product) => product.category === category,
    );
    return NextResponse.json(filteredProducts);
  }

  return NextResponse.json(productsDB);
}
