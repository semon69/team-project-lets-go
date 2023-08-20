import React from 'react';
import img1 from '../../../../public/Booking/3.jpg'
import img2 from '../../../../public/Booking/4.jpg'
import img3 from '../../../../public/Booking/5.jpg'
import Image from 'next/image';
import { AiFillStar } from 'react-icons/ai';
import SingleDeals from './SingleDeals';

const Deals = () => {
    return (
      <div className="p-10 border-black mt-8 rounded-xl border">
        <h2 className="font-bold text-3xl">Last Minute Deals</h2>
        <SingleDeals
          img={img1}
          text={"Walking the Amalfi Coast"}
          amount={"$129.00 "}
        ></SingleDeals>
        <SingleDeals
          img={img2}
          text={"Rainbow Mountain Red Valley"}
          amount={"$319.00 "}
        ></SingleDeals>
        <SingleDeals
          img={img3}
          text={"North Island Adventure Tour"}
          amount={"$129.00 "}
        ></SingleDeals>
      </div>
    );
};

export default Deals;