import React from 'react';
import { FaCross } from 'react-icons/fa6';
import { FiArrowRight } from 'react-icons/fi';

const Include = () => {
    return (
      <div className="border-b-2 pb-7">
        <h3 className="text-3xl font-bold mt-4">Included/Exclude</h3>
        <div className="grid grid-cols-2">
          <ul className="mt-5">
            <li className="flex gap-2 items-center mb-2 text-[18px] text-[#868383]">
              <span className="text-green-500">
                <FiArrowRight />
              </span>
              Pick and Drop Services
            </li>
            <li className="flex gap-2 items-center mb-2 text-[18px] text-[#868383]">
              <span className="text-green-500">
                <FiArrowRight />
              </span>
              Pick and Drop Services
            </li>
            <li className="flex gap-2 items-center mb-2 text-[18px] text-[#868383]">
              <span className="text-green-500">
                <FiArrowRight />
              </span>
              Pick and Drop Services
            </li>
            <li className="flex gap-2 items-center mb-2 text-[18px] text-[#868383]">
              <span className="text-green-500">
                <FiArrowRight />
              </span>
              Pick and Drop Services
            </li>
          </ul>
          <ul className="mt-5">
            <li className="flex gap-2 items-center mb-2 text-[18px] text-[#868383]">
              <span className="text-black">X</span>
              Pick and Drop Services
            </li>
            <li className="flex gap-2 items-center mb-2 text-[18px] text-[#868383]">
              <span className="text-black">X</span>
              Pick and Drop Services
            </li>
            <li className="flex gap-2 items-center mb-2 text-[18px] text-[#868383]">
              <span className="text-black">X</span>
              Pick and Drop Services
            </li>
            <li className="flex gap-2 items-center mb-2 text-[18px] text-[#868383]">
              <span className="text-black">X</span>
              Pick and Drop Services
            </li>
          </ul>
        </div>
      </div>
    );
};

export default Include;