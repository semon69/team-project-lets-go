import React from 'react';
import Details from './Details/Details';
import PopularTour from './PopularTour/PopularTour';
import Adventure from './Adventure/Adventure';

const page = () => {
    return (
      <div className="">
        <Details></Details>
        <PopularTour></PopularTour>
        <Adventure></Adventure>
      </div>
    );
};

export default page;