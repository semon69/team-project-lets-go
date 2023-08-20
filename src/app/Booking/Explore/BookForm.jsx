"use client";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaShoppingCart } from "react-icons/fa";

const BookForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div>
      <form className="bg-[#F3F8F6] p-10 rounded-xl">
        <h2 className="font-bold text-2xl border-l-4 pl-2 border-green-500">
          Booking tour
        </h2>
        <hr className="my-3" />
        <div className="my-4 flex justify-between">
          <p>Form: </p>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </div>
        <hr />
        <div className="my-4 ">
          <p>Time: </p>
        </div>
        <hr />
        <div className="my-4 flex justify-between">
          <p>Tickets: </p>
          <p className="text-[15px] text-[#777474]">
            please, select date first{" "}
          </p>
        </div>
        <hr />
        <div className="my-4 flex justify-between items-center">
          <p className="font-bold text-[19px]">Add extra</p>
          <div>
            <div className="flex gap-5 items-center text-[15px]">
              <input type="checkbox" name="" id="" />
              <p>Service per booking</p>
              <p>$30.00</p>
            </div>
            <hr className="my-3" />
            <div className="flex gap-5 items-center text-[15px]">
              <input type="checkbox" name="" id="" />
              <div className="flex items-center gap-3">
                <p>Service per booking</p>
                <div>
                  <p>Children:$18.00</p>
                  <p>Youth:$16.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr />
        <div className="my-4">
          <p className="font-bold text-[20px]">Total:</p>
          <button className="btn btn-block mt-2 bg-[#71B356] hover:bg-[#75e04b] text-white">
           <span><FaShoppingCart /></span> Book now
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookForm;
