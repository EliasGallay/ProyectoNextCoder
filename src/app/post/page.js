import Link from "next/link";
const page = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 60 },
    cache: "default",
  });

  const posts = await response.json();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-zinc-900 to-zinc-800 p-6">
      <div className="w-full max-w-3xl space-y-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-xl shadow-xl transition-all hover:scale-[1.01] hover:border-blue-400"
          >
            <h2 className="text-2xl font-semibold text-white mb-2">
              {post.title}
            </h2>
            <p className="text-zinc-300 mb-4 leading-relaxed">{post.body}</p>
            <Link
              href={`/post/${post.id}`}
              className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md font-medium transition hover:bg-blue-700 hover:shadow-md"
            >
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
