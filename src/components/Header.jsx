"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const currentPage = usePathname();
  // console.log(currentPage)
const navLinks =[
  {
    link:"00 Home",
    to:"/home",
  },
  {
    link:"01 Destination",
    to:"/destination",
  },
  {
    link:"02 Crew",
    to:"/crew",
  },
  {
    link:"03 Technology",
    to:"/technology",
  },
]

  return (
    <header className="bg-black header  ">
      <div className=" flex justify-between  text-white items-center">
        <div className="rounded-full w-fit pl-[30px]  lg:pl-[55px]  ">
          <img
            className=""
            src="/starter-code/assets/shared/logo.svg"
            alt="Logo loading..."
          />
        </div>
        <div className="flex items-center  lg:w-[80%]">
          <div className="hidden lg:block bg-white opacity-[.25px] h-[1px] w-full mr-[-24px] relative  z-[2]"></div>
          <div className="flex px-8 lg:px-16  justify-between gap-8 lg:gap-[70px] bg-headerLinks  backdrop-blur-[81.55px] font-barlow font-normal tracking-[2.70px] break-words">
            <Link
              className={`  py-6 whitespace-nowrap ${
                currentPage == "/home" ? "active" : " "
              }`}
              href={"/home"}
            >
              00 Home
            </Link>
            {/* <Link
              className={`py-6 whitespace-nowrap ${
                currentPage == "/destination" ? "active " : " "
              }`}
              href={"/destination"}
            >
              01 Destination
            </Link>
            <Link
              className={`py-6 whitespace-nowrap ${
                currentPage == "/crew" ? "active " : ""
              }`}
              href={"/crew"}
            >
              02 Crew
            </Link>
            <Link
              className={`py-6 whitespace-nowrap ${
                currentPage == "/technology" ? "active " : ""
              }`}
              href={"/technology"}
            >
              03 Technology
            </Link> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
