'use client'
import React, { useState } from 'react';
import Image from 'next/image'
import {Images} from '../../../public/assets/assets'


const Tabs = () => {
    const [activeTab, setActiveTab] = useState(1);
    const handleTabClick = (tabNumber) => {
        console.log(tabNumber);
        setActiveTab(tabNumber);
    };
    return (
        <div className='features mb-20 4xl:mb-20 3xl:mb-20 2xl:mb-16 xl:mb-14 lg:mb-12 md:mb-10 sm:mb-10'>
            <div className='container'>
                <div className='relative  mb-8'>
                    <h2 className='text-center text-h2Color text-6xl 4xl:text-6xl 3xl:text-5xl 2xl:text-4xl xl:text-4xl lg:text-3xl md:text-3xl sm:text-xl font-semibold mb-6 4xl:mb-6 3xl:mb-5 2xl:mb-5 xl:mb-4 lg:mb-4 md:mb-4 sm:mb-3'>Features</h2>
                    <p className='text-center text-benefitsParagraphe 4xl:text-benefitsParagraphe 3xl:text-xl 2xl:text-lg xl:text-lg lg:text-base md:text-sm sm:text-sm font-light'>Vivamus eget aliquam dui. Integer eu arcu vel arcu suscipit ultrices quis non mauris.</p>
                </div>
                <div className="bg-white max-w-tabsMain mx-auto">
                    <div className=" rounded-full border-2  p-tabsPadding 4xl:p-tabsPadding 3xl:p-tabsPadding 2xl:2xltabsPadding xl:p-xltabsPadding lg:p-lgtabsPadding md:p-mdtabsPadding sm:p-smtabsPadding mb-16 4xl:mb-16 3xl:mb-16 2xl:mb-14 xl:mb-10 lg:mb-8 md:mb-7 sm:mb-5">
                        <button
                            className={` ${activeTab === 1 ? 'bg-HeaderBackgroud text-white text-lg 4xl:text-lg 3xl:text-base 2xl:text-sm xl:text-sm lg:text-sm md:text-sm sm:text-xs font-semibold p-tabsPillPadding 2xl:p-2xltabsPillPadding xl:p-xltabsPillPadding lg:p-lgtabsPillPadding md:p-mdtabsPillPadding sm:p-smtabsPillPadding mb-0 2xl:mb-0 xl:mb-0 lg:mb-3 md:mb-3 sm:mb-3 rounded-full mr-10 4xl:mr-10 3xl:mr-12 2xl:mr-12 xl:mr-5' : 'text-tabsCOlor text-lg 4xl:text-lg 3xl:text-base 2xl:text-sm xl:text-sm lg:text-sm md:text-sm font-normal mb-0 2xl:mb-0 xl:mb-0 lg:mb-3 md:mb-3 sm:mb-3 mr-10 4xl:mr-10 3xl:mr-12 2xl:mr-12 xl:mr-5'
                                }`}
                            onClick={() => handleTabClick(1)}
                        >
                            Ultimate User
                        </button>
                        <button
                            className={` ${activeTab === 2 ? 'bg-HeaderBackgroud text-white text-lg 4xl:text-lg 3xl:text-base 2xl:text-sm xl:text-sm lg:text-sm md:text-sm sm:text-xs font-semibold p-tabsPillPadding 2xl:p-2xltabsPillPadding xl:p-xltabsPillPadding lg:p-lgtabsPillPadding md:p-mdtabsPillPadding sm:p-smtabsPillPadding mb-0 2xl:mb-0 xl:mb-0 lg:mb-3 md:mb-3 sm:mb-3 rounded-full mr-10 4xl:mr-10 3xl:mr-12 2xl:mr-12 xl:mr-5' : 'text-tabsCOlor text-lg 4xl:text-lg 3xl:text-base 2xl:text-sm xl:text-sm lg:text-sm md:text-sm font-normal mb-0 2xl:mb-0 xl:mb-0 lg:mb-3 md:mb-3 sm:mb-3 mr-10 4xl:mr-10 3xl:mr-12 2xl:mr-12 xl:mr-5'
                                }`}
                            onClick={() => handleTabClick(2)}
                        >
                            Unlimited Custom Reports
                        </button>
                        <button
                            className={` ${activeTab === 3 ? 'bg-HeaderBackgroud text-white text-lg 4xl:text-lg 3xl:text-base 2xl:text-sm xl:text-sm lg:text-sm md:text-sm sm:text-xs font-semibold p-tabsPillPadding 2xl:p-2xltabsPillPadding xl:p-xltabsPillPadding lg:p-lgtabsPillPadding md:p-mdtabsPillPadding sm:p-smtabsPillPadding mb-0 2xl:mb-0 xl:mb-0 lg:mb-3 md:mb-3 sm:mb-3 rounded-full mr-10 4xl:mr-10 3xl:mr-12 2xl:mr-12 xl:mr-5' : 'text-tabsCOlor text-lg 4xl:text-lg 3xl:text-base 2xl:text-sm xl:text-sm lg:text-sm md:text-sm font-normal mb-0 2xl:mb-0 xl:mb-0 lg:mb-3 md:mb-3 sm:mb-3 mr-10 4xl:mr-10 3xl:mr-12 2xl:mr-12 xl:mr-5'
                                }`}
                            onClick={() => handleTabClick(3)}
                        >
                            Cloud-based
                        </button>
                        <button
                            className={` ${activeTab === 4 ? 'bg-HeaderBackgroud text-white text-lg 4xl:text-lg 3xl:text-base 2xl:text-sm xl:text-sm lg:text-sm md:text-sm sm:text-xs font-semibold p-tabsPillPadding 2xl:p-2xltabsPillPadding xl:p-xltabsPillPadding lg:p-lgtabsPillPadding md:p-mdtabsPillPadding sm:p-smtabsPillPadding mb-0 2xl:mb-0 xl:mb-0 lg:mb-3 md:mb-3 sm:mb-3 rounded-full mr-10 4xl:mr-10 3xl:mr-12 2xl:mr-12 xl:mr-5' : 'text-tabsCOlor text-lg 4xl:text-lg 3xl:text-base 2xl:text-sm xl:text-sm lg:text-sm md:text-sm font-normal mb-0 2xl:mb-0 xl:mb-0 lg:mb-3 md:mb-3 sm:mb-3 mr-10 4xl:mr-10 3xl:mr-12 2xl:mr-12 xl:mr-5'
                                }`}
                            onClick={() => handleTabClick(4)}
                        >
                            Configurable Email Alerts
                        </button>
                        <button
                            className={` ${activeTab === 5 ? 'bg-HeaderBackgroud text-white text-lg 4xl:text-lg 3xl:text-base 2xl:text-sm xl:text-sm lg:text-sm md:text-sm sm:text-xs font-semibold p-tabsPillPadding 2xl:p-2xltabsPillPadding xl:p-xltabsPillPadding lg:p-lgtabsPillPadding md:p-mdtabsPillPadding sm:p-smtabsPillPadding mb-0 2xl:mb-0 xl:mb-0 lg:mb-3 md:mb-3 sm:mb-3 rounded-full mr-10 4xl:mr-10 3xl:mr-12 2xl:mr-12 xl:mr-5' : 'text-tabsCOlor text-lg 4xl:text-lg 3xl:text-base 2xl:text-sm xl:text-sm lg:text-sm md:text-sm font-normal mb-0 2xl:mb-0 xl:mb-0 lg:mb-3 md:mb-3 sm:mb-3 mr-10 4xl:mr-10 3xl:mr-12 2xl:mr-12 xl:mr-5'
                                }`}
                            onClick={() => handleTabClick(5)}
                        >
                            Barcode Scanning
                        </button>
                        <button
                            className={` ${activeTab === 6 ? 'bg-HeaderBackgroud text-white text-lg 4xl:text-lg 3xl:text-base 2xl:text-sm xl:text-sm lg:text-sm md:text-sm sm:text-xs font-semibold p-tabsPillPadding 2xl:p-2xltabsPillPadding xl:p-xltabsPillPadding lg:p-lgtabsPillPadding md:p-mdtabsPillPadding sm:p-smtabsPillPadding mb-0 2xl:mb-0 xl:mb-0 lg:mb-3 md:mb-3 sm:mb-3 rounded-full mr-10 4xl:mr-10 3xl:mr-12 2xl:mr-12 xl:mr-5' : 'text-tabsCOlor text-lg 4xl:text-lg 3xl:text-base 2xl:text-sm xl:text-sm lg:text-sm md:text-sm font-normal mb-0 2xl:mb-0 xl:mb-0 lg:mb-3 md:mb-3 sm:mb-3 mr-10 4xl:mr-10 3xl:mr-12 2xl:mr-12 xl:mr-5'
                                }`}
                            onClick={() => handleTabClick(6)}
                        >
                            Maintenance Scheduling
                        </button>
                        <button
                            className={` ${activeTab === 7 ? 'bg-HeaderBackgroud text-white text-lg 4xl:text-lg 3xl:text-base 2xl:text-sm xl:text-sm lg:text-sm md:text-sm sm:text-xs font-semibold p-tabsPillPadding 2xl:p-2xltabsPillPadding xl:p-xltabsPillPadding lg:p-lgtabsPillPadding md:p-mdtabsPillPadding sm:p-smtabsPillPadding mb-0 2xl:mb-0 xl:mb-0 lg:mb-3 md:mb-3 sm:mb-3 rounded-full mr-10 4xl:mr-10 3xl:mr-12 2xl:mr-12 xl:mr-5' : 'text-tabsCOlor text-lg 4xl:text-lg 3xl:text-base 2xl:text-sm xl:text-sm lg:text-sm md:text-sm font-normal mb-0 2xl:mb-0 xl:mb-0 lg:mb-3 md:mb-3 sm:mb-3 mr-10 4xl:mr-10 3xl:mr-12 2xl:mr-12 xl:mr-5'
                                }`}
                            onClick={() => handleTabClick(7)}
                        >
                            Check-in & check-out Features
                        </button>
                    </div>

                    <div className="">
                        {activeTab === 1 &&
                            <div className='tabs-content-img flex grid grid-cols-2 4xl:grid-cols-2 3xl:grid-cols-2 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 items-center'>
                                <div className='tabs-content'>
                                    <h3 className='text-h3Heading 4xl:text-h3Heading 3xl:text-3xlh3Heading 2xl:text-2xlh3Heading xl:text-xlh3Heading lg:text-lgh3Heading md:text-mdh3Heading sm:text-smh3Heading font-semibold mb-8 2xl:mb-8 xl:mb-7 lg:mb-6 md:mb-5 sm:mb-4 leading-10'>Unlimited Users</h3>
                                    <p className='text-xl 4xl:text-xl 3xl:text-xl 2xl:text-lg xl:text-lg lg:text-base md:text-sm sm:text-sm font-normal mb-7 2xl:mb-7 xl:mb-6 lg:mb-5 md:mb-4 sm:mb-3'>
                                        Unlimited users at no additional charge. Make your system as broad, or as narrow, as you need. Each user can have their own unique
                                        level of access ranging from limited viewing to full administrator. AssetTiger is designed as a convenient solution for everyone
                                        in your organization.
                                    </p>
                                    <p className='text-xl 4xl:text-xl 3xl:text-xl 2xl:text-lg xl:text-lg lg:text-base md:text-sm sm:text-sm font-normal mb-7'>
                                        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In auctor egestas
                                        dolor et iaculis. Suspendisse et ipsum consectetur, elementum enim et, dignissim risus. Phasellus id diam erat. Pellentesque hendrerit
                                        sem sit amet odio sodales, at placerat metus gravida. Duis venenatis quam eget ligula euismod vulputate.
                                    </p>
                                </div>
                                <div className='tabs-img flex justify-end'>
                                    <Image className='' src={Images.tabsImg} alt="Site Logo" />
                                </div>
                            </div>
                        }
                        {activeTab === 2 &&
                            <div className='tabs-content-img flex grid grid-cols-2 4xl:grid-cols-2 3xl:grid-cols-2 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 items-center'>
                                <div className='tabs-content'>
                                    <h3 className='text-h3Heading 4xl:text-h3Heading 3xl:text-3xlh3Heading 2xl:text-2xlh3Heading xl:text-xlh3Heading lg:text-lgh3Heading md:text-mdh3Heading sm:text-smh3Heading font-semibold mb-8 2xl:mb-8 xl:mb-7 lg:mb-6 md:mb-5 sm:mb-4 leading-10'>Unlimited Custom Reports</h3>
                                    <p className='text-xl 4xl:text-xl 3xl:text-xl 2xl:text-lg xl:text-lg lg:text-base md:text-sm sm:text-sm font-normal mb-7'>
                                        Unlimited users at no additional charge. Make your system as broad, or as narrow, as you need. Each user can have their own unique
                                        level of access ranging from limited viewing to full administrator. AssetTiger is designed as a convenient solution for everyone
                                        in your organization.
                                    </p>
                                    <p className='text-xl 4xl:text-xl 3xl:text-xl 2xl:text-lg xl:text-lg lg:text-base md:text-sm sm:text-sm font-normal mb-7'>
                                        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In auctor egestas
                                        dolor et iaculis. Suspendisse et ipsum consectetur, elementum enim et, dignissim risus. Phasellus id diam erat. Pellentesque hendrerit
                                        sem sit amet odio sodales, at placerat metus gravida. Duis venenatis quam eget ligula euismod vulputate.
                                    </p>
                                </div>
                                <div className='tabs-img flex justify-end'>
                                    <Image className='' src={Images.tabsImg} alt="Site Logo" />
                                </div>
                            </div>
                        }
                        {activeTab === 3 &&
                            <div className='tabs-content-img flex grid grid-cols-2 4xl:grid-cols-2 3xl:grid-cols-2 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 items-center'>
                                <div className='tabs-content'>
                                    <h3 className='text-h3Heading 4xl:text-h3Heading 3xl:text-3xlh3Heading 2xl:text-2xlh3Heading xl:text-xlh3Heading lg:text-lgh3Heading md:text-mdh3Heading sm:text-smh3Heading font-semibold mb-8 2xl:mb-8 xl:mb-7 lg:mb-6 md:mb-5 sm:mb-4 leading-10'>Cloud-based</h3>
                                    <p className='text-xl 4xl:text-xl 3xl:text-xl 2xl:text-lg xl:text-lg lg:text-base md:text-sm sm:text-sm font-normal mb-7'>
                                        Unlimited users at no additional charge. Make your system as broad, or as narrow, as you need. Each user can have their own unique
                                        level of access ranging from limited viewing to full administrator. AssetTiger is designed as a convenient solution for everyone
                                        in your organization.
                                    </p>
                                    <p className='text-xl 4xl:text-xl 3xl:text-xl 2xl:text-lg xl:text-lg lg:text-base md:text-sm sm:text-sm font-normal mb-7'>
                                        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In auctor egestas
                                        dolor et iaculis. Suspendisse et ipsum consectetur, elementum enim et, dignissim risus. Phasellus id diam erat. Pellentesque hendrerit
                                        sem sit amet odio sodales, at placerat metus gravida. Duis venenatis quam eget ligula euismod vulputate.
                                    </p>
                                </div>
                                <div className='tabs-img flex justify-end'>
                                    <Image className='' src={Images.tabsImg} alt="Site Logo" />
                                </div>
                            </div>
                        }
                        {activeTab === 4 &&
                            <div className='tabs-content-img flex grid grid-cols-2 4xl:grid-cols-2 3xl:grid-cols-2 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 items-center'>
                                <div className='tabs-content'>
                                    <h3 className='text-h3Heading 4xl:text-h3Heading 3xl:text-3xlh3Heading 2xl:text-2xlh3Heading xl:text-xlh3Heading lg:text-lgh3Heading md:text-mdh3Heading sm:text-smh3Heading font-semibold mb-8 2xl:mb-8 xl:mb-7 lg:mb-6 md:mb-5 sm:mb-4 leading-10'>Configurable Email Alerts</h3>
                                    <p className='text-xl 4xl:text-xl 3xl:text-xl 2xl:text-lg xl:text-lg lg:text-base md:text-sm sm:text-sm font-normal mb-7'>
                                        Unlimited users at no additional charge. Make your system as broad, or as narrow, as you need. Each user can have their own unique
                                        level of access ranging from limited viewing to full administrator. AssetTiger is designed as a convenient solution for everyone
                                        in your organization.
                                    </p>
                                    <p className='text-xl 4xl:text-xl 3xl:text-xl 2xl:text-lg xl:text-lg lg:text-base md:text-sm sm:text-sm font-normal mb-7'>
                                        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In auctor egestas
                                        dolor et iaculis. Suspendisse et ipsum consectetur, elementum enim et, dignissim risus. Phasellus id diam erat. Pellentesque hendrerit
                                        sem sit amet odio sodales, at placerat metus gravida. Duis venenatis quam eget ligula euismod vulputate.
                                    </p>
                                </div>
                                <div className='tabs-img flex justify-end'>
                                    <Image className='' src={Images.tabsImg} alt="Site Logo" />
                                </div>
                            </div>
                        }
                        {activeTab === 5 &&
                            <div className='tabs-content-img flex grid grid-cols-2 4xl:grid-cols-2 3xl:grid-cols-2 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 items-center'>
                                <div className='tabs-content'>
                                    <h3 className='text-h3Heading 4xl:text-h3Heading 3xl:text-3xlh3Heading 2xl:text-2xlh3Heading xl:text-xlh3Heading lg:text-lgh3Heading md:text-mdh3Heading sm:text-smh3Heading font-semibold mb-8 2xl:mb-8 xl:mb-7 lg:mb-6 md:mb-5 sm:mb-4 leading-10'>Barcode Scanning</h3>
                                    <p className='text-xl 4xl:text-xl 3xl:text-xl 2xl:text-lg xl:text-lg lg:text-base md:text-sm sm:text-sm font-normal mb-7'>
                                        Unlimited users at no additional charge. Make your system as broad, or as narrow, as you need. Each user can have their own unique
                                        level of access ranging from limited viewing to full administrator. AssetTiger is designed as a convenient solution for everyone
                                        in your organization.
                                    </p>
                                    <p className='text-xl 4xl:text-xl 3xl:text-xl 2xl:text-lg xl:text-lg lg:text-base md:text-sm sm:text-sm font-normal mb-7'>
                                        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In auctor egestas
                                        dolor et iaculis. Suspendisse et ipsum consectetur, elementum enim et, dignissim risus. Phasellus id diam erat. Pellentesque hendrerit
                                        sem sit amet odio sodales, at placerat metus gravida. Duis venenatis quam eget ligula euismod vulputate.
                                    </p>
                                </div>
                                <div className='tabs-img flex justify-end'>
                                    <Image className='' src={Images.tabsImg} alt="Site Logo" />
                                </div>
                            </div>
                        }
                        {activeTab === 6 &&
                            <div className='tabs-content-img flex grid grid-cols-2 4xl:grid-cols-2 3xl:grid-cols-2 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 items-center'>
                                <div className='tabs-content'>
                                    <h3 className='text-h3Heading 4xl:text-h3Heading 3xl:text-3xlh3Heading 2xl:text-2xlh3Heading xl:text-xlh3Heading lg:text-lgh3Heading md:text-mdh3Heading sm:text-smh3Heading font-semibold mb-8 2xl:mb-8 xl:mb-7 lg:mb-6 md:mb-5 sm:mb-4 leading-10'>Maintenance Scheduling</h3>
                                    <p className='text-xl 4xl:text-xl 3xl:text-xl 2xl:text-lg xl:text-lg lg:text-base md:text-sm sm:text-sm font-normal mb-7'>
                                        Unlimited users at no additional charge. Make your system as broad, or as narrow, as you need. Each user can have their own unique
                                        level of access ranging from limited viewing to full administrator. AssetTiger is designed as a convenient solution for everyone
                                        in your organization.
                                    </p>
                                    <p className='text-xl 4xl:text-xl 3xl:text-xl 2xl:text-lg xl:text-lg lg:text-base md:text-sm sm:text-sm font-normal mb-7'>
                                        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In auctor egestas
                                        dolor et iaculis. Suspendisse et ipsum consectetur, elementum enim et, dignissim risus. Phasellus id diam erat. Pellentesque hendrerit
                                        sem sit amet odio sodales, at placerat metus gravida. Duis venenatis quam eget ligula euismod vulputate.
                                    </p>
                                </div>
                                <div className='tabs-img flex justify-end'>
                                    <Image className='' src={Images.tabsImg} alt="Site Logo" />
                                </div>
                            </div>
                        }
                        {activeTab === 7 &&
                            <div className='tabs-content-img flex grid grid-cols-2 4xl:grid-cols-2 3xl:grid-cols-2 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 items-center'>
                                <div className='tabs-content'>
                                    <h3 className='text-h3Heading 4xl:text-h3Heading 3xl:text-3xlh3Heading 2xl:text-2xlh3Heading xl:text-xlh3Heading lg:text-lgh3Heading md:text-mdh3Heading sm:text-smh3Heading font-semibold mb-8 2xl:mb-8 xl:mb-7 lg:mb-6 md:mb-5 sm:mb-4 leading-10'>Check-in & check-out Features</h3>
                                    <p className='text-xl 4xl:text-xl 3xl:text-xl 2xl:text-lg xl:text-lg lg:text-base md:text-sm sm:text-sm font-normal mb-7'>
                                        Unlimited users at no additional charge. Make your system as broad, or as narrow, as you need. Each user can have their own unique
                                        level of access ranging from limited viewing to full administrator. AssetTiger is designed as a convenient solution for everyone
                                        in your organization.
                                    </p>
                                    <p className='text-xl 4xl:text-xl 3xl:text-xl 2xl:text-lg xl:text-lg lg:text-base md:text-sm sm:text-sm font-normal mb-7'>
                                        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In auctor egestas
                                        dolor et iaculis. Suspendisse et ipsum consectetur, elementum enim et, dignissim risus. Phasellus id diam erat. Pellentesque hendrerit
                                        sem sit amet odio sodales, at placerat metus gravida. Duis venenatis quam eget ligula euismod vulputate.
                                    </p>
                                </div>
                                <div className='tabs-img flex justify-end'>
                                    <Image className='' src={Images.tabsImg} alt="Site Logo" />
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tabs;