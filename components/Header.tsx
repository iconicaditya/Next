import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full py-4 px-8 border-b border-black/[.08] dark:border-white/[.145] flex justify-between items-center">
      <div className="font-bold text-xl">My App</div>
      <nav>
        <ul className="flex gap-4">
          <li><Link href="/" className="hover:underline">Home</Link></li>
          <li><Link href="/about" className="hover:underline">About</Link></li>
        </ul>
      </nav>
    </header>
  );
}
