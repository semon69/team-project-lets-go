import React from 'react';
import Details from '../../components/DestinationDetails/Details/Details';
import PopularTour from '../../components/DestinationDetails/PopularTour/PopularTour';
import Adventure from '../../components/DestinationDetails/Adventure/Adventure';

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