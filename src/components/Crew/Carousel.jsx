"use client";
import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import img from '/starter-code/assets/crew/image-mark-shuttleworth.png'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import data from "../../data/data.json";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Carousel = () => {
  return (
    <div className="text-white ">
      <div>
        <h1 className="w-[80%]  mt-12  mx-auto text-[16px] sm:text-[20px] lg:text-[28px] font-barlow break-words font-normal text-white tracking-[4.72px]">
          <span className="text-headerLinks/50">01</span> Pick your destination
        </h1>
      </div>
      <Swiper
     
        spaceBetween={30}
        centeredSlides={true}
        navigation={false}
        loop={true}
       
        autoplay={{
          delay:4000,
          disableOnInteraction:false,
          pauseOnMouseEnter:true,
           
        }}
        pagination={false}
        // pagination={{
        //   clickable: true,
        // }}
        modules={[Autoplay, Pagination, Navigation]}
        className="flex  items-end w-[90%] sm:w-[80%]   mx-auto    "
      >
        {data?.crew?.map((val, i) => {
          return (
            <SwiperSlide key={i} className="">
              <div className=" w-full h-auto   lg:h-[calc(100vh-164px)] flex flex-col-reverse sm:flex-col gap-12 lg:gap-0 justify-end lg:flex-row   ">
                <div className="mt-0 sm:mt-8 lg:w-[55%] text-center lg:text-left  lg:self-center">
                  <h1 className="  text-[16px]  md:text-[24px] lg:text-[32px] font-normal font-bellefair uppercase break-words text-white/60">
                    {val.role}
                  </h1>
                  <h2 className="my-4 text-[24px]   md:text-[40px]  lg:text-[56px] font-normal font-bellefair uppercase break-words text-white">
                    {val.name}
                  </h2>
                  <p className="mx-auto lg:mx-0  text-[15px]   lg:max-w-[444px] md:text-[16px] lg:text-[18px] font-barlow break-words leading-[32px] text-skyBlue font-normal">

                    {val.bio}
                  </p>
                </div>

                <div className="lg:w-[45%] flex  ">
                  <img
                    className="mt-8 w-[50%] sm:w-auto lg:h-full sm:mt-auto mb-0  mx-auto"

                    
                    src={val?.images.png}
                    alt="loading..."
                  />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Carousel;
