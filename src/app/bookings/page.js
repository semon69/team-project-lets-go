import React from 'react';
// import BookingSlider from '../../components/Bookings/BookingSlider/BookingSlider';
// import Discover from '../../components/Bookings/Discover/Discover';
// import Rating from '../../components/Bookings/Rating/Rating';
// import Explore from '@/components/Bookings/Explore/Explore';
import dynamic from 'next/dynamic';

const BookingSlider = dynamic(()=> import('../../components/Bookings/BookingSlider/BookingSlider'), {ssr: false})
const Rating = dynamic(()=> import('../../components/Bookings/Rating/Rating'), {ssr: false})
const Explore = dynamic(()=> import('@/components/Bookings/Explore/Explore'), {ssr: false})
const Discover = dynamic(()=> import('../../components/Bookings/Discover/Discover'), {ssr: false})


const page = () => {
    return (
        <div className='mx-20'>
            <BookingSlider></BookingSlider>
            <Discover></Discover>
            <Rating></Rating>
            <Explore></Explore>
        </div>
    );
};

export default page;