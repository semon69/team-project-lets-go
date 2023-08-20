"use client"

import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import tours from '../../../public/ni7_jsons/tours.json'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';
// import required modules
import { Navigation, Pagination } from "swiper";
import FeaturedTour from './FeaturedTour';


import rabbit from '../../../public/ni7_images/home/FeaturedTour/rabbit.png'
import router from '../../../public/ni7_images/home/FeaturedTour/wifi-router.png'
import solar from '../../../public/ni7_images/home/FeaturedTour/solar-energy.png'
import bike from '../../../public/ni7_images/home/FeaturedTour/cycling.png'
import fishing from '../../../public/ni7_images/home/FeaturedTour/fishing.png'
import gym from '../../../public/ni7_images/home/FeaturedTour/gym.png'
import Image from 'next/image';



const FeaturedTours = () => {
    // console.log(tours);
    return (
      <div className="w-[96%]  mx-auto my-28">
        <SectionTitle
          title="Feature tours"
          title_color="text-[#6eb152]"
          title_bg="bg-[#ecf5e8]"
          subtitle="Amazing tour places around the world"
          subtitle_color="text-black"
        ></SectionTitle>

        {/* booking slider */}
        <div className="mt-10 ">
          <>
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
              }}
              navigation
              modules={[Navigation]}
              className="mySwiper"
            >
              {tours.map((tour) => (
                <SwiperSlide className="" key={tour.id}>
                  <FeaturedTour tour={tour}></FeaturedTour>
                </SwiperSlide>
              ))}
            </Swiper>
          </>
        </div>

        {/*services  */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="px-3 py-8 flex gap-3 items-center shadow-2xl hover:transition hover:duration-300 hover:bg-green-600 hover:text-white rounded-lg">
            <Image
              className="h-[60px] w-[60px]"
              src={rabbit}
              alt="rabbit"
            ></Image>
            <div>
              <p className="font-bold">Best Security</p>
              <p className="">
                When nothing prevents our to we like best, every pleasure to be.
              </p>
            </div>
          </div>

          <div className="px-3 py-8 flex gap-4 items-center shadow-2xl hover:transition hover:duration-300 hover:bg-green-600 hover:text-white rounded-lg">
            <Image
              className="h-[60px] w-[60px]"
              src={router}
              alt="router"
            ></Image>
            <div>
              <p className="font-bold">Free Internet</p>
              <p className="">
                When nothing prevents our to we like best, every pleasure to be.
              </p>
            </div>
          </div>

          <div className="px-3 py-8 flex gap-4 items-center shadow-2xl hover:transition hover:duration-300 hover:bg-green-600 hover:text-white rounded-lg">
            <Image
              className="h-[60px] w-[60px]"
              src={solar}
              alt="solar"
            ></Image>
            <div>
              <p className="font-bold">Solar Energy</p>
              <p className="">
                When nothing prevents our to we like best, every pleasure to be.
              </p>
            </div>
          </div>

          <div className="px-3 py-8 flex gap-4 items-center shadow-2xl hover:transition hover:duration-300 hover:bg-green-600 hover:text-white rounded-lg">
            <Image className="h-[60px] w-[60px]" src={bike} alt="bike"></Image>
            <div>
              <p className="font-bold">Mountain Biking</p>
              <p className="">
                When nothing prevents our to we like best, every pleasure to be.
              </p>
            </div>
          </div>
          <div className="px-3 py-8 flex gap-4 items-center shadow-2xl hover:transition hover:duration-300 hover:bg-green-600 hover:text-white rounded-lg">
            <Image
              className="h-[60px] w-[60px]"
              src={fishing}
              alt="fishing"
            ></Image>
            <div>
              <p className="font-bold">Swimming & Fishing</p>
              <p className="">
                When nothing prevents our to we like best, every pleasure to be.
              </p>
            </div>
          </div>
          <div className="px-3 py-8 flex gap-4 items-center shadow-2xl hover:transition hover:duration-300 hover:bg-green-600 hover:text-white rounded-lg">
            <Image className="h-[60px] w-[60px]" src={gym} alt="gym"></Image>
            <div>
              <p className="font-bold">GYM & Yogo</p>
              <p className="">
                When nothing prevents our to we like best, every pleasure to be.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default FeaturedTours;