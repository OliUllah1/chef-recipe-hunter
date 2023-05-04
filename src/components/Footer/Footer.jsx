import React from 'react';
import logo from '../../../public/logo.png'
import {FaFacebookF,FaInstagram,FaTwitter,FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
    return (
        <div className='text-white px-2 lg:px-10 py-10 bg-black'>
            <div className='lg:flex gap-2'>
                <div className='mb-5 lg:mb-0 lg:w-[30%] text-center lg:text-left'>
                    <div className='flex justify-center lg:justify-start'>
                    <img className='h-10 mb-2' src={logo} alt="" />
                    </div>
                    <p className='mb-4 text-gray-500'>There are many variations of passages <br /> of Lorem Ipsum , but the majority have <br /> suffered alteration in some form.</p>
                    <div className='flex justify-center lg:justify-start gap-3'>
                        <div className=' bg-gray-500 p-3 rounded'>
                            <FaFacebookF className=' text-2xl'></FaFacebookF>
                        </div>
                        <div className=' bg-gray-500 p-3 rounded'>
                            <FaInstagram className='text-2xl'></FaInstagram>
                        </div>
                        <div className=' bg-gray-500 p-3 rounded'>
                            <FaTwitter className='text-2xl'></FaTwitter>
                        </div>
                        <div className=' bg-gray-500 p-3 rounded'>
                            <FaLinkedinIn className='text-2xl'></FaLinkedinIn>
                        </div>
                    </div>
                </div>
                <div className='lg:flex justify-evenly lg:w-[70%]'>
                    <div className='flex justify-center lg:justify-start'>
                        <div>
                        <h4 className='text-xl font-semibold mb-3'>Contact Info</h4>
                        <ul className='space-y-2 text-gray-500'>
                            <li><span className=' text-white font-semibold'>Address: </span> New Hyde Park, NY 11040</li>
                            <li><span className=' text-white font-semibold'>Email: </span> foodhub@gmail.com</li>
                            <li><span className=' text-white font-semibold'>Call:: </span> (+91)-213-666-0027</li>
                           
                        </ul>
                        </div>
                    </div>
                    <div className='px-5 lg:px-0'>
                        <h4 className='text-xl font-semibold mb-3 text-center lg:text-left mt-5 lg:mt-0'>Opening Times</h4>
                        <ul className='space-y-2 text-gray-500'>
                        <div className='flex gap-10'>
                            <li className=''>Mon - Tue</li>
                            <li>09.00 am - 10.00 pm</li>
                        </div>
                        <hr />
                        <div className='flex gap-10'>
                            <li className=''>Wed - Thu</li>
                            <li>09.00 am - 10.00 pm</li>
                        </div>
                        <hr />
                        <div className='flex gap-20'>
                            <li className=''>Sat</li>
                            <li>09.00 am - 10.00 pm</li>
                        </div>
                        <hr />
                        <div className='flex gap-20'>
                            <li className=''>Sun</li>
                            <li>09.00 am - 10.00 pm</li>
                        </div>
                        </ul>
                    </div>
                </div>
                
            </div>
            <div>
                <hr className='text-white mt-5' />
                <div className='mt-3 flex justify-center text-gray-500'>
                    <p>Copyright 2023 by Food Hub All Right Reserved.</p>
                </div>

            </div>
        </div>
    );
};
export default Footer;