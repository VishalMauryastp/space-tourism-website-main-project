"use client";
import HomeHero from "@/components/Home/HomeHero";
import React, { useEffect } from "react";

const Page = () => {
  return (
    <section className=" h-screen bg-cover  bg-no-repeat bg-[url('/starter-code/assets/home/background-home-mobile.jpg')] md:bg-[url('/starter-code/assets/home/background-home-tablet.jpg')] lg:bg-[url('/starter-code/assets/home/background-home-desktop.jpg')]">
      <div className="pt-[74.4px]">
        <HomeHero />
      </div>
    </section>
  );
};

export default Page;
