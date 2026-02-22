import React from 'react'
import Link from "next/link";

const HeaderLinks = () => {
  return (
    <div className='flex gap-20'>
      <div className="flex gap-10 text-white font-semibold text-[18px]">
        <Link href="/">Home</Link>
        <Link href="/movies">Films</Link>
        <Link href="/">About</Link>
      </div>
      <div className="text-white font-semibold text-[18px]">
        <Link href="/">Login/Register</Link>
      </div>
    </div>
  );
}

export default HeaderLinks
