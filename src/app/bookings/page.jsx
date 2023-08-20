import React from 'react';
import BookingSlider from '../bookings/BookingSlider/BookingSlider';
import Discover from '../bookings/Discover/Discover';
import Rating from '../bookings/Rating/Rating';
import Explore from '../bookings/Explore/Explore';


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