import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';

const AllCategories = () => {
    const array = ['Adventure', 'City Tours', 'Life Styles', 'Wild Camping']
    return (
        <div className='bg-gray-100 p-8 shadow-lg'>
            <p className='text-xl font-bold mb-7'><span className='border-b-4 border-green-600 pb-3'>All</span> Categories</p>
            <div className='space-y-8'>
                {
                    array.map(arr => 
                    <div key={arr} className='flex justify-between items-center font-bold text-gray-400 hover:text-green-400 border-b-2 border-gray-300 pb-3'>
                        <p>{arr}</p>
                        <p className='text-green-500'> <FaArrowRightLong /> </p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default AllCategories;