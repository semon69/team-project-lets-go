/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="my-28">
      <div className="max-w-screen-xl mx-auto px-3 md:px-0">
        <div className="md:flex items-center gap-5">
          <div className="md:w-1/2 md:ms-20 mb-10 md:mb0">
            <div className="relative">
              <Image
                src={"https://i.ibb.co/vYk6jF2/image-20.jpg"}
                className="rounded-r-3xl md:w-[80%]"
                alt="img"
                width={500} height={600}
              />
              <Image
                src="https://i.ibb.co/SsJXNkx/logo-small-white.png"
                className="bg-[#63AB45] p-3 rounded-lg absolute -top-8"
                alt="img"
                width={100} height={100}
              />
              <Image
                src="https://i.ibb.co/D4dCX7B/pexels-1178784.jpg"
                alt="img"
                width={200} height={100}
                className=" rounded-2xl -mt-24 -ml-12 border-4 border-black"
              />
              <div className=" items-center bg-white border-2 border-yellow-500 inline-flex p-5 absolute right-0 -mt-28">
                <h1 className=" text-4xl md:text-7xl font-bold text-[#63AB45]">28</h1>
                <p className="md:text-xl font-bold">
                  Years of <br /> experience
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <p className="bg-[#ECF5E8] inline-block px-7 py-2 text-[#63AB45] font-bold rounded-md">About Company</p>
            <h1 className="text-5xl font-bold py-5">Great opportunity for adventure & travels</h1>

            <div className="flex flex-col gap-10">
              <div className="flex gap-5 items-center">
                <Image src="https://i.ibb.co/KzjMZ8G/best-seller.png" alt="img"  height={28} width={28} />
                <Image src="https://i.ibb.co/9rky9vz/insurance.png" alt="img" className=" fill-green-700" width={64} height={64} />
                <div>
                  <h5 className="text-xl font-bold">Safety first always</h5>
                  <p>Set perspiciatis unde omnis estenatus voluptatem totarem aperiae.</p>
                </div>
              </div>
              <div className="flex gap-5 items-center">
                <Image src="https://i.ibb.co/KzjMZ8G/best-seller.png" alt="img"  height={28} width={28} />
                <Image src="https://i.ibb.co/q0MKmgB/dollar.png" alt="img" className=" fill-green-700" width={64} height={64}  />
                <div>
                  <h5 className="text-xl font-bold">Safety first always</h5>
                  <p>Set perspiciatis unde omnis estenatus voluptatem totarem aperiae.</p>
                </div>
              </div>
              <div className="flex gap-5 items-center">
                <Image src="https://i.ibb.co/KzjMZ8G/best-seller.png" alt="img"  height={28} width={28} />
                <Image src="https://i.ibb.co/m8FW5SD/world.png" alt="img" className=" fill-green-700" width={64} height={64}  />
                <div>
                  <h5 className="text-xl font-bold">Safety first always</h5>
                  <p>Set perspiciatis unde omnis estenatus voluptatem totarem aperiae.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
