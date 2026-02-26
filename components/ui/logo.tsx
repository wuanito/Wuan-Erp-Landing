import Link from "next/link";
import Image from "next/image";
import LogoWuan from "@/public/images/logo-wuan.png";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex items-center" aria-label="Wuan">
      <Image
        src={LogoWuan}
        alt="Wuan"
        height={40}
        priority
      />
    </Link>
  );
}
