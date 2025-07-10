import Link from "next/link";
const page = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 60 },
    cache: "default",
  });

  const posts = await response.json();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-zinc-950">
      <ul className="list-disc pl-5 text-white bg-zinc-950 p-4 rounded-lg shadow-lg">
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <Link
              href={`/post/${post.id}`}
              className="text-blue-400 underline hover:text-blue-300"
            >
              Read More
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default page;
