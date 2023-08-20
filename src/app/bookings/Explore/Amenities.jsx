import React from 'react';
import card from '../../../../public/Booking/Icons/credit-card.png'
import laundry from '../../../../public/Booking/Icons/money-laundering.png'
import outdoor from '../../../../public/Booking/Icons/bench.png'
import reservation from '../../../../public/Booking/Icons/hotel-bell.png'
import restaurant from '../../../../public/Booking/Icons/restaurant.png'
import smoke from '../../../../public/Booking/Icons/no-smoking.png'
import Image from 'next/image';


const Amenities = () => {
    return (
      <div className="">
        <h2 className="font-bold text-3xl my-10">Tour Amenities</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          <div className="flex gap-2 items-center">
            <Image className="w-20" src={card} alt="card"></Image>
            <p className="font-medium text-[#747070]">Accepts Credit Cards</p>
          </div>
          <div className="flex gap-2 items-center">
            <Image className="w-20" src={laundry} alt="laundry"></Image>
            <p className="font-medium text-[#747070]">Laundry Service</p>
          </div>
          <div className="flex gap-2 items-center">
            <Image className="w-20" src={outdoor} alt="outdoor"></Image>
            <p className="font-medium text-[#747070]">Outdoor Seating</p>
          </div>
          <div className="flex gap-2 items-center">
            <Image className="w-20" src={reservation} alt="reservation"></Image>
            <p className="font-medium text-[#747070]">Reservations</p>
          </div>
          <div className="flex gap-2 items-center">
            <Image className="w-20" src={restaurant} alt="restaurant"></Image>
            <p className="font-medium text-[#747070]">Restaurant</p>
          </div>
          <div className="flex gap-2 items-center">
            <Image className="w-20" src={smoke} alt="smoke"></Image>
            <p className="font-medium text-[#747070]">Smoking Allowed</p>
          </div>
        </div>
      </div>
    );
};

export default Amenities;