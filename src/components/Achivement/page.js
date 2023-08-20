"use client"
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import 'swiper/css';
import 'swiper/css/pagination';
import { Rating } from '@smastrom/react-rating';
import { FaStar } from 'react-icons/fa6';
import Image from 'next/image';

const Achievements = () => {
    return (
        <div className='max-w-7xl mx-auto my-20'>
            <div className=''>
                <div className='text-center'>
                    <h1 className='lg:text-8xl text-2xl font-bold tracking-widest mb-5'>ACHIEVEMENTS</h1>
                </div>
                <div className='lg:flex justify-between'>
                    <div className='text-center border py-10 px-16 space-y-5 rounded-md shadow-xl'>
                        <Image width={125}   height={125} className='border rounded-full p-4 bg-green-100 text-green-300 transition ease-in-out delay-150 hover:bg-green-500 hover:scale-110 mb-5' src="https://cdn-icons-png.flaticon.com/128/5730/5730094.png" alt="" />
                        <span className='text-5xl font-bold mt-4'>3500+</span>
                        <p className='text-gray-500 text-xl'>Happy Traveler</p>
                    </div>
                    <div className='text-center border py-10 px-16 space-y-5  rounded-md shadow-xl'>
                        <Image width={125}   height={125} className='border rounded-full p-4 bg-green-100 text-green-300 hover:bg-green-500 hover:scale-110 mb-5' src="https://cdn-icons-png.flaticon.com/128/2224/2224886.png" alt="" />
                        <span className='text-5xl font-bold mt-4'>1650+</span>
                        <p className='text-gray-500 text-xl'>Total Success</p>
                    </div>
                    <div className='text-center border py-10 px-16 space-y-5 rounded-md shadow-xl'>
                        <Image width={125}  height={125} className='border rounded-full p-4 bg-green-100 text-green-300 hover:bg-green-500 hover:scale-110 mb-5' src="https://cdn-icons-png.flaticon.com/128/2190/2190548.png" alt="" />
                        <span className='text-5xl font-bold mt-4'>99.5%</span>
                        <p className='text-gray-500 text-xl'>Positive Review</p>
                    </div>
                    <div className='text-center border py-10 px-16 space-y-5 rounded-md shadow-xl'>
                        <Image width={125} height={125}  className='border rounded-full p-4 bg-green-100 text-green-300 hover:bg-green-500 hover:scale-110 mb-5' src="https://cdn-icons-png.flaticon.com/128/3395/3395949.png" alt="" />
                        <span className='text-5xl font-bold mt-4'>62k+ </span>
                        <p className='text-gray-500 text-xl'>Award Wining </p>
                    </div>
                </div>
            </div>
            <div className='bg-green-50 lg:flex'>
                <div className='lg:w-1/2 p-2'>
                    <div className='my-10 space-y-6'>
                        <span className='text-green-600 bg-green-200 border px-4 py-2 rounded font-bold'>Our Testimonials</span>
                        <h1 className='text-5xl font-bold my-4'>What they’re talking <br /> about our policy</h1>
                        <p>Lorem Ipsum is simply dummy text of free available in market the printing and typesetting industry has been.</p>
                        <button className='border px-5 py-4 bg-green-500 text-white font-bold rounded'>All Testimonials</button>
                    </div>
                </div>
                <div className='lg:w-1/2 p-20 '>
                    <div className='lg:h-[200px] border-b-4 border-green-600 p-10 shadow-xl bg-white relative'>
                        <div style={{ borderBottomLeftRadius: '100px' }} className='text-right bg-green-600 w-20 h-20 absolute top-0 right-0'>
                            <span className='text-3xl text-center text-white font-bold pr-4 pt-6'>99</span>
                        </div>
                        <div className='flex gap-1 pb-3'>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa cupiditate asperiores voluptatum voluptatem nisi minus incidunt laborum fugiat non eos?</p>
                    </div>
                    <div className='flex justify-center gap-5 items-center pt-10'>
                        <div className='border-4 border-green-700 rounded-full'>
                            <Image width={64} height={64} className='w-16 rounded-full border-4' src="https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                        </div>
                        <div>
                            <p>Jesica Brown</p>
                            <p>Founder & CEO</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Achievements;