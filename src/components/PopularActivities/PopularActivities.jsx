import React from 'react';
// import popular_activities_bg from '..//public/popularActivity_bg.jpg'
import popular_activities_bg from '../../../public/ni7_images/home/popular_activity/popularActivity_bg.jpg'
import discovery_word from '../../../public/ni7_images/home/popular_activity/discovery_world.png'
import fishing from '../../../public/ni7_images/home/popular_activity/fishing.png'
import hiking from '../../../public/ni7_images/home/popular_activity/hiking.png'
import biking from '../../../public/ni7_images/home/popular_activity/mountain_biking.png'
import tent from '../../../public/ni7_images/home/popular_activity/tent.png'
import travel from '../../../public/ni7_images/home/popular_activity/travel.png'
import big_tent from '../../../public/ni7_images/home/popular_activity/big_tent.png'
import people from '../../../public/ni7_images/home/popular_activity/people.png'
import camp from '../../../public/ni7_images/home/popular_activity/camp.jpg'
import worldMap from '../../../public/ni7_images/home/popular_activity/world_map.jpg'
import Image from 'next/image';
import SectionTitle from '../SectionTitle/SectionTitle';
import Link from 'next/link';

const PopularActivities = () => {
    return (
        <div>
            <section>
                <div className='w-[96%]  border mx-auto bg-cover bg-center rounded-2xl ' style={{ backgroundImage: `url('${popular_activities_bg.src}')`, borderRadius: '16px' }}>

                    <div className='backdrop-brightness-50 text-white h-full w-full   rounded-2xl py-24'>

                        {/* title and subtitle */}
                        {/* <div className='text-center space-y-3'>
                            <p className='w-[300px] rounded-lg font-bold mx-auto py-2 text-center bg-[#293727] text-yellow-600'>Popular Activity</p>
                            <h3 className='text-5xl font-bold pt-2'>
                                Feel real adventure and very <br /> close to nature
                            </h3>
                        </div> */}

                        {
                            <SectionTitle title="Popular Activity" subtitle="Feel real adventure and very  close to nature"
                                title_color="text-yellow-600" title_bg="bg-[#293727]"
                            ></SectionTitle>

                        }


                        {/* activities */}
                        <div className='mt-12 grid grid-cols-1 lg:grid-cols-3 gap-3 px-5'>
                            {/* 1st */}
                            <div className='bg-white text-black rounded-xl px-5 py-10'>

                                <div className='bg-[#f7921e] text-white rounded-lg flex  items-center gap-3 px-3 py-2'>
                                    <Image className='h-[50px] w-[50px] ' src={tent} alt='tent image'></Image>
                                   <Link href={'/searchPage'}> <p className='font-bold'>Tent Camping</p></Link>
                                </div>

                                <div className='bg-slate-100 hover:bg-[#f7921e] hover:text-white text-black rounded-lg flex  items-center gap-3 px-3 mt-5 py-2'>
                                    <Image className='h-[45px] w-[45px]  py-1 px-1' src={travel} alt='tent image'></Image>
                                    <Link href={'/searchPage'}><p className='font-bold'>Adventure travel</p></Link>
                                </div>

                                <div className='bg-slate-100 hover:bg-[#f7921e] hover:text-white text-black rounded-lg flex  items-center gap-3 px-3 mt-5 py-2'>
                                    <Image className='h-[45px] w-[45px]  py-1 px-1' src={biking} alt='tent image'></Image>
                                    <Link href={'/searchPage'}><p className='font-bold'>Mountain biking</p></Link>
                                </div>

                                <div className='bg-slate-100 hover:bg-[#f7921e] hover:text-white text-black rounded-lg flex  items-center gap-3 px-3 mt-5 py-2'>
                                    <Image className='h-[45px] w-[45px]  py-1 px-1' src={discovery_word} alt='tent image'></Image>
                                    <Link href={'/searchPage'}><p className='font-bold'>Discovery world</p></Link>
                                </div>

                                <div className='bg-slate-100 hover:bg-[#f7921e] hover:text-white text-black rounded-lg flex  items-center gap-3 px-3 mt-5 py-2'>
                                    <Image className='h-[45px] w-[45px]  py-1 px-1' src={fishing} alt='tent image'></Image>
                                    <Link href={'/searchPage'}><p className='font-bold'>Fishing & swimming</p></Link>
                                </div>

                                <div className='bg-slate-100 hover:bg-[#f7921e] hover:text-white text-black rounded-lg flex  items-center gap-3 px-3 mt-5 py-2'>
                                    <Image className='h-[45px] w-[45px]  py-1 px-1' src={hiking} alt='tent image'></Image>
                                    <Link href={'/searchPage'}><p className='font-bold'>Mountain hiking</p></Link>
                                </div>

                            </div>

                            {/* real adventure */}
                            <div className='bg-transparent text-white rounded-xl px-5 '>

                                <Image className='bg-white h-[150px] w-[150px]' src={big_tent} alt='big tent image'></Image>

                                <h3 className='text-2xl font-bold mt-10'>Real adventure & enjoy your dream tours</h3>
                                <p className='mt-5'>Sit amet consectetur velit integer tincidunt scelerisque volutpat neque fermeny massa lacus.</p>

                                <Image className='mt-8 h-[60px] ' src={people} alt='people'></Image>
                                {/* progress bar */}
                                {/* 1st */}
                                <div className='flex justify-between mt-5'>
                                    <p className='font-bold'>Saticfied Clients</p>
                                    <p>89%</p>
                                </div>
                                <div class="mt-2 mb-6 h-2 w-full bg-neutral-200 dark:bg-neutral-600">
                                    <div class="h-2 bg-yellow-500" style={{ width: "89%" }}></div>
                                </div>
                                {/* 2nd */}
                                <div className='flex justify-between mt-5'>
                                    <p className='font-bold'>Success Rate</p>
                                    <p>86%</p>
                                </div>
                                <div class="mt-2 mb-6 h-2 w-full bg-neutral-200 dark:bg-neutral-600">
                                    <div class="h-2 bg-yellow-500" style={{ width: "86%" }}></div>
                                </div>

                            </div>
                            {/* camp */}
                            <div className='bg-transparent text-white rounded-xl px-5 '>

                                <Image className='h-full w-full rounded-xl' src={camp} alt='big tent image'></Image>

                            </div>

                        </div>

                    </div>

                </div>
                {/* 2nd */}
                <div className='w-[96%] lg:h-[120px] -mt-1  mx-auto  bg-cover bg-center' style={{ backgroundImage: `url('${worldMap.src}')`, borderRadius: '16px' }}>
                    <div className='backdrop-brightness-50   text-white h-full w-full   rounded-xl lg:flex items-center justify-between px-10'>

                        <div className='lg:flex gap-5 '>
                            <Image className='h-[70px] w-[70px]' src={travel} alt='travel'></Image>
                            <div>
                                <p className='capitalize'>QUISEQUE VEL ORTOR</p>
                                <h3 className='text-3xl font-bold'>Ready to adventure and enjoy natural</h3>
                            </div>
                        </div>
                        <Link href={'/searchPage'}><button className='px-8 py-5 rounded-xl font-bold bg-white text-black hover:bg-[#e5f1e5]'>Explore More</button></Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PopularActivities;