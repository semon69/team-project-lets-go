import React from 'react';
import BookingSlider from './BookingSlider/BookingSlider';
import Discover from './Discover/Discover';
import Rating from './Rating/Rating';
import Explore from './Explore/Explore';


const page = () => {
    return (
        <div>
            <BookingSlider></BookingSlider>
            <Discover></Discover>
            <Rating></Rating>
            <Explore></Explore>
        </div>
    );
};

export default page;