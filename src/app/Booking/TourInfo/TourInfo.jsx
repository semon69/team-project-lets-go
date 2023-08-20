import React from 'react';
import users from '../../../../public/Booking/Icons/users.png'
import user from '../../../../public/Booking/Icons/user.png'
import plane from '../../../../public/Booking/Icons/airplane.png'
import earth from '../../../../public/Booking/Icons/earth.png'
import Image from 'next/image';

const TourInfo = () => {
    return (
      <div className="p-10 border-black mt-8 rounded-xl border">
        <h2 className="font-bold text-3xl">Tour Information</h2>
        <div className="flex gap-2 items-center mt-3">
          <Image className="w-16" src={users} alt="users"></Image>
          <div>
            <p>max guest</p>
            <strong>10</strong>
          </div>
        </div>
        <div className="flex gap-2 items-center mt-3">
          <Image className="w-16" src={user} alt="user"></Image>
          <div>
            <p>min</p>
            <strong>12+</strong>
          </div>
        </div>
        <div className="flex gap-2 items-center mt-3">
          <Image className="w-16" src={plane} alt="plane"></Image>
          <div>
            <p>Tour location</p>
            <strong>Japan</strong>
          </div>
        </div>
        <div className="flex gap-2 items-center mt-3">
          <Image className="w-16" src={earth} alt="earth"></Image>
          <div>
            <p>Languages Support</p>
          </div>
        </div>
      </div>
    );
};

export default TourInfo;