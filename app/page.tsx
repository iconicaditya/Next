import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="max-w-2xl w-full flex flex-col gap-8 items-center">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <h1 className="text-3xl font-bold text-center">Welcome to My App</h1>
        <p className="text-lg text-center text-gray-600 dark:text-gray-400">
          This is a basic Next.js setup with a header, body, and footer, ready to be pushed to Git and hosted on Vercel.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          <div className="p-6 border border-black/[.08] dark:border-white/[.145] rounded-xl hover:bg-black/[.02] dark:hover:bg-white/[.02] transition-colors">
            <h2 className="text-xl font-semibold mb-2">Frontend Check</h2>
            <p className="text-sm opacity-80">Header and footer are integrated via the root layout for consistent navigation.</p>
          </div>
          <div className="p-6 border border-black/[.08] dark:border-white/[.145] rounded-xl hover:bg-black/[.02] dark:hover:bg-white/[.02] transition-colors">
            <h2 className="text-xl font-semibold mb-2">Vercel Ready</h2>
            <p className="text-sm opacity-80">Standard Next.js project structure that Vercel recognizes automatically.</p>
          </div>
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row mt-4">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new"
            target="_blank"
            rel="noopener noreferrer"
          >
            Deploy Now
          </a>
        </div>
      </div>
    </div>
  );
}
