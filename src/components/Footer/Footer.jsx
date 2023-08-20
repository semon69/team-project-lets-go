import React from 'react';
import { FiTwitter } from "react-icons/fi";
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { AiOutlineInstagram, AiOutlineMail } from "react-icons/ai";
import { BsFillSendFill, BsCheck2Circle, BsFillTelephoneFill } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import Link from 'next/link';
const Footer = () => {
    return (
        <>
            <footer className="footer p-10 bg-[#1d231f] text-white ">
                <div>
                    <div className='flex items-center gap-3'>
                        <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clip-rule="evenodd" className="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg>
                        <p>Explore ephere</p>
                    </div>
                    <p className='mt-4'>To take trivial example which us
                        <br />  ever undertakes laborious <br /> physica exercise except obsome.</p>

                    <div className='flex gap-3 mt-10'>

                        <div className='h-[40px] w-[40px] rounded-full bg-[#414643] flex items-center justify-center hover:bg-white'>
                            <FiTwitter className='h-5 w-5 hover:text-black ' />
                        </div>
                        <div className='h-[40px] w-[40px] rounded-full bg-[#414643] flex items-center justify-center hover:bg-white'>
                            <CiFacebook className='h-5 w-5 hover:text-black' />
                        </div>
                        <div className='h-[40px] w-[40px] rounded-full bg-[#414643] flex items-center justify-center hover:bg-white'>
                            <AiOutlineInstagram className='h-5 w-5 hover:text-black' />
                        </div>
                        <div className='h-[40px] w-[40px] rounded-full bg-[#414643] flex items-center justify-center hover:bg-white'>
                            <CiLinkedin className='h-5 w-5 hover:text-black' />
                        </div>

                    </div>
                </div>
                <div>
                    <span className="footer-title font-semibold">Pages</span>
                    <Link href='/about' className=" hover:text-green-500 mt-2">About us</Link>
                    <Link href='/blog' className=" hover:text-green-500 mt-2">Community Blog</Link>
                    <Link href='/work_with_us' className=" hover:text-green-500 mt-2">Work with Us</Link>
                    <Link href='/policy' className=" hover:text-green-500 mt-2">Privacy Policy</Link>
                    <Link href='/contact' className=" hover:text-green-500 mt-2">Contact us</Link>

                </div>
                <div>
                    <span className="footer-title font-semibold">Newsletter</span>
                    <p className='mt-3 mb-3'>Subscribe our newsletter to get <br /> our latest  update & news.</p>

                    <div className="join mt-3 hidden lg:block">
                        <input className=" input input-bordered join-item" placeholder="Email address" />
                        <button className="btn join-item rounded-r-full bg-[#63ab45] ">
                            <BsFillSendFill className=' h-5 w-5 text-white' />
                        </button>
                    </div>

                    <div className="join mt-3 mr-10 block lg:hidden">
                        <input className=" input input-bordered join-item" placeholder="Email address" />
                       
                    </div>

                    <p className='mt-2 flex items-center gap-3'> <BsCheck2Circle className='h-4 w-4' /> I agree to all terms and policies</p>
                </div>
                <div>
                    <span className="footer-title font-semibold">Contact</span>

                    <div className='flex items-center gap-3'>
                        <div className='h-[40px] w-[40px] rounded-full bg-[#414643] flex items-center justify-center hover:bg-white'>
                            <BsFillTelephoneFill className='h-5 w-5 hover:text-black' />
                        </div>
                        <div >
                            <p>Drop a Line</p>
                            <p className='font-semibold pt-1'>+00 (123) 456 889</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3 mt-2'>
                        <div className='h-[40px] w-[40px] rounded-full bg-[#414643] flex items-center justify-center hover:bg-white'>
                            <AiOutlineMail className='h-5 w-5 hover:text-black' />
                        </div>
                        <div >
                            <p>Email Address</p>
                            <p className='font-semibold pt-1'>example@example.com</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3 mt-2'>
                        <div className='h-[40px] w-[40px] rounded-full bg-[#414643] flex items-center justify-center hover:bg-white'>
                            <HiLocationMarker className='h-5 w-5 hover:text-black' />
                        </div>
                        <div >
                            <p>Visit office</p>
                            <p className='font-semibold pt-1'>583 Main Street, NY, USA</p>
                        </div>
                    </div>
                </div>

            </footer>
            <div className='text-center bg-[#101311] text-white p-3'>
                <p>Copyright © 2023 - All right reserved by Explore ephere</p>
            </div>

        </>
    );
};

export default Footer;