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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-zinc-900 to-zinc-800 p-4">
      <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-2xl shadow-2xl w-full max-w-xl transition-all duration-300 hover:scale-[1.01]">
        <h1 className="text-3xl font-semibold text-white mb-6 tracking-wide">
          {post.title}
        </h1>
        <p className="text-zinc-300 mb-4 leading-relaxed">{post.body}</p>
        <p className="text-sm text-zinc-400 mb-6">Post ID: {post.id}</p>

        <Link
          href="/post"
          className="inline-block px-6 py-2 rounded-lg bg-blue-600 text-white font-medium transition hover:bg-blue-700 hover:shadow-md"
        >
          ← Back to Posts
        </Link>
      </div>
    </div>
  );
}
