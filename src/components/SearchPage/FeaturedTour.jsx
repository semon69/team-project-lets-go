import React from 'react';
import items from '../../../public/searchPageData/featuredTour.json'
import SingleFeaturedTour from './SingleFeaturedTour';

const FeaturedTourSearch = () => {
    return (
        <div className='max-w-7xl mx-auto my-20'>
            <div className='flex justify-between items-center'>
                <p className='text-2xl text-gray-500'>12 Tours</p>
                <div className='flex justify-center items-center gap-2'>
                    <p className='text-2xl text-gray-700'>Sort</p>
                    <select className="select select-bordered w-full max-w-xs">
                        <option selected>Price</option>
                        <option>Title</option>
                        <option>Ratting</option>
                        <option>Available</option>
                    </select>
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 my-4'>
                {
                    items.map(item => <SingleFeaturedTour key={item.id} item={item}></SingleFeaturedTour>)
                }
            </div>
            <div className="join grid grid-cols-2 w-1/4">
                <button className="join-item btn btn-outline">Previous page</button>
                <button className="join-item btn btn-outline">Next</button>
            </div>
        </div>
    );
};

export default FeaturedTourSearch;