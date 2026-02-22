'use client';
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";
import MobileMenu from "./MobileMenu"
import HeaderLinks from "./HeaderLinks"

const Header = () => {
  const [menuOpen , setMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full bg-black/60 z-[20] px-5 md:px-20 py-3 flex justify-between items-center">
      <Link href="/">
        <Image
          src="/Logo.svg"
          alt="Logo"
          width={100}
          height={100}
          className="w-[200px] md:w-[300px] h-[50px]"
        />
      </Link>

      <div className="hidden md:flex">
        <HeaderLinks />
      </div>

      <div className="inline-block md:hidden text-white font-semibold pe-5 sm:pe-10 pt-3">
        <button onClick={()=>{setMenuOpen(!menuOpen);}}>
           <Menu size={30} strokeWidth={3.5} />
        </button>
      </div>

      {menuOpen && (<MobileMenu menuOpen = {menuOpen } setMenuOpen = {setMenuOpen}/>)}
    </div>
  );
};

export default Header;
