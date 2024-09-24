import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div
      className="flex flex-col min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/lsu.jpg')" }}
    >
      <Head>
        <title>LASU Alumni Platform</title>
        <meta
          name="description"
          content="Welcome to the Lagos State University Alumni Platform"
        />
      </Head>

      <main className="flex-grow flex flex-col items-center justify-center bg-black bg-opacity-50 p-6">
        <h1 className="text-5xl font-bold text-white text-center">
          Welcome to the LASU Alumni Platform
        </h1>
        <p className="mt-4 text-lg text-white text-center max-w-xl">
          Join a vibrant community of Lagos State University alumni. Stay
          connected with fellow graduates, participate in events, and contribute
          to the growth of our alumni network.
        </p>

        <div className="mt-8 flex flex-col space-y-4">
          <Link
            href="/login"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded shadow transition duration-300"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded shadow transition duration-300"
          >
            Sign Up
          </Link>
        </div>
      </main>

      <footer className="bg-blue-600 text-white py-4">
        <div className="container mx-auto text-center">
          <p>
            Contact:{" "}
            <a href="mailto:alumni@lasu.edu.ng" className="underline">
              alumni@lasu.edu.ng
            </a>{" "}
            | &copy; 2024 LASU Alumni
          </p>
        </div>
      </footer>
    </div>
  );
}
