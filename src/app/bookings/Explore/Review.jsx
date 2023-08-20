import React from 'react';

const Review = () => {
    return (
      <div className="">
        <h2 className="font-bold text-3xl my-10">Review Score </h2>
        <div className="border p-6 rounded-lg md:flex items-center gap-4">
          <div className="text-center  w-full h-full">
            <h2 className="font-medium text-7xl">
              4.67 <sub className="text-3xl font-normal text-[#666464]">/5</sub>
            </h2>
            <p className="text-[#63AB45]">Wonderful</p>
            <p className="text-[#666464]">3 verified reviews</p>
          </div>
          <div>
            <div>
              <div className="flex justify-between">
                <p>Quality</p>
                <p>4.67/5</p>
              </div>
              <progress
                className="progress progress-primary w-96"
                value="90"
                max="100"
              ></progress>
            </div>
            <div>
              <div className="flex justify-between">
                <p>Location</p>
                <p>4.67/5</p>
              </div>
              <progress
                className="progress progress-primary w-96"
                value="90"
                max="100"
              ></progress>
            </div>
            <div>
              <div className="flex justify-between">
                <p>Amenities</p>
                <p>4.67/5</p>
              </div>
              <progress
                className="progress progress-primary w-96"
                value="90"
                max="100"
              ></progress>
            </div>
            <div>
              <div className="flex justify-between">
                <p>Service</p>
                <p>5/5</p>
              </div>
              <progress
                className="progress progress-primary w-96"
                value="100"
                max="100"
              ></progress>
            </div>
            <div>
              <div className="flex justify-between">
                <p>Price</p>
                <p>4.33/5</p>
              </div>
              <progress
                className="progress progress-primary w-96"
                value="85"
                max="100"
              ></progress>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Review;