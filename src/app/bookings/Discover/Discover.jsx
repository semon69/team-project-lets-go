import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaBeer } from "react-icons/fa";
import clock from '../../../../public/Booking/Icons/clock.png'
import dolor from '../../../../public/Booking/Icons/dollar-symbol.png'
import plane from '../../../../public/Booking/Icons/plane.png'
import Image from "next/image";

const Discover = () => {
  return (
    <div className=" py-14 bg-[#F3F8F6]">
      <div className="container mx-auto p-4 md:p-0 md:flex items-center justify-between">
        <div>
          <h1 className="text-black font-bold text-4xl">
            Discovery Island Kayak Tour
          </h1>
          <p className="font-medium text-[#555252] flex gap-1 items-center mt-2">
            <span className="text-green-700 text-[19px]">
              <CiLocationOn />
            </span>
            Main Street, Brooklyn, NY
          </p>
        </div>
        <div className="flex items-center gap-7">
          <div className="flex items-center gap-1">
            <Image className="w-14" src={dolor} alt="dolor"></Image>
            <div>
              <p>From</p>
              <p className="font-bold text-black">$129.00</p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Image className="w-14" src={clock} alt="dolor"></Image>
            <div>
              <p>Duration</p>
              <p className="font-bold text-black">3 days</p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Image className="w-14" src={plane} alt="dolor"></Image>
            <div>
              <p>Tour Type</p>
              <p className="font-bold text-black">Adventure</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
