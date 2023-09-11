"use client";
import React from "react";
import image1 from "../../../../public//Booking/1.jpg";
import image2 from "../../../../public//Booking/2.jpg";
import image3 from "../../../../public//Booking/3.jpg";
import image4 from "../../../../public//Booking/4.jpg";
import image5 from "../../../../public//Booking/5.jpg";
import image6 from "../../../../public//Booking/6.jpg";
import image7 from "../../../../public//Booking/7.jpg";
import image8 from "../../../../public//Booking/8.jpg";
import image9 from "../../../../public//Booking/9.jpg";
import image10 from "../../../../public//Booking/10.jpg";
import image11 from "../../../../public//Booking/11.jpg";
import image12 from "../../../../public//Booking/12.jpg";
import image13 from "../../../../public//Booking/13.jpg";
import Image from "next/image";
import './BookingSlider.css'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Navigation, Pagination } from "swiper";

const BookingSlider = () => {
  const imageData = [
    {
      id: 1,
      image: image1,
    },
    {
      id: 2,
      image: image2,
    },
    {
      id: 3,
      image: image3,
    },
    {
      id: 4,
      image: image4,
    },
    {
      id: 5,
      image: image5,
    },
    {
      id: 6,
      image: image6,
    },
    {
      id: 7,
      image: image7,
    },
    {
      id: 8,
      image: image8,
    },
    {
      id: 9,
      image: image9,
    },
    {
      id: 10,
      image: image10,
    },
    {
      id: 11,
      image: image11,
    },
    {
      id: 12,
      image: image12,
    },
    {
      id: 13,
      image: image13,
    },
  ];
  return (
    <div className="">
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
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
          navigation
          modules={[Navigation]}
          className="mySwiper"
        >
          {imageData.map((i) => (
            <SwiperSlide className="overflow-hidden" key={i.id}>
              <Image
                className="h-[350px] md:h-[300px] rounded-lg  ease-in duration-300  hover:scale-110 w-full"
                src={i.image}
                alt="img"
              ></Image>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </div>
  );
};
//  <Image key={i.id} src={i.image} alt="img"></Image>

export default BookingSlider;
