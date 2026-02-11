import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full flex items-center justify-around py-15 bg-black">
      <div className="flex flex-col items-start">
        <Image
          src="/Logo.svg"
          alt="logo"
          width={100}
          height={100}
          className="w-[150px] h-[100px]"
        />
        <div className="flex gap-3 items-center justify-start ps-3">
          <Image
            src="/icons/instagramIcon.svg"
            alt="instagram"
            width={100}
            height={100}
            className="w-[30px] h-[30px]"
          />
          <Image
            src="/icons/facebookIcon.svg"
            alt="faceboock"
            width={100}
            height={100}
            className="w-[30px] h-[30px]"
          />
          <Image
            src="/icons/xIcon.svg"
            alt="x"
            width={100}
            height={100}
            className="w-[30px] h-[30px]"
          />
        </div>
      </div>
      <div className="flex flex-col gap-3 ms-10 ">
        <h3 className="text-white font-semibold text-lg">Quick Links</h3>

        <Link
          href="/"
          className="text-gray-400 text-sm hover:text-primary transition duration-300"
        >
          Home
        </Link>
        <Link
          href="/"
          className="text-gray-400 text-sm hover:text-primary transition duration-300"
        >
          Films
        </Link>
        <Link
          href="/"
          className="text-gray-400 text-sm hover:text-primary transition duration-300"
        >
          About Us
        </Link>
      </div>
      <div className="flex flex-col gap-3 ms-10 self-start">
        <h3 className="text-white font-semibold">Contact Us</h3>

        <label className="flex items-center justify-between px-2 py-2 border-primary border rounded-lg">
          <input
            type="text"
            placeholder="Example@gmail.com"
            className="border-transparent border focus:outline-0 focus:border-transparent text-white p-2 rounded-lg w-[30vw] text-left"
          />
          <button className="ml-2 p-2 rounded-full cursor-pointer">
            <Image
              src="/icons/subtractIcon.svg"
              alt="submit"
              width={100}
              height={100}
              className="w-[20px] h-[20px]"
            />
          </button>
        </label>
      </div>
    </div>
  );
};

export default Footer;
