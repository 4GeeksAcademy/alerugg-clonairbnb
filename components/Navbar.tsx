import Image from "next/image";
import Link from "next/link";

export const Navbar = () => (
  <header className="sticky top-0 z-20 h-20 border-b border-line-subtle bg-white">
    <nav className="mx-auto flex h-full max-w-7xl items-center justify-between px-6 md:px-10">
      <Link
        href="/"
        className="flex items-center gap-2"
      >
        <Image
          src="/world.png"
          alt="WorldBook"
          width={40}
          height={40}
        />
        <span className="text-xl font-bold tracking-tight text-brand transition-colors hover:text-brand-hover">
          WorldBooking
        </span>
      </Link>

      <ul className="flex h-full items-center gap-6 text-sm font-medium text-ink">
        <li className="flex h-full items-center">
          <Link href="/" className="transition-colors hover:text-brand">
            Inicio
          </Link>
        </li>

        <li className="flex h-full items-center">
          <Link href="/catalog" className="transition-colors hover:text-brand">
            Catálogo
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

