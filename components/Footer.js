import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <div className="text-white flex flex-col w-full items-center py-[80px] bg-black">
      <h1>Reach me.</h1>
      <ul className="flex gap-x-[35px] pt-[5px]">
        <li>
          <Link href="/">Behance</Link>
        </li>
        <li>
          <Link href="/">LinkedIn</Link>
        </li>
        <li>
          <Link href="/">Email</Link>
        </li>
        <li>
          <Link href="/">Resume</Link>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
