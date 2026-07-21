"use client";

import Link from "next/link";

const navLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Explore",
    path: "/explore",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white shadow-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}

        <Link
          href="/"
          className="text-3xl font-extrabold text-blue-600 tracking-wide"
        >
          FundNest
        </Link>

        {/* Menu */}

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className="font-medium text-gray-700 transition hover:text-blue-600"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Right Side */}

        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/login"
            className="rounded-lg border border-blue-600 px-5 py-2 text-blue-600 transition hover:bg-blue-600 hover:text-white"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="rounded-lg bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700"
          >
            Register
          </Link>
        </div>
      </div>
    </header>
  );
}