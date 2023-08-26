import Link from "next/link";
import Image from "next/image";
export default function Navbar() {
  return (
    <nav>
      <div>
        <Link href="/">
          <Image src="/logo.png" width={50} height={50} alt="logo" />
        </Link>
      </div>
      <Link href="/">Home </Link>
      <Link href="/about">About </Link>
      <Link href="/products">Products </Link>
    </nav>
  );
}
