import Image from 'next/image';
import React from 'react';
import { AiFillStar } from 'react-icons/ai';

const SingleDeals = ({img, text, amount}) => {
    return (
      <div className="flex gap-3 items-center my-4">
        <Image className="w-24 rounded-lg" src={img} alt="image"></Image>
        <div>
          <div className="flex">
            <AiFillStar className="h-5 w-5 text-yellow-500 "></AiFillStar>
            <AiFillStar className="h-5 w-5 text-yellow-500 "></AiFillStar>
            <AiFillStar className="h-5 w-5 text-yellow-500 "></AiFillStar>
            <AiFillStar className="h-5 w-5 text-yellow-500 "></AiFillStar>
            <AiFillStar className="h-5 w-5 text-yellow-500 "></AiFillStar>
          </div>
          <p className="text-black font-bold hover:text-green-500">
            {text}
          </p>
          <p className="text-[#615f5f] font-medium">
            from <span className="text-green-500">{amount}</span>
          </p>
        </div>
      </div>
    );
};

export default SingleDeals;