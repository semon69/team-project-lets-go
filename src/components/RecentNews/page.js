"use client"
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import recentNews from '../../../public/recentNews.json'
import SingleRecentNews from '../SingleRecentNews/SingleRecentNews';

const RecentNews = () => {

    console.log(recentNews);

    return (
        <div className='my-20 max-w-7xl mx-auto'>
            <div className='flex justify-between items-center'>
                <div className='my-10 space-y-6'>
                    <span className='text-green-600 bg-green-200 border px-4 py-2 rounded font-bold'>Recent News Feed</span>
                    <h1 className='lg:text-5xl text-2xl font-bold my-4'>Amazing News & Blog For <br /> Every Single Update</h1>
                </div>
                <button className='border lg:px-5 px-2 lg:py-4 py-1 bg-green-500 text-white font-bold rounded'>View More</button>
            </div>
            <div>
                <Swiper
                    // slidesPerView={3}
                    // spaceBetween={30}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                >

                    {/* <SwiperSlide> */}
                    {
                        recentNews.map(news =>
                            <SwiperSlide key={news.id}>
                                <SingleRecentNews news={news}></SingleRecentNews>
                            </SwiperSlide>

                        )
                    }

                </Swiper>
            </div>
        </div >
    );
};

export default RecentNews;