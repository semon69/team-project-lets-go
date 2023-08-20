import Image from "next/image";
import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { FaUserAlt } from "react-icons/fa";
import { FaFolderOpen, FaQuoteLeft } from "react-icons/fa6";
import { FiTwitter } from "react-icons/fi";
import PostQuote from "./PostQuote";

const PostDetails = () => {
  return (
    <div>
      <Image
        className="w-full h-full mb-4 rounded-lg"
        src="https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2022/12/blog-01.jpg"
        alt="img"
        width="5000"
        height="5000"
      />
      <div>
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <FaUserAlt className="text-green-500 " />
            <p>Admin</p>
          </div>
          <div className="flex items-center gap-2">
            <FaFolderOpen className="text-green-500" />
            <p>Adventure</p>
          </div>
        </div>
      </div>
      <h2 className="my-3 text-3xl font-bold">
        Thins to see and do when visiting Japan
      </h2>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium totam rem aperiam, eaque ipsa quae ab
        illo veritatis et quasi beatae vitae dicta sunt explicabo.
      </p>

      <h2 className="my-3 text-2xl font-bold">Build camping easily.</h2>
      <p>
        Less time collecting water means more time in class. Clean water and
        proper toilets at school means teenage girls dont have to stay home for
        a week out of every month.
      </p>

      <PostQuote />
      <h2 className="my-3 text-2xl font-bold">
        Great opportunity for adventure & travels
      </h2>
      <p>
        Neque porro quisquam estey qui dolorem ipsum quia dolor sit amet,
        consectetur, adipisci velit sed quia non numquam eius modie tempora
        incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim
        ad minima veniam quis nostrum exercitationem ullam.
      </p>
      <hr className="mt-8" />
      <div className="flex items-center justify-between">
        <div className="flex gap-4 ">
          <h3 className="font-bold px-[15px] ">Tags:</h3>
          <p className="bg-gray-300 rounded-md px-[15px] hover:bg-green-400 ">
            Adventure
          </p>
          <p className="bg-gray-300 rounded-md px-[15px] hover:bg-green-400">
            Camping
          </p>
          <p className="bg-gray-300 rounded-md px-[15px] hover:bg-green-400">
            Travels
          </p>
        </div>
        <div className="flex gap-2 ">
          <div className="flex">
            <div className="h-[40px]  hover:bg-green-400 w-[40px] rounded-full  flex items-center justify-center">
              <FiTwitter className="w-5 h-5 hover:text-black " />
            </div>
            <div className="h-[40px]  hover:bg-green-400 w-[40px] rounded-full  flex items-center justify-center">
              <CiFacebook className="w-5 h-5 hover:text-black" />
            </div>
            <div className="h-[40px]  hover:bg-green-400 w-[40px] rounded-full  flex items-center justify-center">
              <AiOutlineInstagram className="w-5 h-5 hover:text-black" />
            </div>
            <div className="h-[40px]  hover:bg-green-400 w-[40px] rounded-full  flex items-center justify-center">
              <CiLinkedin className="w-5 h-5 hover:text-black" />
            </div>
          </div>
        </div>
      </div>
      <div className="my-6">
        <div className="flex items-center gap-6 px-10 py-10 bg-gray-200 rounded-md">
          <div>
            <FaUserAlt className="w-32 h-32" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">Admin</h2>
            <p className="text-green-500">-----------</p>
            <h3 className="my-4 ">
              Metus eu, nisi nibh et adipiscing natoque morbi integer
              scelerisque tincidunt mauris. Lectus molestie nisl rutrum cras
              dictum lectus molestie leoenim.
            </h3>

            <p className="italic font-semibold text-green-500">UserName</p>
          </div>
        </div>
      </div>
      <h2 className="text-2xl font-bold">Add A Comment</h2>

      <form className="mt-7">
        <p className="mb-2 italic">Your email address will not be published.</p>
        <div className="flex flex-col gap-5">
          <input
            type="text"
            required
            placeholder="Your name*"
            className="input w-full bg-[#F3F8F6] py-8"
          />
          <input
            type="email"
            required
            placeholder="Your Email*"
            className="input w-full bg-[#F3F8F6] py-8"
          />
        </div>
        <textarea
          required
          placeholder="Write your comment"
          className="textarea bg-[#F3F8F6] mt-6 textarea-lg w-full"
        ></textarea>
        <div className="flex items-center gap-2 my-4">
          <input
            required
            type="checkbox"
            className="checkbox checkbox-primary"
          />
          <p className="text-[#5e5a5a] ">
            Save my name, email, and website in this browser for the next time I
            comment.
          </p>
        </div>
        <button className="btn bg-[#72B357] text-white hover:bg-[#73c051]">
          Post comment
        </button>
      </form>
    </div>
  );
};

export default PostDetails;
