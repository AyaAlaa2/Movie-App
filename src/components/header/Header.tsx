import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="fixed w-full bg-black/60 z-[20] px-20 py-3 flex justify-between items-center">
      <Link href="/">
        <Image
          src="/Logo.svg"
          alt="Logo"
          width={100}
          height={100}
          className="w-[300px] h-[50px]"
        />
      </Link>

      <div className="flex gap-20">
        <div className="flex gap-10 text-white font-semibold text-[18px]">
          <Link href="/">Home</Link>
          <Link href="/">Films</Link>
          <Link href="/">About</Link>
        </div>
        <div className="text-white font-semibold text-[18px]">
          <Link href="/">Login/Register</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
