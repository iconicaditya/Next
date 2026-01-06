export default function About() {
  return (
    <div className="flex flex-col items-center justify-center p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="max-w-2xl w-full flex flex-col gap-8 items-center">
        <h1 className="text-3xl font-bold text-center">About This Project</h1>
        <p className="text-lg text-center text-gray-600 dark:text-gray-400">
          This is a modern Next.js 15 application using the App Router, Tailwind CSS, and TypeScript.
        </p>
        <div className="w-full p-6 border border-black/[.08] dark:border-white/[.145] rounded-xl">
          <h2 className="text-xl font-semibold mb-4">Tech Stack</h2>
          <ul className="list-disc list-inside space-y-2 opacity-80">
            <li><strong>Next.js 15:</strong> The latest React framework for production.</li>
            <li><strong>Tailwind CSS:</strong> A utility-first CSS framework for rapid UI development.</li>
            <li><strong>TypeScript:</strong> Type-safe JavaScript for better developer experience.</li>
            <li><strong>Vercel:</strong> The best platform for deploying Next.js applications.</li>
          </ul>
        </div>
        <a href="/" className="text-blue-500 hover:underline">← Back to Home</a>
      </div>
    </div>
  );
}
