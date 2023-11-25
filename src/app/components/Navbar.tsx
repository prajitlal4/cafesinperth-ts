"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {

  return (
    <header className="w-full bg-white top-0 z-50 flex">
      <nav className="mx-auto flex max-w-7xl p-6 lg:px-8" aria-label="Global">
        <Link href={`/`} className="-m-1.5 p-1.5">
          <span className="sr-only">Cafes in Perth</span>
          <Image
            className="h-12 md:h-20 w-auto"
            src="https://cafesinperth.syd1.cdn.digitaloceanspaces.com/Capture.PNG"
            alt="Cafes in Perth Logo"
            height={800}
            width={800}
          />
        </Link>
      </nav>
    </header>
  );
}
