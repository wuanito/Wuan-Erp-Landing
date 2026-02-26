import Image from "next/image";
import LogoWuan from "@/public/images/logo-wuan.png";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 px-8 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        {/* Logo */}
        <div className="opacity-50">
          <Image src={LogoWuan} alt="Wuan" height={28} />
        </div>

        {/* Copyright */}
        <p className="text-center text-xs text-gray-600 md:text-left">
          © 2025 Wuan Open Source. Elevando el estándar del software libre.
        </p>

        {/* Social circles */}
        <div className="flex gap-4">
          <div className="h-5 w-5 cursor-pointer rounded-full bg-gray-800 transition hover:bg-orange-600" />
          <div className="h-5 w-5 cursor-pointer rounded-full bg-gray-800 transition hover:bg-orange-600" />
          <div className="h-5 w-5 cursor-pointer rounded-full bg-gray-800 transition hover:bg-orange-600" />
        </div>
      </div>
    </footer>
  );
}
