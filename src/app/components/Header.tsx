import Image from "next/image";
import Link from "next/link";
import React from "react";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between px-4 lg:px-24 py-4">
      <Link href="/" className="header__logo flex gap-2">
        <Image
          src="/whale-logo.png"
          alt="Whalepop Streaming Logo"
          width={50}
          height={25}
          className="h-auto object-contain"
        ></Image>
        <span className="header__title text-xl">Whalepop Streaming</span>
      </Link>
      <Navigation></Navigation>
    </header>
  );
}
