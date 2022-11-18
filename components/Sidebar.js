import Link from "next/link";
import Image from "next/image";

const Sidebar = ({ isOpen, toggle, route, ...props }) => {
  return (
    <div
      className={
        isOpen
          ? "fixed z-30 bg-black top-0 w-full h-full lg:hidden translate-y-0 duration-700 transform ease-out"
          : "translate-y-[-100%]"
      }
    >
      <div
        className={`absolute  top-0 right-0 z-30 w-full bg-bgCol h-full text-main overflow-hidden flex flex-col items-center justify-center`}
      >
        <div className="flex py-4 items-center w-full justify-between px-4 sm:px-0 z-10 max-w-[500px]">
          <div className="flex items-center relative w-[125px] h-[45px] md:w-[170px] md:h-[65px] xl:w-[224px] xl:h-[82px]">
            <Link href="/" passHref className="font-extrabold text-[24px]">
              <div className="text-white">GLEN</div>
            </Link>
          </div>

          <div className="cursor-pointer z-10 " onClick={toggle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              viewBox="0 0 20 20"
              fill="white"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        <div className="w-full flex flex-col h-full justify-center items-center z-40">
          <ul
            className="px-4 pt-3 -mt-40 text-white w-full z-10 text-center flex flex-col gap-y-[50px]"
            onClick={toggle}
          >
            <li className="w-full">
              <Link href="/about" passHref className={`block px-5 text-[22px]`}>
                <div>About</div>
              </Link>
            </li>
            <li className="w-full">
              <Link href="/#work" passHref className={`block px-5 text-[22px]`}>
                <div>Work</div>
              </Link>
            </li>
            <li className="w-full">
              <Link
                href="/archives"
                passHref
                className={`block px-5 text-[22px]`}
              >
                <div>Archives</div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
