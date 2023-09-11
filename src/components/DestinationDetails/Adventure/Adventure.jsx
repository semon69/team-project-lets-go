"use client";
import React from "react";
import img from "../images/plane.png";
import Image from "next/image";

const Adventure = () => {
  return (
    <div className=" bg-[#63AB45] p-16 container mx-auto rounded-lg ">
      <div className=" text-white md:flex items-center justify-between">
        <div className="flex items-center gap-7">
          <Image className="w-24" src={img} alt="image"></Image>
          <div>
            <p className="">QUISEQUE VEL ORTOR</p>
            <h1 className="text-3xl md:text-4xl font bold mt-2">
              Ready to adventure and enjoy natural
            </h1>
          </div>
        </div>
        <button className="btn bg-white text-black mt-6 md:mt-0 hover:bg-[#f0eded]">
          Explore more
        </button>
      </div>
    </div>
  );
};

export default Adventure;
