import React from "react";
import CommentRating from "./CommentRating";

const AddComment = () => {
  return (
    <div>
      <h2 className="font-bold text-3xl my-7">Add a Comment</h2>
      <p className="text-[#5e5a5a]">
        Your email address will not be published.
      </p>
      <div className="flex justify-between">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
          <CommentRating></CommentRating>
        </div>
        <div className="bg-[#F3F8F6] grid place-items-center text-center">
          <div className="p-6 rounded-lg">
            <h1 className="text-yellow-500 text-4xl font-medium mb-2 ">5.00</h1>
            <p className="text-[#5e5a5a]">Average rating</p>
          </div>
        </div>
      </div>
      <form className="mt-7">
        <div className="flex gap-5">
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

export default AddComment;
