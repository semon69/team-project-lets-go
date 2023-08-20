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

    

    return (
        <div className='mx-auto my-20 max-w-7xl'>
            <div className='flex items-center justify-between'>
                <div className='my-10 space-y-6'>
                    <span className='px-4 py-2 font-bold text-green-600 bg-green-200 border rounded'>Recent News Feed</span>
                    <h1 className='my-4 text-2xl font-bold lg:text-5xl'>Amazing News & Blog For <br /> Every Single Update</h1>
                </div>
                <button className='px-2 py-1 font-bold text-white bg-green-500 border rounded lg:px-5 lg:py-4'>View More</button>
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