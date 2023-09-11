"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { BiUserCircle } from "react-icons/bi";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import {usePathname} from 'next/navigation'
import Hamburger from 'hamburger-react';
const Navbar = () => {

    const path = usePathname();
    const [open, setOpen] = useState(false)

    const navLink = <>

        <li className={`font-semibold ${path.includes('/') ? 'text-green-500' : '' } `}><Link href='/'>Home</Link></li>
        <li className={`font-semibold ${path.startsWith('/destination') ? 'text-green-500' : '' } `}><Link href='/destination'>Destination</Link></li>
        <li className={`font-semibold ${path.includes('/news') ? 'text-green-500' : '' } `}><Link href='/news'>News</Link></li>
        <li className={`font-semibold ${path.startsWith('/contact') ? 'text-green-500' : '' } `}><Link href='/contact'>Contact</Link></li>
    </>

    return (
      <div className="navbar fixed z-10 lg:min-w-full h-[100px] bg-white text-black">
        <div className="navbar-start">
          <div className="dropdown">
            <label
              onClick={() => setOpen(!open)}
              tabIndex={0}
              className=" lg:hidden"
            >
              <Hamburger size={20} />
            </label>
            {open && (
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navLink}
              </ul>
            )}
          </div>
          <a className="btn btn-ghost normal-case text-2xl font-bold">Lets Go</a>
        </div>
        {/* <div className="navbar-center hidden lg:flex"> */}
        <div className="navbar  hidden lg:flex justify-end ml-[500px]  w-full text-right ">
          <ul className="menu menu-horizontal  px-1 ">{navLink}</ul>
        </div>
        <div className="  divider lg:divider-horizontal py-4 pr-5  "></div>
        <div className="navbar-end block lg:flex gap-5 justify-normal  ">
          <a className="hidden lg:block">
            <HiOutlineMagnifyingGlass className="h-[30px] w-[30px]" />
          </a>
          <a className="h-[40px] w-[40px] flex items-center justify-center bg-slate-100 rounded-full">
            <Link href={'/login'}><BiUserCircle className="h-[25px] w-[25px]" /></Link>
          </a>
        </div>
      </div>
    );
};

export default Navbar;
