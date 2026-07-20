"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          FundNest
        </Link>

        <div className="flex gap-6">
          <Link href="/">Home</Link>
          <Link href="/explore">Explore</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/login">Login</Link>
        </div>
      </nav>
    </header>
  );
}