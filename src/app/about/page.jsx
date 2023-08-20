'use client'
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import React from 'react';
import travel from '../../../public/ni7_images/home/popular_activity/travel.png'
import tent from '../../../public/ni7_images/home/popular_activity/tent.png'
import mountain_biking from '../../../public/ni7_images/home/popular_activity/mountain_biking.png'
import fishing from '../../../public/ni7_images/home/popular_activity/fishing.png'
import climbing from '../../../public/ni7_images/home/popular_activity/hiking.png'
import who_we_are from '../../../public/ni7_images/about/who_we_are.jpg'
import team_members_bg from '../../../public/ni7_images/about/team_members_bg.png'
import { BsFillTelephoneFill, BsShare } from "react-icons/bs";
import Image from 'next/image';
import Ready from '@/components/Ready/Ready';


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import 'swiper/css/navigation';
// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";

import s1 from '../../../public/ni7_images/about/s1.jpg'
import s2 from '../../../public/ni7_images/about/s2.jpg'
import s3 from '../../../public/ni7_images/about/s3.jpg'
import s4 from '../../../public/ni7_images/about/s4.jpg'
import s5 from '../../../public/ni7_images/about/s5.jpg'

import i1 from '../../../public/ni7_images/about/i1.jpg'
import i2 from '../../../public/ni7_images/about/i2.jpg'
import i3 from '../../../public/ni7_images/about/i3.jpg'

import check from '../../../public/ni7_images/about/badge-check.png'
import hand from '../../../public/ni7_images/about/hand.png'
import helmet from '../../../public/ni7_images/about/helmet.png'



import play_btn from '../../../public/ni7_images/home/Ready/play-button.json'
import ready_to_travel_bg from '../../../public/ni7_images/about/ready_to_travel_bg.jpg'
import Lottie from "lottie-react";

import quality_services_1st from '../../../public/ni7_images/about/quality_services_1st.png'


import { AiFillStar } from "react-icons/ai";
import quote from '../../../public/ni7_images/about/quote.png'
import t1 from '../../../public/ni7_images/about/t1.jpg'


