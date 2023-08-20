import Image from 'next/image';
import React from 'react';
import { BiDownArrow } from 'react-icons/bi';
const ExploreWorld = () => {
    return (
        <div className='text-white bg-center bg-no-repeat bg-slate-500 bg-blend-multiply bg-cover h-[500px] relative' style={{ backgroundImage: "url('https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/01/tour-5.jpg')" }}>
            <div>
                <div className='text-center my-8 space-y-3'>
                    <p className='text-3xl lg:text-5xl font-bold pb-4 lg:pt-24 pt-10'>Explore The World</p>
                    <p className='lg:text-xl'>People Don’t Take, Trips Take People</p>
                </div>
                <div className='grid grid-cols-2 lg:grid-cols-5 gap-10 bg-white text-black rounded shadow-xl lg:mx-12 absolute -bottom-12 lg:py-8 py-3 px-3 lg:px-9'>
                    <div className='space-y-3'>
                        <div className='flex gap-3 items-center border-b-2 border-gray-400 pb-3'>
                            <Image width={48} height={48} className='w-12' src="https://cdn-icons-png.flaticon.com/128/3037/3037818.png" alt="" />
                            <div>
                                <p className='text-gray-500'>Destinations</p>
                                <p className='font-bold'>Locations</p>
                            </div>
                            <select name=">" id="">
                                <option value=""> </option>
                                <option value="">USA</option>
                                <option value="">UK</option>
                            </select>
                        </div>

                    </div>
                    <div className='space-y-3'>
                        <div className='flex gap-3 items-center border-b-2 border-gray-400 pb-3'>
                            <Image width={48} height={48} className='w-12' src="https://cdn-icons-png.flaticon.com/128/4750/4750549.png" alt="" />
                            <div>
                                <p className='text-gray-500'>Activity</p>
                                <p className='font-bold'>Bookings</p>
                            </div>
                            <select name=">" id="">
                                <option value=""> </option>
                                <option value="">USA</option>
                                <option value="">UK</option>
                            </select>
                        </div>
                    </div>
                    <div className='space-y-3'>
                        <div className='flex gap-2 items-center border-b-2 border-gray-400 pb-3'>
                            <Image width={48} height={48} className='w-12' src="https://cdn-icons-png.flaticon.com/128/833/833593.png" alt="" />
                            <div>
                                <p className='text-gray-500'>Date</p>
                                <p className='font-bold'>From</p>
                            </div>
                        </div>
                    </div>
                    <div className='space-y-3'>
                        <div className='flex gap-3 items-center border-b-2 border-gray-400 pb-3'>
                            <Image width={48} height={48} className='w-12' src="https://cdn-icons-png.flaticon.com/128/456/456283.png" alt="" />
                            <div>
                                <p className='text-gray-500'>Guest</p>
                                <p className='font-bold'>0</p>
                            </div>
                        </div>
                    </div>
                    <input className='border-2 border-black rounded px-3 bg-green-600 text-white font-bold' type="search" name="search" placeholder='Search' id="" />
                </div>
            </div>
        </div>
    );
};

export default ExploreWorld;