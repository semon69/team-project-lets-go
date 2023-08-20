"use client";
import React from "react";
import tour from "../../../../public/ni7_jsons/tours.json";
import { AiFillStar } from "react-icons/ai";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import clock from "../../../../public/Booking/Icons/clock.png";
import users from "../../../../public/Booking/Icons/users.png";

const PopularTour = () => {
  return (
    <div className="container mx-auto py-24 px-5 md:px-0 ">
      <h1 className="bg-[#ECF5E8] font-medium text-green-600 p-4 w-[137px] mx-auto mb-4 rounded-lg">
        Explore Tour
      </h1>
      <h1 className="text-center font-bold mb-4 text-5xl">
        Most Popular Tours
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {tour.slice(0, 3).map((t) => (
          <div
            key={t.id}
            className="card  border rounded-lg bg-base-100 shadow-2xl relative"
          >
            <figure>
              <Image
                width="5000"
                height="5000"
                className="h-[300px]  w-full "
                src={t.destination_img}
                alt="image"
              ></Image>
            </figure>
            <div className="card-body   bg-white rounded-[42px_43px_0px_0px]">
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
        ))}
      </div>
    </div>
  );
};

export default PopularTour;
