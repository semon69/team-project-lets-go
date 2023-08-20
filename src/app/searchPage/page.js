import CompanyIntro from '@/components/SearchPage/CompanyIntro';
import ExploreWorld from '@/components/SearchPage/ExploreWorld';
import FeaturedTourSearch from '@/components/SearchPage/FeaturedTour';
import React from 'react';

const page = () => {
    return (
        <div className=''>
            <ExploreWorld></ExploreWorld>
            <FeaturedTourSearch></FeaturedTourSearch>
            <CompanyIntro></CompanyIntro>
        </div>
    );
};

export default page;