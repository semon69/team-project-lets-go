import React from 'react';
import { AiFillStar } from 'react-icons/ai';

const CommentRating = () => {
    return (
      <>
        <div>
          <p className="text-[#696868] mb-2">Quality</p>
          <div className="flex gap-1">
            <AiFillStar className="h-5 w-5 text-yellow-500 "></AiFillStar>
            <AiFillStar className="h-5 w-5 text-yellow-500 "></AiFillStar>
            <AiFillStar className="h-5 w-5 text-yellow-500 "></AiFillStar>
            <AiFillStar className="h-5 w-5 text-yellow-500 "></AiFillStar>
            <AiFillStar className="h-5 w-5 text-yellow-500 "></AiFillStar>
          </div>
        </div>

        <div>
          <p className="text-[#696868] mb-2">Location</p>
          <div className="flex gap-1">
            <AiFillStar className="h-5 w-5 text-yellow-500 "></AiFillStar>
            <AiFillStar className="h-5 w-5 text-yellow-500 "></AiFillStar>
            <AiFillStar className="h-5 w-5 text-yellow-500 "></AiFillStar>
            <AiFillStar className="h-5 w-5 text-yellow-500 "></AiFillStar>
            <AiFillStar className="h-5 w-5 text-yellow-500 "></AiFillStar>
          </div>
        </div>
        <div>
          <p className="text-[#696868] mb-2">Amenities</p>
          <div className="flex gap-1">
            <AiFillStar className="h-5 w-5 text-yellow-500 "></AiFillStar>
            <AiFillStar className="h-5 w-5 text-yellow-500 "></AiFillStar>
            <AiFillStar className="h-5 w-5 text-yellow-500 "></AiFillStar>
            <AiFillStar className="h-5 w-5 text-yellow-500 "></AiFillStar>
            <AiFillStar className="h-5 w-5 text-yellow-500 "></AiFillStar>
          </div>
        </div>
        <div>
          <p className="text-[#696868] mb-2">Services</p>
          <div className="flex gap-1">
            <AiFillStar className="h-5 w-5 text-yellow-500 "></AiFillStar>
            <AiFillStar className="h-5 w-5 text-yellow-500 "></AiFillStar>
            <AiFillStar className="h-5 w-5 text-yellow-500 "></AiFillStar>
            <AiFillStar className="h-5 w-5 text-yellow-500 "></AiFillStar>
            <AiFillStar className="h-5 w-5 text-yellow-500 "></AiFillStar>
          </div>
        </div>
        <div>
          <p className="text-[#696868] mb-2">Price</p>
          <div className="flex gap-1">
            <AiFillStar className="h-5 w-5 text-yellow-500 "></AiFillStar>
            <AiFillStar className="h-5 w-5 text-yellow-500 "></AiFillStar>
            <AiFillStar className="h-5 w-5 text-yellow-500 "></AiFillStar>
            <AiFillStar className="h-5 w-5 text-yellow-500 "></AiFillStar>
            <AiFillStar className="h-5 w-5 text-yellow-500 "></AiFillStar>
          </div>
        </div>
      </>
    );
};

export default CommentRating;