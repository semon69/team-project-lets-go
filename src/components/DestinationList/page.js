import React from 'react';
import DisplayWord from '../DisplayWord/page';
import Link from 'next/link';

const DestinationList = async () => {

    // const res = await fetch("destination.json")
    // const lists = await res.json()


    return (
        <div className='max-w-7xl mx-auto'>
            <div className='text-center my-8'>
                <span className='text-green-600 bg-green-200 border px-4 py-2 rounded font-bold'>Destination List</span>
                <h1 className='text-4xl font-bold my-4'>Go Exotic Places</h1>
            </div>
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
    );
};

export default DestinationList;