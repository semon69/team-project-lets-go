import React from 'react';

const DisplayWord = ({ time, country }) => {
    return (
        <div className='text-white'>
            <div className='text-right pt-4'>
                <span className=' px-4 py-1 bg-orange-400 w-24 rounded m-4 text-sm '>{time} TOURS</span>
            </div>
            <div className='mt-40 m-5'>
                <p className='text-green-400 text-xl'>Travel to</p>
                <p className='text-2xl font-semibold'>{country}</p>
            </div>
        </div>
    );
};

export default DisplayWord;