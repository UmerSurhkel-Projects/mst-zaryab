'use client'
import React, { useState } from "react";
import Image from 'next/image'
import Link from 'next/link'
import { Images } from '../../assets/assets'


function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-HeaderBackgroud p-Headerpadding">
            <div className="container mx-auto flex justify-between items-center relative">
                <div className="flex flex-wrap items-center">
                    <strong className="">
                        <Link href="">
                            <Image className='w-headerLogo 2xl:w-headerLogo xl:w-xlheaderLogo lg:w-lgheaderLogo' src={Images.siteLogo} alt="Site Logo" />
                        </Link>
                    </strong>
                </div>
                <button
                    className="lg:hidden text-white focus:outline-none"
                    onClick={toggleMenu}
                >
                    {isOpen ? (
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            ></path>
                        </svg>
                    ) : (
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            ></path>
                        </svg>
                    )}
                </button>
                <div className={`z-0 2xl:z-0 xl:z-0 lg:z-0 md:z-10 sm:z-10 lg:flex items-center pt-0 2xl:pt-0 xl:pt-0 lg:pt-0 md:pt-6 ${isOpen ? "block absolute 2xl:top-14 right-0 w-full bg-red" : "hidden"
                    } w-100 lg:mt-0 md:top-6 transition-transform duration-300 ease-in-out transform lg:transform-none`}>
                    <div className="static 2xl:static xl:static lg:static md:static sm:absolute top-0 2xl:top-0 xl:top-0 lg:top-0 md:top-0 sm:top-8 w-full flex 2xl:flex xl:flex lg:flex md:block sm:block items-center bg-transparent 2xl:bg-transparent xl:bg-transparent lg:bg-transparent md:bg-HeaderBackgroud sm:bg-HeaderBackgroud p-0 2xl:p-0 xl:p-0 lg:p-0 md:p-7 sm:p-5" id="navbar-default">
                        <ul className="flex 2xl:flex xl:flex lg:flex md:block sm:block  p-0 mb-0 ">
                            <li className='mr-marginHeaderList 2xl:mr-marginHeaderList xl:mr-xlmarginHeaderList lg:mr-lgmarginHeaderList md:mr-0 sm:mr-0 p-0 2xl:p-0 xl:p-0 lg:p-0 md:p-3 sm:p-2 bg-transparent 2xl:bg-transparent xl:bg-transparent lg:bg-transparent md:bg-HeaderNav sm:bg-HeaderNav rounded mb-0 2xl:mb-0 xl:mb-0 lg:mb-0 md:mb-3 sm:mb-2 '>
                                <Link href="/" className="text-white font-semibold text-lg 2xl:text-lg xl:text-base lg:text-sm md:text-xs sm:text-xs ease-in-out duration-500 hover:text-bannerStrongColor">Home</Link>
                            </li>
                            <li className='mr-marginHeaderList 2xl:mr-marginHeaderList xl:mr-xlmarginHeaderList lg:mr-lgmarginHeaderList md:mr-0 sm:mr-0 p-0 2xl:p-0 xl:p-0 lg:p-0 md:p-3 sm:p-2 bg-transparent 2xl:bg-transparent xl:bg-transparent lg:bg-transparent md:bg-HeaderNav sm:bg-HeaderNav rounded mb-0 2xl:mb-0 xl:mb-0 lg:mb-0 md:mb-3 sm:mb-2'>
                                <Link href="/" className="text-white font-semibold text-lg 2xl:text-lg xl:text-base lg:text-sm md:text-xs sm:text-xs ease-in-out duration-500 hover:text-bannerStrongColor">Review</Link>
                            </li>
                            <li className='mr-marginHeaderList 2xl:mr-marginHeaderList xl:mr-xlmarginHeaderList lg:mr-lgmarginHeaderList md:mr-0 sm:mr-0 p-0 2xl:p-0 xl:p-0 lg:p-0 md:p-3 sm:p-2 bg-transparent 2xl:bg-transparent xl:bg-transparent lg:bg-transparent md:bg-HeaderNav sm:bg-HeaderNav rounded mb-0 2xl:mb-0 xl:mb-0 lg:mb-0 md:mb-3 sm:mb-2'>
                                <Link href="/" className="text-white font-semibold text-lg 2xl:text-lg xl:text-base lg:text-sm md:text-xs sm:text-xs ease-in-out duration-500 hover:text-bannerStrongColor">Features</Link>
                            </li>
                            <li className='mr-marginHeaderList 2xl:mr-marginHeaderList xl:mr-xlmarginHeaderList lg:mr-lgmarginHeaderList md:mr-0 sm:mr-0 p-0 2xl:p-0 xl:p-0 lg:p-0 md:p-3 sm:p-2 bg-transparent 2xl:bg-transparent xl:bg-transparent lg:bg-transparent md:bg-HeaderNav sm:bg-HeaderNav rounded mb-0 2xl:mb-0 xl:mb-0 lg:mb-0 md:mb-3 sm:mb-2'>
                                <Link href="/" className="text-white font-semibold text-lg 2xl:text-lg xl:text-base lg:text-sm md:text-xs sm:text-xs ease-in-out duration-500 hover:text-bannerStrongColor">Benefits</Link>
                            </li>
                            <li className='mr-marginHeaderList 2xl:mr-marginHeaderList xl:mr-xlmarginHeaderList lg:mr-lgmarginHeaderList md:mr-0 sm:mr-0 p-0 2xl:p-0 xl:p-0 lg:p-0 md:p-3 sm:p-2 bg-transparent 2xl:bg-transparent xl:bg-transparent lg:bg-transparent md:bg-HeaderNav sm:bg-HeaderNav rounded mb-0 2xl:mb-0 xl:mb-0 lg:mb-0 md:mb-3 sm:mb-2'>
                                <Link href="/" className="text-white font-semibold text-lg 2xl:text-lg xl:text-base lg:text-sm md:text-xs sm:text-xs ease-in-out duration-500 hover:text-bannerStrongColor">Pricing</Link>
                            </li>
                            <li className='mr-marginHeaderList 2xl:mr-marginHeaderList xl:mr-xlmarginHeaderList lg:mr-lgmarginHeaderList md:mr-0 sm:mr-0 p-0 2xl:p-0 xl:p-0 lg:p-0 md:p-3 sm:p-2 bg-transparent 2xl:bg-transparent xl:bg-transparent lg:bg-transparent md:bg-HeaderNav sm:bg-HeaderNav rounded mb-0 2xl:mb-0 xl:mb-0 lg:mb-0 md:mb-3 sm:mb-2'>
                                <Link href="/" className="text-white font-semibold text-lg 2xl:text-lg xl:text-base lg:text-sm md:text-xs sm:text-xs ease-in-out duration-500 hover:text-bannerStrongColor">Faqs</Link>
                            </li>
                            <li className='mr-marginHeaderList 2xl:mr-marginHeaderList xl:mr-xlmarginHeaderList lg:mr-lgmarginHeaderList md:mr-0 sm:mr-0 p-0 2xl:p-0 xl:p-0 lg:p-0 md:p-3 sm:p-2 bg-transparent 2xl:bg-transparent xl:bg-transparent lg:bg-transparent md:bg-HeaderNav sm:bg-HeaderNav rounded mb-0 2xl:mb-0 xl:mb-0 lg:mb-0 md:mb-3 sm:mb-2'>
                                <Link href="/" className="text-white font-semibold text-lg 2xl:text-lg xl:text-base lg:text-sm md:text-xs sm:text-xs ease-in-out duration-500 hover:text-bannerStrongColor">Contact</Link>
                            </li>
                        </ul>
                        <div>
                            <button className='p-buttonpadding 2xl:p-buttonpadding xl:p-xlbuttonpadding lg:p-lgbuttonpadding md:p-mdbuttonpadding sm:p-mdbuttonpadding bg-white font-semibold text-lg 2xl:text-lg xl:text-base lg:text-sm md:text-xs sm:text-xs  me-1.5 rounded ease-in-out duration-500 hover:bg-buttonBackgroud'>Create an Account</button>
                            <button className='p-buttonpadding 2xl:p-buttonpadding xl:p-xlbuttonpadding lg:p-lgbuttonpadding md:p-mdbuttonpadding sm:p-mdbuttonpadding bg-buttonBackgroud font-semibold text-lg 2xl:text-lg xl:text-base lg:text-sm md:text-xs sm:text-xs rounded ease-in-out duration-500 hover:bg-white'>Sign In</button>
                        </div>
                    </div>
                </div>
            </div>
        </nav >
    );
}

export default Header;