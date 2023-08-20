import Image from 'next/image';
import React from 'react';

const CompanyIntro = () => {
    return (
        <div className='max-w-7xl mx-auto lg:flex gap-10 my-10'>
            <div className='w-full lg:w-1/2 relative'>
                <Image width={1280} height={600} className='w-full h-[600px] rounded' src="https://cdn.pixabay.com/photo/2019/08/12/10/03/backpacking-4400872_640.jpg" alt="" />
                <div className='bg-green-500 h-32 w-1/2 absolute bottom-0 text-center'>
                    <p className=' font-bold text-white text-lg p-6'>Gowilds is providing the best solution by our experts</p>
                </div>
            </div>
            <div className='w-full lg:w-1/2'>
                <div className='space-y-8'>
                    <span className='text-green-500 bg-green-100 border px-4 py-2 rounded font-bold'>Company Introduction</span>
                    <h1 className='lg:text-5xl text-2xl font-bold my-4'>Great opportunity for<br /> adventure & travels</h1>
                    <p className='text-3xl text-green-500'>COMMITTED TO PROVIDING OUR CUSTOMERS WITH EXCEPTIONAL SERVICE.</p>
                    <p className='text-zinc-400'>There are many variations of passages of lorem free market to available, but the majority have alteration in some form, by injected humour, or randomised words</p>
                    <div>
                        <div className='flex justify-between mb-2'>
                            <p className='font-bold'>Saticfied Clients</p>
                            <p>82%</p>
                        </div>
                        <progress className="progress progress-success w-full h-6" value="82" max="100"></progress>
                    </div>
                </div>
                <div className='flex  gap-10 items-center pt-10'>
                    <div className='border-4 border-green-700 rounded-full'>
                        <Image width={96} height={96} className='w-24 rounded-full border-8' src="https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                    </div>
                    <div>
                        <p className='font-bold text-xl'>Jesica Brown</p>
                        <p>Founder & CEO</p>
                    </div>
                    <button className='border px-5 py-4 bg-green-600 text-white font-bold rounded'>Discover More</button>
                </div>
            </div>
        </div>
    );
};

export default CompanyIntro;