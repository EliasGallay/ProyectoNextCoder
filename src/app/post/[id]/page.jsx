import Link from "next/link";

export default async function PostPage({ params }) {
  const { id } = await params;

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: { revalidate: 60 },
    cache: "default",
  });

  const post = await res.json();

  if (!post.id) {
    return <div className="text-red-500">Post not found</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-zinc-950">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-700 mb-4">{post.body}</p>
        <p className="text-gray-500">Post ID: {post.id}</p>
        <Link
          href="/post"
          className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Back to Posts
        </Link>
      </div>
    </div>
  );
}
