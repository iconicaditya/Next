export default function Header() {
  return (
    <header className="w-full py-4 px-8 border-b border-black/[.08] dark:border-white/[.145] flex justify-between items-center">
      <div className="font-bold text-xl">My App</div>
      <nav>
        <ul className="flex gap-4">
          <li><a href="/" className="hover:underline">Home</a></li>
          <li><a href="/about" className="hover:underline">About</a></li>
        </ul>
      </nav>
    </header>
  );
}
