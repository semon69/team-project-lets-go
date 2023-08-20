import React from "react";
import { FaQuoteLeft } from "react-icons/fa6";

const PostQuote = () => {
  return (
    <div className="my-6">
      <div className="rounded-lg px-10 py-10 bg-gray-200">
        <FaQuoteLeft className="h-16 w-16"></FaQuoteLeft>
        <h3 className="my-4 text-lg ">
          Metus eu, nisi nibh et adipiscing natoque morbi integer scelerisque
          tincidunt mauris. Lectus molestie nisl rutrum cras dictum lectus
          molestie leoenim.
        </h3>
        <p className="text-green-500">-----------</p>
        <p className="italic font-semibold text-green-500">UserName</p>
      </div>
    </div>
  );
};

export default PostQuote;
