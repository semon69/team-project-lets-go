"use client";
import React from "react";
import "./Adventure.css";
import { FaArrowUpRightDots } from "react-icons/fa6";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "red",
        height: "40px",
        width: "40px",
        borderRadius: "100px",
        display: "grid",
        placeItems: "center",
        color: "white",
        zIndex: 1,
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "black",
        height: "40px",
        width: "40px",
        borderRadius: "100px",
        display: "grid",
        placeItems: "center",
        color: "white",
        zIndex: 1
      }}
      onClick={onClick}
    />
  );
}

const Adventure = () => {
  const imageData = [
    {
      id: 1,
      image: "https://i.ibb.co/BNpFC15/1.jpg",
    },
    {
      id: 2,
      image: "https://i.ibb.co/dcdZYKx/2.jpg",
    },
    {
      id: 3,
      image: "https://i.ibb.co/fGwnrjS/3.jpg",
    },
    {
      id: 4,
      image: "https://i.ibb.co/ngYwJ6c/4.jpg",
    },
    {
      id: 5,
      image: "https://i.ibb.co/D5BMyNv/5.jpg",
    },
    {
      id: 6,
      image: "https://i.ibb.co/WknC24c/6.jpg",
    },
  ];
  var settings = {
    dots: true,
    infinite: false,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <SamplePrevArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="mx-8">
      <div className="text-center my-8">
        <span className="text-green-600 bg-green-200 border px-4 py-2 rounded font-bold">
          Popular Activities
        </span>
        <h1 className="text-4xl font-bold my-4">Explore Real Adventure</h1>
      </div>
      <div className="container mx-auto  relative px-4  ">
        <Slider {...settings}>
          {imageData.map((i) => (
            <div
              key={i.id}
              className=" bg-cover full-card shadow-md bg-no-repeat bg-center overflow-hidden group h-[400px]  rounded-lg"
              style={{ background: `url('${i.image}')` }}
            >
              <Image
                className="h-full object-cover rounded-md relative ease-in duration-[5000ms] group-hover:scale-150"
                src={i.image}
                height="5000"
                width="5000"
                alt="dd"
              ></Image>
              <div className="bg-white ease-in duration-300 text-black mx-5 h-[136px] group-hover:h-[253px] w-[255px]  rounded-xl p-6 absolute bottom-14 ">
                <div className="flex items-center justify-between">
                  <h1 className="text-2xl relative adventure-title flex flex-col-reverse font-bold mb-2">
                    Couple <br /> camping or <br /> cabin
                  </h1>
                  <span className="text-2xl font-bold bg-[#63AB45] group-hover:bg-[#F7921E] grid place-items-center ease-in text-white h-12 w-12 rounded-full">
                    <FaArrowUpRightDots />
                  </span>
                </div>
                <p className="invisible opacity-0 group-hover:visible ease-in group-hover:opacity-100 delay-300">
                  Lorem ipsum <br /> dolor sit amet <br /> consectetur.
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Adventure;
