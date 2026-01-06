export default function Footer() {
  return (
    <footer className="w-full py-6 px-8 border-t border-black/[.08] dark:border-white/[.145] text-center text-sm text-gray-500">
      <p>&copy; {new Date().getFullYear()} My Next.js App. Ready for Vercel.</p>
    </footer>
  );
}
