import React from 'react';
import "./Adventure.css";
import { FaArrowUpRightDots } from "react-icons/fa6";
import './Adventure.css'


const CardSlider = ({img}) => {
    return (
      <div
        className=" bg-cover group bg-center h-[400px]  rounded-lg"
        style={{ background: `url('${img}')` }}
      >
        <div className="bg-white transition-all text-black mx-5 h-[136px] group-hover:h-[253px] w-[255px]  rounded-xl p-6 absolute bottom-14 ">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl relative adventure-title flex flex-col-reverse font-bold mb-2">
              Couple <br /> camping or <br /> cabin
            </h1>
            <span className="text-2xl font-bold bg-[#63AB45] group-hover:bg-[#F7921E] grid place-items-center ease-in text-white h-12 w-12 rounded-full">
              <FaArrowUpRightDots />
            </span>
          </div>
          <p className="invisible opacity-0 group-hover:visible group-hover:opacity-100 delay-75">
            Lorem ipsum <br /> dolor sit amet <br /> consectetur.
          </p>
        </div>
      </div>
    );
};

export default CardSlider;