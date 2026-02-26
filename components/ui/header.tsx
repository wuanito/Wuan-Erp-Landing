import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="w-full">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">
        <Logo />

        <div className="hidden gap-8 text-sm font-medium text-gray-400 md:flex">
          <Link href="/" className="transition hover:text-white">
            Inicio
          </Link>
          <Link href="/funcionamiento" className="transition hover:text-white">
            Funcionamiento
          </Link>
          <Link href="/comunidad" className="transition hover:text-white">
            Comunidad
          </Link>
          <Link href="/contacto" className="transition hover:text-white">
            Contacto
          </Link>
        </div>

        <Link
          href="https://github.com/ErpOpenSource"
          className="rounded-full border border-gray-700 px-5 py-2 text-sm transition hover:bg-white hover:text-black"
        >
          Github
        </Link>
      </nav>
    </header>
  );
}
