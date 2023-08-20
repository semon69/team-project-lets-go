"use client"
import DisplayWord from '@/components/DisplayWord/page';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import Image from 'next/image';
import React from 'react';

import camp from '../../../public/ni7_images/home/Ready/camp.jpg'
import play_btn from '../../../public/ni7_images/home/Ready/play-button.json'
import deer from '../../../public/ni7_images/home/Ready/deer.png'
import paragliding from '../../../public/ni7_images/home/Ready/paragliding.png'
import hiking from '../../../public/ni7_images/home/Ready/hiking.png'
import hang_gliding from '../../../public/ni7_images/home/Ready/hang-gliding.png'
import Lottie from "lottie-react";

import Link from 'next/link';
const destinationPage = () => {
    return (
        <div className='pt-5'>
            {/* about  */}
            <div
                className="h-[50vh] bg-cover bg-center"
                style={{
                    backgroundImage: `url(${"./hiking.jpg"})`,
                }}
            >
                <div className=" h-full backdrop-brightness-75 ">
                    <div className=" h-full  max-w-screen-xl mx-auto">
                        <div className="text-white flex flex-col justify-center h-full ps-10">
                            <h1 className="text-5xl font-bold pt-8">Destination</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-28 px-8'>
                <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
                    <Link href={'/destinationDetails'}>
                        <div className='h-72 rounded-xl bg-center bg-no-repeat bg-slate-400 bg-blend-multiply bg-cover' style={{ backgroundImage: 'url("https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/02/image-08.jpg")' }}>
                            <DisplayWord time='2' country='Switzerland'></DisplayWord>
                        </div>
                    </Link>
                    <Link href={'/destinationDetails'}>
                        <div className='h-72 rounded-xl bg-center bg-no-repeat bg-slate-400 bg-blend-multiply bg-cover' style={{ backgroundImage: 'url("https://cdn.pixabay.com/photo/2016/11/14/03/26/cliff-1822484_640.jpg")' }}>
                            <DisplayWord time='3' country='United Kingdom'></DisplayWord>
                        </div>
                    </Link>

                    <Link href={'/destinationDetails'}>
                        <div className='h-72 rounded-xl bg-center bg-no-repeat bg-slate-400 bg-blend-multiply bg-cover' style={{ backgroundImage: 'url("https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/02/image-09.jpg")' }}>
                            <DisplayWord time='1' country='France'></DisplayWord>
                        </div>
                    </Link>
                    <Link href={'/destinationDetails'}>

                        <div className='h-72 rounded-xl bg-center bg-no-repeat bg-slate-400 bg-blend-multiply bg-cover' style={{ backgroundImage: 'url("https://cdn.pixabay.com/photo/2017/10/28/07/47/woman-2896389_640.jpg")' }}>
                            <DisplayWord time='2' country='Germany'></DisplayWord>
                        </div>
                    </Link>
                    <Link href={'/destinationDetails'}>

                        <div className='h-72 rounded-xl bg-center bg-no-repeat bg-slate-400 bg-blend-multiply bg-cover' style={{ backgroundImage: 'url("https://cdn.pixabay.com/photo/2015/09/02/12/30/hiker-918473_640.jpg")' }}>
                            <DisplayWord time='1' country='Japan '></DisplayWord>
                        </div>
                    </Link>
                    <Link href={'/destinationDetails'}>

                        <div className='h-72 rounded-xl bg-center bg-no-repeat bg-slate-400 bg-blend-multiply bg-cover' style={{ backgroundImage: 'url("https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/01/image-11.jpg")' }}>
                            <DisplayWord time='3' country='Thailand'></DisplayWord>
                        </div>
                    </Link>
                    <Link href={'/destinationDetails'}>

                        <div className='h-72 rounded-xl bg-center bg-no-repeat bg-slate-400 bg-blend-multiply bg-cover' style={{ backgroundImage: 'url("https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2022/12/image-12.jpg")' }}>
                            <DisplayWord time='3' country='Singapore'></DisplayWord>
                        </div>
                    </Link>

                    <Link href={'/destinationDetails'}>
                        <div className='h-72 rounded-xl bg-center bg-no-repeat bg-slate-400 bg-blend-multiply bg-cover' style={{ backgroundImage: 'url("https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/01/image-13.jpg")' }}>
                            <DisplayWord time='3' country='Italy'></DisplayWord>
                        </div>
                    </Link>
                </div>
            </div>


            <div className='py-28'>
                <div className=' bg-cover bg-center h-[100vh]   rounded-lg bg-fixed' style={{ backgroundImage: `url('${camp.src}')` }}>
                    <div className="backdrop-brightness-50 h-full    lg:flex justify-between items-center px-10">
                        {/* 1st */}
                        <div className='text-left lg:flex flex-col justify-center gap-8'>

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
                        <div className=''>
                            <Lottie className='h-[150px] w-[150px]' animationData={play_btn} loop={true} />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default destinationPage;