import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BiSolidUserCircle } from 'react-icons/bi';
import { FaComments } from 'react-icons/fa6';

const SingleRecentNews = ({ news }) => {
    const { date, type, role, comments, title, description, image } = news;
    return (
        <div className=' relative shadow-2xl'>

            <div className='absolute right-6 top-3'>
                <span className=' bg-green-600 w-6 text-lg px-3 py-1 text-white rounded'>{date}</span>
            </div>
            <div className='p-3'>
                <Link href={'/newsDetails'}>
                    <Image width={380} height={320} className='rounded' src={image} alt="" />
                    <span className='bg-orange-400 text-white font-semibold px-4 py-2 -mt-10 ms-5'>{type}</span>
                </Link>
            </div>
            <div className='p-8 text-gray-600 space-y-4'>
                <div className='flex gap-4'>
                    <p className='inline-flex justify-center items-center gap-2'> <BiSolidUserCircle className='text-green-500' /> {role}</p>
                    <p className='inline-flex justify-center items-center gap-2'><FaComments className='text-green-500' /> {comments} Comments</p>
                </div>
                <p className='text-black font-bold'>{title}</p>
                <p>{description}</p>
                <button>Read More...</button>
            </div>

        </div>
    );
};

export default SingleRecentNews;