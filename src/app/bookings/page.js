import React from 'react';
import BookingSlider from '../../components/Bookings/BookingSlider/BookingSlider';
import Discover from '../../components/Bookings/Discover/Discover';
import Rating from '../../components/Bookings/Rating/Rating';
import Explore from '@/components/Bookings/Explore/Explore';


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