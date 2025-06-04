import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Suresh Narayan</h1>
        <p className="text-lg text-gray-600 mb-6">
          Hi! I am a web developer passionate about building fast, user-friendly websites.
          I specialize in React, Next.js, and Tailwind CSS.
        </p>
        <div className="space-x-4">
          <Link href="https://github.com/ALgosZen" className="text-blue-500 hover:underline">
            GitHub
          </Link>
          <Link href="https://www.linkedin.com/in/sureshmallela/" className="text-blue-500 hover:underline">
            LinkedIn
          </Link>
          <Link href="mailto:mallelas@hotmail" className="text-blue-500 hover:underline">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}