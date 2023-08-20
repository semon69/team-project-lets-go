import Image from 'next/image';
import React from 'react';
import { AiOutlineFieldTime } from 'react-icons/ai';
import { FaUserFriends } from 'react-icons/fa';
import { FaCircleDollarToSlot, FaLocationDot, FaStar } from 'react-icons/fa6';

const SingleFeaturedTour = ({ item }) => {
    const { title, image, location, days, guests, price } = item
    return (
        <div className='p-2 shadow-xl rounded-lg'>
            <div style={{ backgroundImage: `url(${image})` }} className='bg-center bg-no-repeat bg-cover h-[350px] w-full rounded-br-3xl rounded-bl-3xl'>
                <div className='flex justify-between p-4'>
                    <p className=' px-4 h-9 py-1 rounded text-white font-bold bg-indigo-300'>Featured</p>
                    <Image width={40} height={36}  className='w-10 h-9 p-1 rounded bg-slate-300' src="https://cdn-icons-png.flaticon.com/128/1538/1538598.png" alt="" />
                </div>
            </div>
            <div className='bg-white space-y-3 my-6'>
                <div className='flex gap-1 pb-3 text-yellow-500'>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </div>
                <p className='text-xl font-bold'>{title}</p>
                <p className='inline-flex justify-center items-center gap-2'><FaLocationDot /> {location}</p>
                <br />
                <p className='inline-flex justify-center items-center gap-2'><FaCircleDollarToSlot /> From ${price}</p>
                <hr />
                <div className='flex justify-between'>
                    <div className='flex justify-between gap-3'>
                        <p className='inline-flex justify-center items-center gap-2'><AiOutlineFieldTime /> {days} Days</p>
                        <p className='inline-flex justify-center items-center gap-2'><FaUserFriends /> {guests}</p>
                    </div>
                    <p>Explore More...</p>
                </div>
            </div>
        </div>
    );
};

export default SingleFeaturedTour;