import brand from '../../../public/ni7_images/about/brand.png'
const aboutPage = () => {
    return (
        <div>


            {/* about  */}
            <div
                className="h-[50vh] bg-cover bg-center"
                style={{
                    backgroundImage: `url(${"./hiking.jpg"})`,
                }}
            >
                <div className=" h-full backdrop-brightness-75">
                    <div className=" h-full  max-w-screen-xl mx-auto">
                        <div className="text-white flex flex-col justify-center h-full ps-10">
                            <h1 className="text-5xl font-bold">About</h1>
                            <p className="text-xl">People Don’t Take, Trips Take People</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* availability */}
            <div className=' py-28 px-8'>

                <div className=' grid grid-cols-1 lg:grid-cols-2 gap-8'>

                    {/* 1st */}
                    <div className={`space-y-3`}>
                        <p className={` rounded-lg font-bold text-center py-2 w-[150px] text-[#6eb152] bg-[#ecf5e8]`}>
                            Availability</p>

                        <h3 className={`text-xl lg:text-5xl  lg:w-[676px] mx-auto font-bold pt-2   leading-snug`}>
                            Explore GoWilds Real Adventure & Travels
                        </h3>

                        <p className='pt-5'>Sit amet consectetur integer tincidunt sceleries noda lesry volutpat neque fermentum malesuada scelequecy leocras odio blandit rhoncus eues feugiat.</p>

                        <div className='flex items-center gap-3 pt-8'>
                            <Image className='w-[50px] h-[50px]' src={travel} alt="travel" />
                            <div>
                                <p className='font-bold'>Protect your life</p>
                                <p>We are here for look even you from start to finish.</p>
                            </div>
                        </div>

                        <div className='lg:flex items-center gap-3 pt-8'>
                            <div className='w-[50px] h-[50px] bg-yellow-500 rounded-full flex justify-center items-center'>
                                <BsFillTelephoneFill className='w-[30px] h-[30px] text-white' />
                            </div>
                            <div className='lg:flex gap-3'>
                                <div>
                                    <p className='font-bold'>Call experts</p>
                                    <p>+92 (03) 68-090</p>
                                </div>

                                <button className='w-[204px] h-[59px] bg-[#5a9b3e] mt-5 lg:mt-0 text-white text-center rounded-lg'>Discover More</button>
                            </div>
                        </div>
                    </div>



                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                        {/* 1st */}
                        <div className='py-8 px-5 shadow-2xl  h-[310px] rounded-lg'>
                            <div className='w-[80px] h-[80px] shadow-xl  rounded-full flex justify-center items-center hover:bg-[#5a9b3e]'>
                                <Image src={tent} alt='tent' className='w-[40px] h-[40px]' />
                            </div>

                            <h3 className='text-xl font-bold mt-5 '>Tent Camping</h3>
                            <p className='mt-3'>Sit amet consectutur intege tincidunt sceleries malesuada sceleria massa</p>

                        </div>
                        <div className='py-8 px-5 shadow-2xl  h-[310px] rounded-lg'>
                            <div className='w-[80px] h-[80px]  rounded-full flex justify-center items-center bg-[#5a9b3e]'>
                                <Image src={mountain_biking} alt='mountain_biking' className='w-[40px] h-[40px]' />
                            </div>

                            <h3 className='text-xl font-bold mt-5 '>Mountain Biking</h3>
                            <p className='mt-3'>Sit amet consectutur intege tincidunt sceleries malesuada sceleria massa</p>

                        </div>

                        <div className='py-8 px-5 shadow-2xl  h-[310px] rounded-lg'>
                            <div className='w-[80px] h-[80px] shadow-xl rounded-full flex justify-center items-center hover:bg-[#5a9b3e]'>
                                <Image src={fishing} alt='fishing' className='w-[40px] h-[40px]' />
                            </div>

                            <h3 className='text-xl font-bold mt-5 '>Fishing & Boat</h3>
                            <p className='mt-3'>Sit amet consectutur intege tincidunt sceleries malesuada sceleria massa</p>

                        </div>

                        <div className='py-8 px-5 shadow-2xl  h-[310px] rounded-lg'>
                            <div className='w-[80px] h-[80px] shadow-xl rounded-full flex justify-center items-center hover:bg-[#5a9b3e]'>
                                <Image src={climbing} alt='climbing' className='w-[40px] h-[40px]' />
                            </div>

                            <h3 className='text-xl font-bold mt-5 '>Adventure climbing</h3>
                            <p className='mt-3'>Sit amet consectutur intege tincidunt sceleries malesuada sceleria massa</p>

                        </div>


                    </div>

                </div>
            </div>

            {/* ready */}
            <Ready></Ready>
            {/* who we are */}
            <div className='px-8 pt-10 grid grid-cols-1 lg:grid-cols-2 gap-16  '>


                {/* 1st */}
                <div className='rounded-t-lg '>
                    <Image className='rounded-t-full' src={who_we_are} alt='who we are'></Image>
                </div>
                {/* 2nd */}
                <div className={`space-y-3 mt-10 `}>
                    <p className={` rounded-lg font-bold text-center py-2 w-[150px] text-[#6eb152] bg-[#ecf5e8]`}>
                        Who We are</p>

                    <h3 className={`text-xl lg:text-5xl   mx-auto font-bold pt-2   leading-snug`}>
                        Great Opportunity For Adventure & Travels
                    </h3>

                    <p className='pt-5'>Sit amet consectetur velit integer tincidunt sceleries nodalesry volutpat neque fermentum malesuada sceleris quecy massa lacus ultrices eget leo cras odio blandit rhoncus eues feugiat.</p>

                    <div className='flex items-center gap-3 pt-8'>

                        <Image className='w-[50px] h-[50px]' src={travel} alt="travel" />
                        <div>
                            <p className='font-bold'>Protect your life</p>
                            <p>We are here for look even you from start to finish.</p>
                        </div>
                    </div>

                    <div className='lg:flex items-center gap-3 pt-8'>
                        <div className='w-[50px] h-[50px] bg-yellow-500 rounded-full flex justify-center items-center'>
                            <BsFillTelephoneFill className='w-[30px] h-[30px] text-white' />
                        </div>
                        <div className='lg:flex gap-3'>
                            <div>
                                <p className='font-bold'>Call experts</p>
                                <p>+92 (03) 68-090</p>
                            </div>

                            <button className='w-[204px] h-[59px] mt-5 lg:mt-0 bg-[#5a9b3e] text-white text-center rounded-lg'>Discover More</button>
                        </div>
                    </div>
                </div>

            </div>

            {/* Team members */}

            <div className='bg-cover bg-center' style={{ backgroundImage: `url('${team_members_bg.src}')` }}>
                <div className='py-28 px-8'>
                    <div className='w-full h-full'>
                        <SectionTitle
                            title="Team members"
                            title_color="text-[#6eb152]"
                            title_bg="bg-[#ecf5e8]"
                            subtitle="We’ve Expert Team Members Meet With Team"
                            subtitle_color="text-black"
                        ></SectionTitle>
                    </div>
                    <div className="mt-10 ">
                        <>
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={10}
                                pagination={{
                                    clickable: true,
                                }}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                breakpoints={{
                                    640: {
                                        slidesPerView: 2,
                                        spaceBetween: 30,
                                    },
                                    768: {
                                        slidesPerView: 3,
                                        spaceBetween: 10,
                                    },
                                }}
                                navigation
                                modules={[Navigation, Autoplay]}
                                className="mySwiper"
                            >

                                {/* 1st */}
                                <SwiperSlide className="rounded-lg">

                                    <div className='relative px-5 w-[350px] mx-auto'>
                                        <Image className='rounded-lg' src={s1} alt='s1'></Image>
                                        <div className='bg-[#6eb152] mr-4 rounded-r-lg absolute px-2 py-2 bottom-0 right-1 '>
                                            <BsShare className='h-6 w-6 text-white ' />
                                        </div>
                                    </div>

                                    <div className='text-center py-2 bg-white border shadow-lg mx-auto rounded-lg -mt-36 w-[380px] h-[250px] '>
                                        {/* <div className='text-center py-2 bg-slate-300 mx-auto rounded-lg -mt-36 w-[380px] h-[250px] '> */}
                                        <h3 className='pt-40 text-xl font-bold '>Fred Andrew</h3>
                                        <p>Consultant</p>
                                    </div>

                                </SwiperSlide>

                                {/* 2nd */}
                                <SwiperSlide className="rounded-lg">

                                    <div className='relative px-5 w-[350px] mx-auto'>
                                        <Image className='rounded-lg' src={s2} alt='s2'></Image>
                                        <div className='bg-[#6eb152] mr-4 rounded-r-lg absolute px-2 py-2 bottom-0 right-1 '>
                                            <BsShare className='h-6 w-6 text-white ' />
                                        </div>
                                    </div>

                                    <div className='text-center py-2 bg-white border shadow-lg mx-auto rounded-lg -mt-36 w-[380px] h-[250px] '>
                                        <h3 className='pt-40 text-xl font-bold '>Sara Rose</h3>
                                        <p>Consultant</p>
                                    </div>

                                </SwiperSlide>
                                {/* 3rd */}
                                <SwiperSlide className="rounded-lg">

                                    <div className='relative px-5 w-[350px] mx-auto'>
                                        <Image className='rounded-lg' src={s3} alt='s3'></Image>
                                        <div className='bg-[#6eb152] mr-4 rounded-r-lg absolute px-2 py-2 bottom-0 right-1 '>
                                            <BsShare className='h-6 w-6 text-white ' />
                                        </div>
                                    </div>

                                    <div className='text-center py-2 bg-white border shadow-lg mx-auto rounded-lg -mt-36 w-[380px] h-[250px] '>
                                        <h3 className='pt-40 text-xl font-bold '>Jessica Brown</h3>
                                        <p>Consultant</p>
                                    </div>

                                </SwiperSlide>

                                {/* 4th */}
                                <SwiperSlide className="rounded-lg">

                                    <div className='relative px-5 w-[350px] mx-auto'>
                                        <Image className='rounded-lg' src={s4} alt='s4'></Image>
                                        <div className='bg-[#6eb152] mr-4 rounded-r-lg absolute px-2 py-2 bottom-0 right-1 '>
                                            <BsShare className='h-6 w-6 text-white ' />
                                        </div>
                                    </div>

                                    <div className='text-center py-2 bg-white border shadow-lg mx-auto rounded-lg -mt-36 w-[380px] h-[250px] '>
                                        <h3 className='pt-40 text-xl font-bold '>Yoni Albert</h3>
                                        <p>Consultant</p>
                                    </div>

                                </SwiperSlide>
                                {/* 5th */}
                                <SwiperSlide className="rounded-lg">

                                    <div className='relative px-5 w-[350px] mx-auto'>
                                        <Image className='rounded-lg' src={s5} alt='s5'></Image>
                                        <div className='bg-[#6eb152] mr-4 rounded-r-lg absolute px-2 py-2 bottom-0 right-1 '>
                                            <BsShare className='h-6 w-6 text-white ' />
                                        </div>
                                    </div>

                                    <div className='text-center py-2 bg-white border shadow-lg mx-auto rounded-lg -mt-36 w-[380px] h-[250px] '>
                                        <h3 className='pt-40 text-xl font-bold '>Christine Eve</h3>
                                        <p>Consultant</p>
                                    </div>

                                </SwiperSlide>


                            </Swiper>
                        </>
                    </div>



                </div>
            </div>

            {/* who we are 2 */}
            <div className='py-28 px-8 grid grid-cols-1 lg:grid-cols-2 gap-14'>

                <div>
                    <div className='lg:flex gap-5 items-center '>
                        <Image className='h-[300px] w-[300px] rounded-lg' src={i1} alt='i1'></Image>
                        <Image className='h-[350px] w-[300px] rounded-lg' src={i2} alt='i2'></Image>
                    </div>
                    <div className='pt-10'>

                        <Image className='h-[270px] w-[522px] rounded-lg' src={i3} alt='i3'></Image>
                    </div>
                </div>
                <div>
                    <div className={`space-y-3 mt-10 `}>
                        <p className={` rounded-lg font-bold text-center py-2 w-[150px] text-[#6eb152] bg-[#ecf5e8]`}>
                            Who We are</p>

                        <h3 className={`text-xl lg:text-5xl   mx-auto font-bold pt-2   leading-snug`}>
                            Great Opportunity For Adventure & Travels
                        </h3>

                        <div className='flex items-center justify-evenly gap-5 pt-10'>
                            <Image src={check} alt='check'></Image>
                            <div className='w-[70px] h-[70px] shadow-xl rounded-full flex items-center justify-center'>
                                <Image className='w-[40px] h-[40px]' src={helmet} alt="helmet" />
                            </div>
                            <div>
                                <p className='font-bold'>Safety First Always</p>
                                <p>Set perspiciatis unde omnis estenatus voluptatem <br /> totarem aperiae.</p>
                            </div>

                        </div>

                        <div className='flex items-center justify-evenly gap-5 pt-10'>
                            <Image src={check} alt='check'></Image>
                            <div className='w-[70px] h-[70px] shadow-xl rounded-full flex items-center justify-center'>
                                <Image className='w-[40px] h-[40px]' src={hand} alt="hand" />
                            </div>
                            <div>
                                <p className='font-bold'>Low Price & Friendly</p>
                                <p>Set perspiciatis unde omnis estenatus voluptatem <br /> totarem aperiae.</p>
                            </div>

                        </div>

                        <div className='flex items-center justify-evenly gap-5 pt-10'>
                            <Image src={check} alt='check'></Image>
                            <div className='w-[70px] h-[70px] shadow-xl rounded-full flex items-center justify-center'>
                                <Image className='w-[40px] h-[40px]' src={travel} alt="travel" />
                            </div>
                            <div>
                                <p className='font-bold'>Trusted Travel Guide</p>
                                <p>Set perspiciatis unde omnis estenatus voluptatem <br /> totarem aperiae.</p>
                            </div>

                        </div>



                    </div>
                </div>

            </div>

            {/*Ready to travel (Paralax)  */}
            <div className='pb-20'>
                <div className='py-20 h-[347px]'>
                    <div className=' bg-cover bg-center  bg-fixed' style={{ backgroundImage: `url('${ready_to_travel_bg.src}')` }}>
                        <div className=" h-full   lg:flex justify-between items-center px-10 py-20 ">

                            {/* 1st */}
                            <div className='text-left'>
                                <SectionTitle
                                    title=""
                                    title_bg="bg-transparent"
                                    title_color="text-yellow-500"
                                    subtitle="Ready to travel with real adventure & enjoy natural"
                                    subtitle_color="text-white"
                                    text='text-left'
                                    title_width=''
                                ></SectionTitle>

                            </div>

                            {/* 2nd */}
                            <div className=''>
                                <Lottie className='h-[150px] w-[150px]' animationData={play_btn} loop={true} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* quality services */}
            <div className='py-32 px-8 grid grid-cols-1 lg:grid-cols-2 gap-10'>

                <div>
                    <Image src={quality_services_1st} alt='quality_services_1st'></Image>
                </div>
                <div>
                    <>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={10}
                            pagination={{
                                clickable: true,
                            }}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 30,
                                },
                                768: {
                                    slidesPerView: 1,
                                    spaceBetween: 10,
                                },
                            }}
                            navigation
                            modules={[Autoplay]}
                            className="mySwiper"
                        >

                            {/* 1st */}
                            <SwiperSlide className="rounded-lg">
                                <div className='flex items-center gap-3'>
                                    <Image className='w-[90px] h-[90px]' src={quote} alt='quote'></Image>
                                    <div>
                                        <p className='text-2xl font-bold'>Quality Service</p>
                                        <div className='flex gap-2 pt-2'>
                                            <AiFillStar className='h-5 w-5 text-[#f7921e]' />
                                            <AiFillStar className='h-5 w-5 text-[#f7921e]' />
                                            <AiFillStar className='h-5 w-5 text-[#f7921e]' />
                                            <AiFillStar className='h-5 w-5 text-[#f7921e]' />
                                            <AiFillStar className='h-5 w-5 text-[#f7921e]' />
                                        </div>
                                    </div>
                                </div>
                                <p className='pt-3 pb-3 leading-loose'>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex perspiciatis dolorem ullam voluptas, eveniet incidunt atque, nulla quaerat, molestiae laudantium veniam? Iure esse distinctio blanditiis nisi provident earum aliquid accusantium?
                                </p>

                                <hr className='mt-2 mb-2' />

                                <div className='flex items-center gap-3 pt-5'>
                                    <Image className='w-[80px] h-[80px] rounded-full' src={t1} alt='t1'></Image>
                                    <div >
                                        <p className="text-xl font-bold"> Christine Eve</p>
                                        <p>Customer</p>
                                    </div>
                                </div>

                            </SwiperSlide>
                            {/* 2nd */}
                            <SwiperSlide className="rounded-lg">
                                <div className='flex items-center gap-3'>
                                    <Image className='w-[90px] h-[90px]' src={quote} alt='quote'></Image>
                                    <div>
                                        <p className='text-2xl font-bold'>Quality Service</p>
                                        <div className='flex gap-2 pt-2'>
                                            <AiFillStar className='h-5 w-5 text-[#f7921e]' />
                                            <AiFillStar className='h-5 w-5 text-[#f7921e]' />
                                            <AiFillStar className='h-5 w-5 text-[#f7921e]' />
                                            <AiFillStar className='h-5 w-5 text-[#f7921e]' />
                                            <AiFillStar className='h-5 w-5 text-[#f7921e]' />
                                        </div>
                                    </div>
                                </div>
                                <p className='pt-3 pb-3 leading-loose'>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex perspiciatis dolorem ullam voluptas, eveniet incidunt atque, nulla quaerat, molestiae laudantium veniam? Iure esse distinctio blanditiis nisi provident earum aliquid accusantium?
                                </p>
                                <hr className='mt-2 mb-2' />
                                <div className='flex items-center gap-3 pt-5'>
                                    <Image className='w-[80px] h-[80px] rounded-full' src={t1} alt='t1'></Image>
                                    <div >
                                        <p className="text-xl font-bold"> Jessica Brown </p>
                                        <p>Founder & CEO</p>
                                    </div>
                                </div>

                            </SwiperSlide>
                            {/* 3rd */}
                            <SwiperSlide className="rounded-lg">
                                <div className='flex items-center gap-3'>
                                    <Image className='w-[90px] h-[90px]' src={quote} alt='quote'></Image>
                                    <div>
                                        <p className='text-2xl font-bold'>Quality Service</p>
                                        <div className='flex gap-2 pt-2'>
                                            <AiFillStar className='h-5 w-5 text-[#f7921e]' />
                                            <AiFillStar className='h-5 w-5 text-[#f7921e]' />
                                            <AiFillStar className='h-5 w-5 text-[#f7921e]' />
                                            <AiFillStar className='h-5 w-5 text-[#f7921e]' />
                                            <AiFillStar className='h-5 w-5 text-[#f7921e]' />
                                        </div>
                                    </div>
                                </div>
                                <p className='pt-3 pb-3 leading-loose'>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex perspiciatis dolorem ullam voluptas, eveniet incidunt atque, nulla quaerat, molestiae laudantium veniam? Iure esse distinctio blanditiis nisi provident earum aliquid accusantium?
                                </p>
                                <hr className='mt-2 mb-2' />
                                <div className='flex items-center gap-3 pt-5'>
                                    <Image className='w-[80px] h-[80px] rounded-full' src={t1} alt='t1'></Image>
                                    <div >
                                        <p className="text-xl font-bold"> Kenvine Smith</p>
                                        <p>Customer</p>
                                    </div>
                                </div>

                            </SwiperSlide>




                        </Swiper>
                    </>
                </div>
            </div>

            <hr className='px-5' />

            {/* envote */}
            <div className='py-28 px-10'>
                {/* 1st slider */}
                <>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        pagination={{
                            clickable: true,
                        }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },
                            768: {
                                slidesPerView: 5,
                                spaceBetween: 30,
                            },
                        }}
                        navigation
                        modules={[Autoplay]}
                        className="mySwiper"
                    >

                        {/* 1st */}
                        <SwiperSlide className="rounded-lg">
                            <div className=''>
                                <p className='px-5 py-3 bg-[#f3f8f6] text-center mx-auto'>
                                    <Image className='w-3/4 mx-auto rounded-lg' src={brand} alt='brand'></Image>
                                </p>
                            </div>

                        </SwiperSlide>
                        {/* 1st */}
                        <SwiperSlide className="rounded-lg">
                            <div className=''>
                                <p className='px-5 py-3 bg-[#f3f8f6] text-center mx-auto'>
                                    <Image className='w-3/4 mx-auto rounded-lg' src={brand} alt='brand'></Image>
                                </p>
                            </div>

                        </SwiperSlide>
                        {/* 1st */}
                        <SwiperSlide className="rounded-lg">
                            <div className=''>
                                <p className='px-5 py-3 bg-[#f3f8f6] text-center mx-auto'>
                                    <Image className='w-3/4 mx-auto rounded-lg' src={brand} alt='brand'></Image>
                                </p>
                            </div>

                        </SwiperSlide>
                        {/* 1st */}
                        <SwiperSlide className="rounded-lg">
                            <div className=''>
                                <p className='px-5 py-3 bg-[#f3f8f6] text-center mx-auto'>
                                    <Image className='w-3/4 mx-auto rounded-lg' src={brand} alt='brand'></Image>
                                </p>
                            </div>

                        </SwiperSlide>
                        {/* 1st */}
                        <SwiperSlide className="rounded-lg">
                            <div className=''>
                                <p className='px-5 py-3 bg-[#f3f8f6] text-center mx-auto'>
                                    <Image className='w-3/4 mx-auto rounded-lg' src={brand} alt='brand'></Image>
                                </p>
                            </div>

                        </SwiperSlide>
                        {/* 1st */}
                        <SwiperSlide className="rounded-lg">
                            <div className=''>
                                <p className='px-5 py-3 bg-[#f3f8f6] text-center mx-auto'>
                                    <Image className='w-3/4 mx-auto rounded-lg' src={brand} alt='brand'></Image>
                                </p>
                            </div>

                        </SwiperSlide>
                        {/* 1st */}
                        <SwiperSlide className="rounded-lg">
                            <div className=''>
                                <p className='px-5 py-3 bg-[#f3f8f6] text-center mx-auto'>
                                    <Image className='w-3/4 mx-auto rounded-lg' src={brand} alt='brand'></Image>
                                </p>
                            </div>

                        </SwiperSlide>



                    </Swiper>
                </>
                {/* 2nd slider */}
                {/*  <div className='pt-16'>
                    <>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={10}
                            pagination={{
                                clickable: true,
                            }}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 30,
                                },
                                768: {
                                    slidesPerView: 5,
                                    spaceBetween: 30,
                                },
                            }}
                            navigation
                            modules={[Autoplay]}
                            className="mySwiper"
                        >

                         
                            <SwiperSlide className="rounded-lg">
                                <div className=''>
                                    <p className='px-5 py-3 bg-[#f3f8f6] text-center mx-auto'>
                                        <Image className='w-3/4 mx-auto rounded-lg' src={brand} alt='brand'></Image>
                                    </p>
                                </div>

                            </SwiperSlide>
                          
                            <SwiperSlide className="rounded-lg">
                                <div className=''>
                                    <p className='px-5 py-3 bg-[#f3f8f6] text-center mx-auto'>
                                        <Image className='w-3/4 mx-auto rounded-lg' src={brand} alt='brand'></Image>
                                    </p>
                                </div>

                            </SwiperSlide>
                           
                            <SwiperSlide className="rounded-lg">
                                <div className=''>
                                    <p className='px-5 py-3 bg-[#f3f8f6] text-center mx-auto'>
                                        <Image className='w-3/4 mx-auto rounded-lg' src={brand} alt='brand'></Image>
                                    </p>
                                </div>

                            </SwiperSlide>
                           
                            <SwiperSlide className="rounded-lg">
                                <div className=''>
                                    <p className='px-5 py-3 bg-[#f3f8f6] text-center mx-auto'>
                                        <Image className='w-3/4 mx-auto rounded-lg' src={brand} alt='brand'></Image>
                                    </p>
                                </div>

                            </SwiperSlide>
                           
                            <SwiperSlide className="rounded-lg">
                                <div className=''>
                                    <p className='px-5 py-3 bg-[#f3f8f6] text-center mx-auto'>
                                        <Image className='w-3/4 mx-auto rounded-lg' src={brand} alt='brand'></Image>
                                    </p>
                                </div>

                            </SwiperSlide>
                            
                            <SwiperSlide className="rounded-lg">
                                <div className=''>
                                    <p className='px-5 py-3 bg-[#f3f8f6] text-center mx-auto'>
                                        <Image className='w-3/4 mx-auto rounded-lg' src={brand} alt='brand'></Image>
                                    </p>
                                </div>

                            </SwiperSlide>
                           
                            <SwiperSlide className="rounded-lg">
                                <div className=''>
                                    <p className='px-5 py-3 bg-[#f3f8f6] text-center mx-auto'>
                                        <Image className='w-3/4 mx-auto rounded-lg' src={brand} alt='brand'></Image>
                                    </p>
                                </div>

                            </SwiperSlide>



                        </Swiper>
                    </>
                </div> */}
            </div>

        </div>
    );
};

export default aboutPage;