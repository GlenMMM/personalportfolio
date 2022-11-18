import Link from "next/link";
import Image from "next/image";

const Navbar = ({ toggle, route, router, ...props }) => {
  return (
    <nav
      className="flex relative top-0 z-30 px-4 py-2 md:px-0 justify-center"
      role="navigation"
    >
      <div className="flex justify-between w-full max-w-[500px] md:max-w-[640px] lg:max-w-[840px] xl:max-w-[980px] 2xl:max-w-[1280px] pt-2">
        <div className="flex space-x-10 items-center justify-center">
          <div className="flex items-center relative w-[125px] h-[45px] md:w-[170px] md:h-[65px] xl:w-[224px] xl:h-[82px]">
            <Link href="/" passHref className="font-extrabold text-[24px]">
              <div {...props}>GLEN</div>
            </Link>
          </div>
        </div>
        <div className="flex">
          <Link
            href="/about"
            passHref
            className={`p-4 hover:opacity-100 opacity-60 items-center gap-2 hidden md:flex text-[16px]`}
          >
            <div {...props}>About</div>
          </Link>
          <Link
            href="/#work"
            passHref
            className={`p-4 hidden md:flex hover:opacity-100 opacity-60 items-center gap-2 text-[16px]`}
          >
            <div {...props}>Work</div>
          </Link>
          <Link
            href="/archives"
            passHref
            className={`p-4 hover:opacity-100 opacity-60 items-center gap-2 hidden md:flex text-[16px]`}
          >
            <div {...props}>Archives</div>
          </Link>
        </div>
        <div className="cursor-pointer md:hidden" onClick={toggle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="main"
            viewBox="0 0 24 24"
            stroke="black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
