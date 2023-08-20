"use client";
import React from "react";
import tour from "../../../../public/ni7_jsons/tours.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Navigation, Pagination } from "swiper";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import clock from "../../../../public/Booking/Icons/clock.png";
import users from "../../../../public/Booking/Icons/users.png";
import { FaArrowRight } from "react-icons/fa";

const RelatedTour = () => {
  return (
    <div>
      <h2 className="font-bold text-3xl my-10">Related Tour </h2>
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
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
          }}
          navigation
          modules={[Navigation]}
          className="mySwiper"
        >
          {tour.map((t) => (
            <SwiperSlide className="overflow-hidden" key={t.id}>
              <div className="card  border rounded-lg bg-base-100 shadow-2xl relative">
                <figure>
                  <Image
                    height={300}
                    width={300}
                    className="h-[300px]  w-full object-cover"
                    src={t?.destination_img}
                    alt="tour image"
                  />
                </figure>
                <div className="card-body  z-10 bg-white rounded-[42px_43px_0px_0px]">
                  <div className="flex">
                    <AiFillStar className="h-5 w-5 text-yellow-500 "></AiFillStar>
                    <AiFillStar className="h-5 w-5 text-yellow-500 "></AiFillStar>
                    <AiFillStar className="h-5 w-5 text-yellow-500 "></AiFillStar>
                    <AiFillStar className="h-5 w-5 text-yellow-500 "></AiFillStar>
                    <AiFillStar className="h-5 w-5 text-yellow-500 "></AiFillStar>
                  </div>
                  <h2 className="card-title">
                    {t.place_name}
                    <div className="badge badge-secondary">NEW</div>
                  </h2>
                  <p>{t.location}</p>
                  <p>{t.price}</p>
                  <hr />
                  <div className="flex gap-1 justify-between items-center">
                    <div className="flex gap-2 items-center">
                      <Image className="w-6" src={clock} alt="clock"></Image>
                      <p>{t.day} days</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <Image className="w-6" src={users} alt="clock"></Image>
                      <p>10</p>
                    </div>
                    <div>
                      <p className="flex gap-2 items-center">
                        Explore <FaArrowRight />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </div>
  );
};

export default RelatedTour;
