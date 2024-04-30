'use client'
import Image from 'next/image'
import {Images} from '../../../public/assets/assets'
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faGoogle, faLinkedinIn, faPinterestP, faTwitter } from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (
        <div className='footer p-footerPadding 4xl:p-footerPadding 3xl:p-3xlfooterPadding 2xl:p-2xlfooterPadding xl:p-xlfooterPadding lg:p-lgfooterPadding md:p-mdfooterPadding sm:p-smfooterPadding bg-[#070E40]'>
            <div className='container'>
                <div className="footer-main">
                    <div className="footer-logo flex justify-center mb-8">
                        <Link href="/">
                            <Image className='w-headerLogo 2xl:w-headerLogo xl:w-xlheaderLogo lg:w-lgheaderLogo md:w-lgheaderLogo sm:w-lgheaderLogo' src={Images.siteLogo} alt="Site Logo" />
                        </Link>
                    </div>
                    <p className='text-sm 4xl:text-sm 3xl:text-sm 2xl:text-sm xl:text-sm lg:text-sm md:text-xs sm:4xl:text-sm font-normal text-center text-white mb-5'>© 2023 All Rights Reserved AssetRack</p>
                    <ul className='p-0 flex justify-center items-center'>
                        <li className='h-9 4xl:h-9 3xl:h-9 2xl:h-8 w-9 xl:h-7 lg:h-6 md:h-6 sm:h-6 4xl:w-9 3xl:w-9 2xl:w-8 xl:w-7 lg:w-6 md:w-6 sm:w-6 rounded-full border-solid border border-white-700 flex justify-center items-center me-3'>
                            <Link href="/">
                                <FontAwesomeIcon className='text-white h-4 4xl:h-4 3xl:h-4 2xl:h-4 xl:h-4 lg:h-3 md:h-3 sm:h-3 w-4 4xl:w-4 3xl:w-4 2xl:w-4 xl:w-4 lg:w-3 md:w-3 sm:w-3' icon={faFacebookF} />
                            </Link>
                        </li>
                        <li className='h-9 4xl:h-9 3xl:h-9 2xl:h-8 w-9 xl:h-7 lg:h-6 md:h-6 sm:h-6 4xl:w-9 3xl:w-9 2xl:w-8 xl:w-7 lg:w-6 md:w-6 sm:w-6 rounded-full border-solid border border-white-700 flex justify-center items-center me-3'>
                            <Link href="/">
                                <FontAwesomeIcon className='text-white h-4 4xl:h-4 3xl:h-4 2xl:h-4 xl:h-4 lg:h-3 md:h-3 sm:h-3 w-4 4xl:w-4 3xl:w-4 2xl:w-4 xl:w-4 lg:w-3 md:w-3 sm:w-3' icon={faTwitter} />
                            </Link>
                        </li>
                        <li className='h-9 4xl:h-9 3xl:h-9 2xl:h-8 w-9 xl:h-7 lg:h-6 md:h-6 sm:h-6 4xl:w-9 3xl:w-9 2xl:w-8 xl:w-7 lg:w-6 md:w-6 sm:w-6 rounded-full border-solid border border-white-700 flex justify-center items-center me-3'>
                            <Link href="/">
                                <FontAwesomeIcon className='text-white h-4 4xl:h-4 3xl:h-4 2xl:h-4 xl:h-4 lg:h-3 md:h-3 sm:h-3 w-4 4xl:w-4 3xl:w-4 2xl:w-4 xl:w-4 lg:w-3 md:w-3 sm:w-3' icon={faLinkedinIn} />
                            </Link>
                        </li>
                        <li className='h-9 4xl:h-9 3xl:h-9 2xl:h-8 w-9 xl:h-7 lg:h-6 md:h-6 sm:h-6 4xl:w-9 3xl:w-9 2xl:w-8 xl:w-7 lg:w-6 md:w-6 sm:w-6 rounded-full border-solid border border-white-700 flex justify-center items-center me-3'>
                            <Link href="/">
                                <FontAwesomeIcon className='text-white h-4 4xl:h-4 3xl:h-4 2xl:h-4 xl:h-4 lg:h-3 md:h-3 sm:h-3 w-4 4xl:w-4 3xl:w-4 2xl:w-4 xl:w-4 lg:w-3 md:w-3 sm:w-3' icon={faGoogle} />
                            </Link>
                        </li>
                        <li className='h-9 4xl:h-9 3xl:h-9 2xl:h-8 w-9 xl:h-7 lg:h-6 md:h-6 sm:h-6 4xl:w-9 3xl:w-9 2xl:w-8 xl:w-7 lg:w-6 md:w-6 sm:w-6 rounded-full border-solid border border-white-700 flex justify-center items-center'>
                            <Link href="/">
                                <FontAwesomeIcon className='text-white h-4 4xl:h-4 3xl:h-4 2xl:h-4 xl:h-4 lg:h-3 md:h-3 sm:h-3 w-4 4xl:w-4 3xl:w-4 2xl:w-4 xl:w-4 lg:w-3 md:w-3 sm:w-3' icon={faPinterestP} />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer;