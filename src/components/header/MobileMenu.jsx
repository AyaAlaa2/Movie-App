import React from 'react'
import Link from 'next/link'
import {X} from "lucide-react";

const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-60 bg-black/90 z-50
    transform transition-transform duration-500 ease-in-out
    ${menuOpen ? "translate-x-0" : "translate-x-full"}
  `}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-4 left-4 text-white"
      >
        <X size={24} />
      </button>

      <nav className="mt-20 flex flex-col gap-6 px-6 text-white font-semibold">
        <Link href="/" onClick={() => setMenuOpen(false)}>
          Home
        </Link>
        <Link href="/movies" onClick={() => setMenuOpen(false)}>
          Films
        </Link>
        <Link href="/" onClick={() => setMenuOpen(false)}>
          About
        </Link>
        <Link href="/" onClick={() => setMenuOpen(false)}>
          Login / register
        </Link>
      </nav>
    </div>
  );
};

export default MobileMenu
