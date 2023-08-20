import React from 'react';
import datas from '../../../public/newsDetailsData/recentPost.json'
import { FaComments } from 'react-icons/fa6';
import Image from 'next/image';

const RecentPost = () => {
    return (
        <div className='bg-gray-100 p-8 my-8 shadow-lg'>
            <p className='text-xl font-bold mb-7'><span className='border-b-4 border-green-600 pb-3'>REC</span>ENT Post</p>
            <div>
                {
                    datas.map(data => 

                        <div className='flex justify-center items-center gap-4 mb-8' key={data.id}>
                            <Image width={24} height={24} className='w-24 rounded-lg' src={data.image} alt="" />
                            <div>
                                <div className='flex gap-2 items-center'>
                                    <p className='text-green-500'><FaComments /> </p>
                                    <p className='text-gray-400'>{data.comments} Comments</p>
                                </div>
                                <p className='font-bold'>{data.title}</p>
                            </div>
                        </div>
                        
                        )
                }
            </div>
        </div>
    );
};

export default RecentPost;