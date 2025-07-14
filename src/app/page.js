import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Next.js App</h1>
        <p className="text-lg text-gray-600">This is a simple example page.</p>
        <Image
          src="/vercel.svg"
          alt="Next.js Logo"
          width={200}
          height={200}
          className="mt-6"
        />
      </div>
    </main>
  );
}
