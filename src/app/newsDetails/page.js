import AllCategories from "@/components/newsDetailsComponent/AllCategories";
import AllTags from "@/components/newsDetailsComponent/AllTags";
import PostDetails from "@/components/newsDetailsComponent/PostDetails";
import RecentPost from "@/components/newsDetailsComponent/RecentPost";
import React from "react";

const page = () => {
  return (
    <div className="">
      <div
        className="text-white bg-center bg-no-repeat bg-stone-500 bg-blend-multiply bg-cover lg:h-[450px] h-[300px]"
        style={{
          backgroundImage:
            "url('https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/01/tour-5.jpg')",
        }}
      >
        <div className="text-center lg:p-32 pt-16">
          <p className="text-3xl lg:text-5xl font-bold pb-4 pt-10">
            Things To See And Do When Visiting Japan
          </p>
          <p className="">Home / Adventure</p>
        </div>
      </div>
      <div className="lg:flex py-20 max-w-7xl mx-auto">
        <div className="lg:w-2/3 p-2">
          <PostDetails />
        </div>
        <div className="lg:w-1/3 p-2">
          <AllCategories></AllCategories>
          <RecentPost></RecentPost>
          <AllTags></AllTags>
        </div>
      </div>
    </div>
  );
};

export default page;
