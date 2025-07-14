import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { slug } = await params;

  return NextResponse.json({
    message: `Details for product with slug: ${slug}`,
    status: "success",
    slug: slug,
  });
}

export async function PUT(request, { params }) {
  const { slug } = await params;
  const data = await request.json();

  return NextResponse.json({
    message: `Product with slug: ${slug} updated successfully`,
    status: "success",
    updatedProduct: data,
  });
}

export async function DELETE(request, { params }) {
  const { slug } = await params;

  return NextResponse.json({
    message: `Product with slug: ${slug} deleted successfully`,
    status: "success",
  });
}
