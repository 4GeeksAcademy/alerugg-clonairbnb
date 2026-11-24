import Link from "next/link";

export const Footer = () => (
  <footer className="mt-auto border-t border-[#EBEBEB] bg-white px-6 py-8 text-sm text-[#717171] md:px-10">
    <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:justify-between">
      <p>© Clonairbnb</p>
      <nav className="flex gap-4">
        <Link href="/">Inicio</Link>
        <Link href="/catalog">Catálogo</Link>
      </nav>
    </div>
  </footer>
);
