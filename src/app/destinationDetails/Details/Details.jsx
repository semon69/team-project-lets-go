import React from 'react';
import img from '../images/tour-11.jpg'
import Image from 'next/image';
import './Details.css'
const Details = () => {
    return (
      <div className="py-[100px] bg-[#F3F8F6]">
        <div className=" container mx-auto grid md:grid-cols-2 gap-10 px-5 md:px-0">
          <Image
            className="rounded-2xl border-[10px] border-white"
            src={img}
            alt="tour-image"
          ></Image>
          <div>
            <div>
              <h1 className="text-4xl font-bold relative heading-border">
                United Kingdom
              </h1>
              <p className="text-base leading-7 mt-8">
                Lorem ipsum available isn but the majority have suffered
                alteratin in some or <br /> form injected. Lorem Ipsum. Proin
                gravida nibh vel velit auctor aliqueenean <br /> sollicitudin,
                lorem quis bibendum auctor consequat.
              </p>
            </div>
            <div className="mt-8">
              <div className="grid grid-cols-2 pb-3 border-b-2">
                <p className="font-medium">Country</p>
                <p className="text-base-content">United Kingdom</p>
              </div>
              <div className="grid grid-cols-2 mt-2 pb-3 border-b-2">
                <p className="font-medium">Languages Spoken</p>
                <p className="text-base-content">English</p>
              </div>
              <div className="grid grid-cols-2 mt-2 pb-3 border-b-2">
                <p className="font-medium">Visa Requirements</p>
                <p className="text-base-content">Personal Documents Requied</p>
              </div>
              <div className="grid grid-cols-2 mt-2 pb-3 border-b-2">
                <p className="font-medium">Area (km2)</p>
                <p className="text-base-content">88.000 km2</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Details;