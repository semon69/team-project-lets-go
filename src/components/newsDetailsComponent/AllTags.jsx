import Link from 'next/link';
import React from 'react';
import DisplayWord from '../DisplayWord/page';
import { BiPhoneCall } from 'react-icons/bi';

const AllTags = () => {
    return (
        <div>
            <div className='bg-gray-100 p-8 shadow-lg'>
                <p className='text-xl font-bold mb-7'><span className='border-b-4 border-green-600 pb-3'>All</span> Categories</p>
                <div className='flex gap-5 mb-4'>
                    <p className='p-3 bg-white hover:bg-green-400 hover:text-white text-sm font-bold rounded'>ADVENTURE</p>
                    <p className='p-3 bg-white hover:bg-green-400 hover:text-white text-sm font-bold rounded'>CAMPING</p>
                    <p className='p-3 bg-white hover:bg-green-400 hover:text-white text-sm font-bold rounded'>NATURAL</p>
                </div>
                <div className='flex gap-5'>
                    <p className='p-3 bg-white hover:bg-green-400 hover:text-white text-sm font-bold rounded'>POLICY</p>
                    <p className='p-3 bg-white hover:bg-green-400 hover:text-white text-sm font-bold rounded'>SOLAR ENERGY</p>
                    <p className='p-3 bg-white hover:bg-green-400 hover:text-white text-sm font-bold rounded'>TRAVELS</p>
                </div>
            </div>
            <div className='my-8 shadow-lg'>
                <Link href={'/destinationDetails'}>
                    <div className='h-72 rounded-xl bg-center bg-no-repeat bg-slate-400 bg-blend-multiply bg-cover' style={{ backgroundImage: 'url("https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/01/tour-2.jpg")' }}>
                        <DisplayWord time='3' country='United Kingdom'></DisplayWord>
                    </div>
                </Link>
            </div>
            <div className='h-96 p-10 text-center rounded-xl bg-center bg-no-repeat bg-slate-700 bg-blend-multiply bg-cover text-white shadow-lg' style={{ backgroundImage: 'url("https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/01/tour-2.jpg")' }}>
                <div className='border-b-2 border-gray-400 p-8'>
                    <div className='w-16 h-16 p-4 rounded-full bg-green-500 ms-28 mb-6'>
                        <p className='text-center text-3xl'><BiPhoneCall /> </p>
                    </div>
                    <p className='text-3xl font-bold'>Quick Booking Process</p>
                </div>
                <div className='p-6'>
                    <p>Tall to an expert</p>
                    <p className='text-2xl font-bold pt-2'>+ 1- (246) 333-0089</p>
                </div>
            </div>
        </div>
    );
};

export default AllTags;