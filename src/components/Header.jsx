"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RiMenu5Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const currentPage = usePathname();
  // console.log(currentPage)
  const [openMenu, setOpenMenu] = useState(false);

  const navLinks = [
    {
      link: "00 Home",
      to: "/home",
    },
    {
      link: "01 Destination",
      to: "/destination",
    },
    {
      link: "02 Crew",
      to: "/crew",
    },
    {
      link: "03 Technology",
      to: "/technology",
    },
  ];

  return (
    <header className="bg-black header  relative ">
      <div className="py-[14px] sm:py-0 flex justify-between  text-white items-center">
        <div className="rounded-full w-fit pl-[30px]  lg:pl-[55px]  ">
          <img
            className=""
            src="/starter-code/assets/shared/logo.svg"
            alt="Logo loading..."
          />
        </div>
        <div className="sm:hidden mr-6 text-3xl">
          {openMenu ? (
            <IoClose
              onClick={() => {
                setOpenMenu(false);
              }}
            />
          ) : (
            <RiMenu5Fill
              onClick={() => {
                setOpenMenu(true);
              }}
            />
          )}
        </div>
        <div className="hidden sm:flex  items-center  lg:w-[80%]">
          <div className="hidden lg:block bg-white opacity-[.25px] h-[1px] w-full mr-[-24px] relative  z-[2]"></div>
          <div className="flex px-8 lg:px-16  justify-between gap-8 lg:gap-[70px] bg-headerLinks  backdrop-blur-[81.55px] font-barlow font-normal tracking-[2.70px] break-words">
            {navLinks.map((val, i) => {
              return (
                <Link
                  key={i}
                  className={`  py-6 whitespace-nowrap transition-all duration-300 ${
                    currentPage == val.to
                      ? "active"
                      : "border-transparent border-b-[3px]  "
                  }`}
                  href={val.to}
                >
                  {val.link}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      {/* mobile nav */}
      <div
        className={`absolute w-full  bg-black z-10 grid transition-all duration-[400ms]  ${
          openMenu ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        } `}
      >
        <div className="overflow-hidden">
          <div className=" flex text-white flex-col p-8    bg-headerLinks  backdrop-blur-[81.55px] font-barlow font-normal tracking-[2.70px] break-words">
            {navLinks.map((val, i) => {
              return (
                <Link
                  key={i}
                  className={`  py-2 whitespace-nowrap transition-all duration-300 ${
                    currentPage == val.to
                      ? "active"
                      : "border-transparent border-b-[3px] "
                  }`}
                  href={val.to}
                >
                  {val.link}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
