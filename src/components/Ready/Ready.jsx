"use client"
import React from 'react';
import camp from '../../../public/ni7_images/home/Ready/camp.jpg'
import SectionTitle from '../SectionTitle/SectionTitle';
import play_btn from '../../../public/ni7_images/home/Ready/play-button.json'
import deer from '../../../public/ni7_images/home/Ready/deer.png'
import paragliding from '../../../public/ni7_images/home/Ready/paragliding.png'
import hiking from '../../../public/ni7_images/home/Ready/hiking.png'
import hang_gliding from '../../../public/ni7_images/home/Ready/hang-gliding.png'
import Lottie from "lottie-react";
import Image from 'next/image';
import Link from 'next/link';
const Ready = () => {
    return (
        <div className='py-10'>
            <div className=' bg-cover bg-center    rounded-lg bg-fixed' style={{ backgroundImage: `url('${camp.src}')` }}>
                <div className="backdrop-brightness-50 h-full   lg:flex justify-between px-10">
                    {/* 1st */}
                    <div className='text-left lg:flex flex-col justify-center gap-8'>
                        <Lottie className='h-[100px] w-[100px]' animationData={play_btn} loop={true} />
                        <SectionTitle
                            title="Are you ready to travel"
                            title_bg="bg-transparent"
                            title_color="text-yellow-500"
                            subtitle="Ready to travel with real adventure & enjoy natural"
                            subtitle_color="text-white"
                            text='text-left'
                            title_width=''
                        ></SectionTitle>
                        <Link href={'/searchPage'}><button className='w-[204px] h-[59px] bg-[#5a9b3e] text-white text-center rounded-lg'>Check Availability</button></Link>
                    </div>

                    {/* 2nd */}
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-3 py-5'>

                        <div className='   w-[279px] h-[219px] px-8 py-5 border bg-transparent text-white  flex flex-col justify-center items-center rounded-lg hover:transition hover:duration-300 hover:bg-green-600 hover:text-white'>
                            <Image className='h-[70px] w-[70px]' src={deer} alt='deer'></Image>
                            <h3 className='text-xl font-bold'>WildlifeTours</h3>
                        </div>
                        <div className= ' w-[279px] h-[219px] px-8 py-5 border bg-transparent text-white flex flex-col justify-center items-center rounded-lg hover:transition hover:duration-300 hover:bg-green-600 hover:text-white'>
                            <Image className='h-[70px] w-[70px]' src={paragliding} alt='paragliding'></Image>
                            <h3 className='text-xl font-bold'>Paragliding Tours</h3>
                        </div>
                        <div className= ' w-[279px] h-[219px] px-8 py-5 border bg-transparent text-white flex flex-col justify-center items-center rounded-lg hover:transition hover:duration-300 hover:bg-green-600 hover:text-white'>
                            <Image className='h-[70px] w-[70px]' src={hiking} alt='hiking'></Image>
                            <h3 className='text-xl font-bold'>Adventure Tours</h3>
                        </div>
                        <div className= ' w-[279px] h-[219px] px-8 py-5 border bg-transparent text-white flex flex-col justify-center items-center rounded-lg hover:transition hover:duration-300 hover:bg-green-600 hover:text-white'>
                            <Image className='h-[70px] w-[70px]' src={hang_gliding} alt='hang_gliding'></Image>
                            <h3 className='text-xl font-bold'>Hang Gliding Tours</h3>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ready;