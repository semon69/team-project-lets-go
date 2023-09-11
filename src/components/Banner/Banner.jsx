"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

import { Autoplay, Navigation } from "swiper";
import Link from "next/link";

const Banner = () => {
  return (
    <div>
      <Swiper
        navigation={true}
        autoplay={{ delay: 3000 }}
        loop={true}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="h-[90vh] items-center"
            style={{
              backgroundImage: `url('https://i.ibb.co/5TrZ5qG/bannar-bg-1.jpg')`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="max-w-screen-xl mx-auto flex items-center h-full  px-3 md:px-0">
              <div className="  ">
                <p className="bg-[#F7921E] mb-[-20px] py-2 px-4 inline-block text-white font-bold -rotate-12">
                  Tour & Travels
                </p>
                <h1 className="text-7xl font-bold text-white">
                  Tour Travel & <br /> Adventure Camping
                </h1>
                <p className="font-semibold text-gray-300 py-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                  <br /> Nulla quae minima tenetur quia eveniet eos!
                </p>
                <button className="bg-[#63AB45] text-white py-4 px-6 font-bold rounded-md hover:bg-white hover:text-[#63AB45]">
                  Lets Get Started
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="h-[90vh] items-center"
            style={{
              backgroundImage: `url('https://i.ibb.co/KK51y93/pexels-elias-strale-7438459.jpg')`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="max-w-screen-xl mx-auto flex items-center h-full  px-3 md:px-0">
              <div className="  ">
                <p className="bg-[#F7921E] mb-[-20px] py-2 px-4 inline-block text-white font-bold -rotate-12">
                  Tour & Travels
                </p>
                <h1 className="text-7xl font-bold text-white">
                  Your Journey Begins Here
                </h1>
                <p className="font-semibold text-gray-300 py-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                  <br /> Nulla quae minima tenetur quia eveniet eos!
                </p>
                <button className="bg-[#63AB45] text-white py-4 px-6 font-bold rounded-md hover:bg-white hover:text-[#63AB45]">
                  Lets Get Started
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="h-[90vh] items-center"
            style={{
              backgroundImage: `url('https://i.ibb.co/D4dCX7B/pexels-1178784.jpg')`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="max-w-screen-xl mx-auto flex items-center h-full  px-3 md:px-0">
              <div className="  ">
                <p className="bg-[#F7921E] mb-[-20px] py-2 px-4 inline-block text-white font-bold -rotate-12">
                  Tour & Travels
                </p>
                <h1 className="text-7xl font-bold text-white">
                  Tour Travel & <br /> Adventure Camping
                </h1>
                <p className="font-semibold text-gray-300 py-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                  <br /> Nulla quae minima tenetur quia eveniet eos!
                </p>
                <button className="bg-[#63AB45] text-white py-4 px-6 font-bold rounded-md hover:bg-white hover:text-[#63AB45]">
                  Lets Get Started
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 bg-white text-black rounded shadow-xl lg:mx-12  lg:py-8 py-3 px-3 lg:px-9">
          <div className="space-y-3">
            <div className="flex gap-3 items-center border-b-2 border-gray-400 pb-3">
              <Image
                width={48}
                height={48}
                className="w-12"
                src="https://cdn-icons-png.flaticon.com/128/3037/3037818.png"
                alt=""
              />
              <div>
                <p className="text-gray-500">Destinations</p>
                <p className="font-bold">Locations</p>
              </div>
              <select name=">" id="">
                <option value=""> </option>
                <option value="">USA</option>
                <option value="">UK</option>
              </select>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex gap-3 items-center border-b-2 border-gray-400 pb-3">
              <Image
                width={48}
                height={48}
                className="w-12"
                src="https://cdn-icons-png.flaticon.com/128/4750/4750549.png"
                alt=""
              />
              <div>
                <p className="text-gray-500">Activity</p>
                <p className="font-bold">Bookings</p>
              </div>
              <select name=">" id="">
                <option value=""> </option>
                <option value="">USA</option>
                <option value="">UK</option>
              </select>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex gap-2 items-center border-b-2 border-gray-400 pb-3">
              <Image
                width={48}
                height={48}
                className="w-12"
                src="https://cdn-icons-png.flaticon.com/128/833/833593.png"
                alt=""
              />
              <div>
                <p className="text-gray-500">Date</p>
                <input type="date" name="" id="" />
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex gap-3 items-center border-b-2 border-gray-400 pb-3">
              <Image
                width={48}
                height={48}
                className="w-12"
                src="https://cdn-icons-png.flaticon.com/128/456/456283.png"
                alt=""
              />
              <div>
                <p className="text-gray-500">Guest</p>
                <p className="font-bold">0</p>
              </div>
            </div>
          </div>
          <Link className="" href={'/bookings'}>
            <button className="outline-none rounded-md px-3 bg-green-600 text-white font-bold h-16 w-36">Search</button>
          </Link>
        </div>
      </>
    </div>
  );
};

export default Banner;
