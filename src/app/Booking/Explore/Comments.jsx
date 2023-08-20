import React from 'react';
import img from "../../../../public/Booking/empty-user.png";
import Image from 'next/image';
import { FaReply } from 'react-icons/fa';
import { AiFillStar } from 'react-icons/ai';
import CommentRating from './CommentRating';

const Comments = () => {
    return (
      <div>
        <h2 className="font-bold text-3xl my-10">
          3 thoughts on “Discovery Island Kayak Tour”{" "}
        </h2>
        <div className="flex gap-5">
          <div>
            <Image src={img} className="w-16 rounded-full" alt="image"></Image>
          </div>

          <div className="flex-1">
            <div className="flex justify-between">
              <div>
                <h2 className="font-bold">Admin</h2>
                <p className="text-[#696868]">February 8, 2023</p>
              </div>
              <div>
                <p className="flex items-center gap-1">
                  <FaReply /> reply
                </p>
              </div>
            </div>
            <div>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-9 mt-4">
                <CommentRating></CommentRating>
              </div>
              <div className="mt-4">
                <p className="text-[#696868] ">
                  We always stay at here when in town. The location is great,
                  staff is wonderful and we love the overall feel. Beautiful
                  view from the here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Comments;