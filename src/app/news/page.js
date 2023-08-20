"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaUserCircle, FaRegComments, FaLongArrowAltRight } from "react-icons/fa";


const NewsPage = () => {
  const [newsData, setNewsData] = useState([]);

  const fetchNewsData = async () => {
    try {
      const res = await fetch(`./newsData/newsData.json`);
      const data = await res.json();
      setNewsData(data);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchNewsData();
  }, []);

  return (
    <div className="py-[100px]">
      <div>
        {/* cover  */}
        <div
          className="h-[30vh] bg-cover bg-center"
          style={{
            backgroundImage: `url(${"./hiking.jpg"})`,
          }}
        >
          <div className=" h-full backdrop-brightness-75">
            <div className=" h-full  max-w-screen-xl mx-auto">
              <div className="text-white flex flex-col justify-center h-full ps-10">
                <h1 className="text-5xl font-bold">News</h1>
                <p className="text-xl">Home / News</p>
              </div>
            </div>
          </div>
        </div>

        {/* content  */}
        <div className="max-w-screen-xl mx-auto py-10">
          <div className="md:grid grid-cols-3 gap-10 px-5">
            {newsData.map((news) => (
              <div key={news.id}>
                <div className="p-2 shadow-md rounded-md mb-5 md:mb-0">
                  {/* <img src={news.image} alt="" className="rounded-lg relative" /> */}
                  <Image src={`${news.image}`} width={370} height={320} alt="img" className="rounded-lg" />
                  <p className="bg-[#F7921E] inline-block px-3 text-white font-semibold py-1 ">{news.category}</p>

                  <div className="flex items-center gap-5 pt-10">
                    <div className="flex items-center gap-2">
                      <FaUserCircle className="text-[#63AB45]" />
                      <p>Admin</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaRegComments className="text-[#63AB45]" />
                      <p>Comments</p>
                    </div>
                  </div>

                  <div className="pb-3">
                    <h5 className="text-2xl font-bold py-2">{news.name}</h5>
                    <p className="text-[#82828A]">{news.details}</p>
                  </div>

                  <button className="flex items-center gap-2"><p>Read More</p> <FaLongArrowAltRight className="text-[#63AB45]" /> </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
