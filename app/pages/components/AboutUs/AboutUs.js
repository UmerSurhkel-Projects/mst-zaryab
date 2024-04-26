'use client'
import React from 'react';
import Image from 'next/image'
import { Images } from '../../assets/assets'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faArrowRight } from "@fortawesome/free-solid-svg-icons";


function AboutUs() {

    const settings = {
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className='about-us mb-14'>
            <div className='container'>
                <div className='main-about'>
                    <div className='about-heading absolute 2xl:absolute xl:absolute lg:static md:static sm:static w-auto mb-0 2xl:mb-0 xl:mb-0 lg:mb-7 md:mb-6 sm:mb-5'>
                        <div className='about-content mb-52 4xl:mb-52 3xl:mb-48 2xl:mb-44 xl:mb-36 lg:mb-10 md:mb-7 sm:mb-5'>
                            <span className='text-bannerStrongColor block text-trustedspan 4xl:text-trustedspan 3xl:text-xl 2xl:text-lg xl:text-base lg:text-sm md:text-sm sm:text-xs font-light'>Reviews</span>
                            <strong className='text-StrongBanner 4xl:text-StrongBanner 3xl:text-StrongBanner 2xl:text-StrongBanner xl:text-xlStrongBanner lg:text-lgStrongBanner md:text-mdStrongBanner sm:text-smStrongBanner font-thin text-h2Color'>Clients Words</strong>
                            <h1 className='font-semibold text-H1Banner 4xl:text-H1Banner 3xl:text-H1Banner 2xl:text-H1Banner xl:text-xlH1Banner lg:text-lgH1Banner md:text-mdH1Banner sm:text-smH1Banner text-h2Color leading-h1LineHeight mb-7'>About us</h1>
                        </div>
                        <div className=''>
                            <button className='p-buttonpadding 2xl:p-buttonpadding xl:p-xlbuttonpadding lg:p-lgbuttonpadding md:p-mdbuttonpadding sm:p-mdbuttonpadding bg-white font-semibold text-lg 2xl:text-lg xl:text-base lg:text-sm md:text-xs sm:text-xs rounded border-solid border-2 border-black-700 ease-in-out duration-500 hover:bg-buttonBackgroud'>Check All Reviews</button>
                        </div>
                    </div>
                    <div className='about-box max-w-aboutWidth bg-aboutBox p-aboutBoxPadding 4xl:p-aboutBoxPadding 3xl:p-3xlaboutBoxPadding 2xl:p-2xlaboutBoxPadding xl:p-xlaboutBoxPadding lg:p-lgaboutBoxPadding md:p-mdaboutBoxPadding sm:p-smaboutBoxPadding rounded-aboutBox ms-aboutBoxMarginLeft 4xl:ms-aboutBoxMarginLeft 3xl:ms-aboutBoxMarginLeft xl:ms-aboutBoxMarginLeft lg:ms-0 md:ms-0 sm:ms-0'>
                        <div className='flex justify-end items-center mb-AboutParagrapheMargin 4xl:mb-AboutParagrapheMargin 3xl:mb-3xl:mb-3xlAboutParagrapheMargin 2xl:mb-2xlAboutParagrapheMargin xl:mb-xlAboutParagrapheMargin lg:mb-lgAboutParagrapheMargin md:mb-mdAboutParagrapheMargin sm:mb-smAboutParagrapheMargin'>
                            <p className='text-aboutParagraphe text-2xl 4xl:text-2xl 3xl:text-xl 2xl:text-xl xl:text-lg lg:text-base md:text-sm sm:text-sm font-light w-aboutParagraphe 4xl:w-aboutParagraphe'>
                                Phasellus mollis tincidunt semper. Curabitur pharetra tortor nisi, ut consectetur risus faucibus in. Donec ac tortor luctus, condimentum neque.</p>
                        </div>
                        <div className='sldier'>
                            <Slider {...settings}>
                                <div>
                                    <div className='main-slider bg-white me-7 4xl:me-7 3xl:me-6 2xl:me-6 xl:me-5 lg:me-5 md:me-4 sm:me-3 p-aboutSliderPadding 4xl:p-aboutSliderPadding 3xl:p-3xlaboutSliderPadding 2xl:p-2xlaboutSliderPadding xl:p-xlaboutSliderPadding lg:p-xlgaboutSliderPadding md:p-lggaboutSliderPadding sm:p-smgaboutSliderPadding rounded-aboutSliderBox'>
                                        <div className='slider-img mb-4 4xl:mb-4 3xl:mb-4 2xl:mb-4 xl:mb-3 lg:mb-3 md:mb-3 sm:mb-2'>
                                            <Image className='w-sliderImg 4xl:w-sliderImg 3xl:w-3xlsliderImg 2xl:w-2xlsliderImg xl:w-xlsliderImg lg:w-lgsliderImg md:w-mdsliderImg sm:w-smsliderImg' src={Images.sliderOne} alt="Site Logo" />
                                        </div>
                                        <div className='slider-content mb-3'>
                                            <strong className='text-2xl 4xl:text-2xl 3xl:text-xl 2xl:text-xl xl:text-lg lg:text-base md:text-sm sm:text-sm font-semibold mb-2 flex'>Gabrielle</strong>
                                            <span className='text-base 4xl:text-base 3xl:text-base 2xl:text-base xl:text-base lg:text-sm md:text-sm sm:text-xs font-normal text-bannerStrongColor mb-2'>Written on Mar. 25, 2019</span>
                                            <div className="h-starHeight">
                                                <ul className="p-0 flex items-center me-4">
                                                    <li className="mr-1">
                                                        <FontAwesomeIcon className='text-bannerStrongColor h-starHeight w-starWidth' icon={faStar} />
                                                    </li>
                                                    <li className="mr-1">
                                                        <FontAwesomeIcon className='text-bannerStrongColor h-starHeight w-starWidth' icon={faStar} />
                                                    </li>
                                                    <li className="mr-1">
                                                        <FontAwesomeIcon className='text-bannerStrongColor h-starHeight w-starWidth' icon={faStar} />
                                                    </li>
                                                    <li className="mr-1">
                                                        <FontAwesomeIcon className='text-bannerStrongColor h-starHeight w-starWidth' icon={faStar} />
                                                    </li>
                                                    <li className="mr-1">
                                                        <FontAwesomeIcon className='text-bannerStrongColor h-starHeight w-starWidth' icon={faStar} />
                                                    </li>
                                                </ul>
                                                <span className="text-base 4xl:text-base 3xl:text-base 2xl:text-base xl:text-base lg:text-sm md:text-sm sm:text-xs  text-white">Rated 5-Star by Independent Users</span>
                                            </div>
                                        </div>
                                        <p className='text-base 4xl:text-base 3xl:text-base 2xl:text-base xl:text-base lg:text-sm md:text-sm sm:text-xs  font-normal mb-3'>
                                            Donec varius lorem risus, a mattis magna aliquet nec. Aliquam in tincidunts Integer ut vestibulum leo, a hendr nec varius
                                            lorem risus, a mattis magna aliquet erit nibis magna aliquh…
                                        </p>
                                        <div className='flex justify-end items-end'>
                                            <div className='bg-black rounded-full  h-arrowBoxHeight w-arrowBoxWidth 4xl:h-arrowBoxHeight 4xl:w-arrowBoxWidth 3xl:h-3xlarrowBoxHeight 3xl:w-3xlarrowBoxWidth 2xl:h-2xlarrowBoxHeight 2xl:w-2xlarrowBoxWidth xl:h-xlarrowBoxHeight xl:w-xlarrowBoxWidth lg:h-lgarrowBoxHeight lg:w-lgarrowBoxWidth md:h-mdarrowBoxHeight md:w-mdarrowBoxWidth sm:h-smarrowBoxHeight sm:w-smarrowBoxWidth  flex justify-center items-center'>
                                                <FontAwesomeIcon className='text-white text-2xl 4xl:text-2xl 3xl:text-xl 2xl:text-xl xl:text-lg lg:text-base md:text-sm sm:text-sm' icon={faArrowRight} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='main-slider bg-white me-7 4xl:me-7 3xl:me-6 2xl:me-6 xl:me-5 lg:me-5 md:me-4 sm:me-3 p-aboutSliderPadding 4xl:p-aboutSliderPadding 3xl:p-3xlaboutSliderPadding 2xl:p-2xlaboutSliderPadding xl:p-xlaboutSliderPadding lg:p-xlgaboutSliderPadding md:p-lggaboutSliderPadding sm:p-smgaboutSliderPadding rounded-aboutSliderBox'>
                                        <div className='slider-img mb-4 4xl:mb-4 3xl:mb-4 2xl:mb-4 xl:mb-3 lg:mb-3 md:mb-3 sm:mb-2'>
                                            <Image className='w-sliderImg 4xl:w-sliderImg 3xl:w-3xlsliderImg 2xl:w-2xlsliderImg xl:w-xlsliderImg lg:w-lgsliderImg md:w-mdsliderImg sm:w-smsliderImg' src={Images.sliderTwo} alt="Site Logo" />
                                        </div>
                                        <div className='slider-content mb-3'>
                                            <strong className='text-2xl 4xl:text-2xl 3xl:text-xl 2xl:text-xl xl:text-lg lg:text-base md:text-sm sm:text-sm font-semibold mb-2 flex'>Gabrielle</strong>
                                            <span className='text-base 4xl:text-base 3xl:text-base 2xl:text-base xl:text-base lg:text-sm md:text-sm sm:text-xs font-normal text-bannerStrongColor mb-2'>Written on Mar. 25, 2019</span>
                                            <div className="h-starHeight">
                                                <ul className="p-0 flex items-center me-4">
                                                    <li className="mr-1">
                                                        <FontAwesomeIcon className='text-bannerStrongColor h-starHeight w-starWidth' icon={faStar} />
                                                    </li>
                                                    <li className="mr-1">
                                                        <FontAwesomeIcon className='text-bannerStrongColor h-starHeight w-starWidth' icon={faStar} />
                                                    </li>
                                                    <li className="mr-1">
                                                        <FontAwesomeIcon className='text-bannerStrongColor h-starHeight w-starWidth' icon={faStar} />
                                                    </li>
                                                    <li className="mr-1">
                                                        <FontAwesomeIcon className='text-bannerStrongColor h-starHeight w-starWidth' icon={faStar} />
                                                    </li>
                                                    <li className="mr-1">
                                                        <FontAwesomeIcon className='text-bannerStrongColor h-starHeight w-starWidth' icon={faStar} />
                                                    </li>
                                                </ul>
                                                <span className="text-base 4xl:text-base 3xl:text-base 2xl:text-base xl:text-base lg:text-sm md:text-sm sm:text-xs text-white">Rated 5-Star by Independent Users</span>
                                            </div>
                                        </div>
                                        <p className='text-base 4xl:text-base 3xl:text-base 2xl:text-base xl:text-base lg:text-sm md:text-sm sm:text-xs  font-normal mb-3'>
                                            Donec varius lorem risus, a mattis magna aliquet nec. Aliquam in tincidunts Integer ut vestibulum leo, a hendr nec varius
                                            lorem risus, a mattis magna aliquet erit nibis magna aliquh…
                                        </p>
                                        <div className='flex justify-end items-end'>
                                            <div className='bg-black rounded-full  h-arrowBoxHeight w-arrowBoxWidth 4xl:h-arrowBoxHeight 4xl:w-arrowBoxWidth 3xl:h-3xlarrowBoxHeight 3xl:w-3xlarrowBoxWidth 2xl:h-2xlarrowBoxHeight 2xl:w-2xlarrowBoxWidth xl:h-xlarrowBoxHeight xl:w-xlarrowBoxWidth lg:h-lgarrowBoxHeight lg:w-lgarrowBoxWidth md:h-mdarrowBoxHeight md:w-mdarrowBoxWidth sm:h-smarrowBoxHeight sm:w-smarrowBoxWidth  flex justify-center items-center'>
                                                <FontAwesomeIcon className='text-white text-2xl 4xl:text-2xl 3xl:text-xl 2xl:text-xl xl:text-lg lg:text-base md:text-sm sm:text-sm' icon={faArrowRight} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='main-slider bg-white me-7 4xl:me-7 3xl:me-6 2xl:me-6 xl:me-5 lg:me-5 md:me-4 sm:me-3 p-aboutSliderPadding 4xl:p-aboutSliderPadding 3xl:p-3xlaboutSliderPadding 2xl:p-2xlaboutSliderPadding xl:p-xlaboutSliderPadding lg:p-xlgaboutSliderPadding md:p-lggaboutSliderPadding sm:p-smgaboutSliderPadding rounded-aboutSliderBox'>
                                        <div className='slider-img mb-4 4xl:mb-4 3xl:mb-4 2xl:mb-4 xl:mb-3 lg:mb-3 md:mb-3 sm:mb-2'>
                                            <Image className='w-sliderImg 4xl:w-sliderImg 3xl:w-3xlsliderImg 2xl:w-2xlsliderImg xl:w-xlsliderImg lg:w-lgsliderImg md:w-mdsliderImg sm:w-smsliderImg' src={Images.sliderThree} alt="Site Logo" />
                                        </div>
                                        <div className='slider-content mb-3'>
                                            <strong className='text-2xl 4xl:text-2xl 3xl:text-xl 2xl:text-xl xl:text-lg lg:text-base md:text-sm sm:text-sm font-semibold mb-2 flex'>Albert-Roi</strong>
                                            <span className='text-base 4xl:text-base 3xl:text-base 2xl:text-base xl:text-base lg:text-sm md:text-sm sm:text-xs font-normal text-bannerStrongColor mb-2'>Written on Mar. 25, 2019</span>
                                            <div className="h-starHeight">
                                                <ul className="p-0 flex items-center me-4">
                                                    <li className="mr-1">
                                                        <FontAwesomeIcon className='text-bannerStrongColor h-starHeight w-starWidth' icon={faStar} />
                                                    </li>
                                                    <li className="mr-1">
                                                        <FontAwesomeIcon className='text-bannerStrongColor h-starHeight w-starWidth' icon={faStar} />
                                                    </li>
                                                    <li className="mr-1">
                                                        <FontAwesomeIcon className='text-bannerStrongColor h-starHeight w-starWidth' icon={faStar} />
                                                    </li>
                                                    <li className="mr-1">
                                                        <FontAwesomeIcon className='text-bannerStrongColor h-starHeight w-starWidth' icon={faStar} />
                                                    </li>
                                                    <li className="mr-1">
                                                        <FontAwesomeIcon className='text-bannerStrongColor h-starHeight w-starWidth' icon={faStar} />
                                                    </li>
                                                </ul>
                                                <span className="text-base 4xl:text-base 3xl:text-base 2xl:text-base xl:text-base lg:text-sm md:text-sm sm:text-xs text-white">Rated 5-Star by Independent Users</span>
                                            </div>
                                        </div>
                                        <p className='text-base 4xl:text-base 3xl:text-base 2xl:text-base xl:text-base lg:text-sm md:text-sm sm:text-xs font-normal mb-3'>
                                            Donec varius lorem risus, a mattis magna aliquet nec. Aliquam in tincidunts Integer ut vestibulum leo, a hendr nec varius
                                            lorem risus, a mattis magna aliquet erit nibis magna aliquh…
                                        </p>
                                        <div className='flex justify-end items-end'>
                                            <div className='bg-black rounded-full  h-arrowBoxHeight w-arrowBoxWidth 4xl:h-arrowBoxHeight 4xl:w-arrowBoxWidth 3xl:h-3xlarrowBoxHeight 3xl:w-3xlarrowBoxWidth 2xl:h-2xlarrowBoxHeight 2xl:w-2xlarrowBoxWidth xl:h-xlarrowBoxHeight xl:w-xlarrowBoxWidth lg:h-lgarrowBoxHeight lg:w-lgarrowBoxWidth md:h-mdarrowBoxHeight md:w-mdarrowBoxWidth sm:h-smarrowBoxHeight sm:w-smarrowBoxWidth  flex justify-center items-center'>
                                                <FontAwesomeIcon className='text-white text-2xl 4xl:text-2xl 3xl:text-xl 2xl:text-xl xl:text-lg lg:text-base md:text-sm sm:text-sm' icon={faArrowRight} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='main-slider bg-white me-7 4xl:me-7 3xl:me-6 2xl:me-6 xl:me-5 lg:me-5 md:me-4 sm:me-3 p-aboutSliderPadding 4xl:p-aboutSliderPadding 3xl:p-3xlaboutSliderPadding 2xl:p-2xlaboutSliderPadding xl:p-xlaboutSliderPadding lg:p-xlgaboutSliderPadding md:p-lggaboutSliderPadding sm:p-smgaboutSliderPadding rounded-aboutSliderBox'>
                                        <div className='slider-img mb-4 4xl:mb-4 3xl:mb-4 2xl:mb-4 xl:mb-3 lg:mb-3 md:mb-3 sm:mb-2'>
                                            <Image className='w-sliderImg 4xl:w-sliderImg 3xl:w-3xlsliderImg 2xl:w-2xlsliderImg xl:w-xlsliderImg lg:w-lgsliderImg md:w-mdsliderImg sm:w-smsliderImg' src={Images.sliderOne} alt="Site Logo" />
                                        </div>
                                        <div className='slider-content mb-3'>
                                            <strong className='text-2xl 4xl:text-2xl 3xl:text-xl 2xl:text-xl xl:text-lg lg:text-base md:text-sm sm:text-sm font-semibold mb-2 flex'>Gabrielle</strong>
                                            <span className='text-base 4xl:text-base 3xl:text-base 2xl:text-base xl:text-base lg:text-sm md:text-sm sm:text-xs font-normal text-bannerStrongColor mb-2'>Written on Mar. 25, 2019</span>
                                            <div className="h-starHeight">
                                                <ul className="p-0 flex items-center me-4">
                                                    <li className="mr-1">
                                                        <FontAwesomeIcon className='text-bannerStrongColor h-starHeight w-starWidth' icon={faStar} />
                                                    </li>
                                                    <li className="mr-1">
                                                        <FontAwesomeIcon className='text-bannerStrongColor h-starHeight w-starWidth' icon={faStar} />
                                                    </li>
                                                    <li className="mr-1">
                                                        <FontAwesomeIcon className='text-bannerStrongColor h-starHeight w-starWidth' icon={faStar} />
                                                    </li>
                                                    <li className="mr-1">
                                                        <FontAwesomeIcon className='text-bannerStrongColor h-starHeight w-starWidth' icon={faStar} />
                                                    </li>
                                                    <li className="mr-1">
                                                        <FontAwesomeIcon className='text-bannerStrongColor h-starHeight w-starWidth' icon={faStar} />
                                                    </li>
                                                </ul>
                                                <span className="text-base 4xl:text-base 3xl:text-base 2xl:text-base xl:text-base lg:text-sm md:text-sm sm:text-xs text-white">Rated 5-Star by Independent Users</span>
                                            </div>
                                        </div>
                                        <p className='text-base 4xl:text-base 3xl:text-base 2xl:text-base xl:text-base lg:text-sm md:text-sm sm:text-xs font-normal mb-3'>
                                            Donec varius lorem risus, a mattis magna aliquet nec. Aliquam in tincidunts Integer ut vestibulum leo, a hendr nec varius
                                            lorem risus, a mattis magna aliquet erit nibis magna aliquh…
                                        </p>
                                        <div className='flex justify-end items-end'>
                                            <div className='bg-black rounded-full  h-arrowBoxHeight w-arrowBoxWidth 4xl:h-arrowBoxHeight 4xl:w-arrowBoxWidth 3xl:h-3xlarrowBoxHeight 3xl:w-3xlarrowBoxWidth 2xl:h-2xlarrowBoxHeight 2xl:w-2xlarrowBoxWidth xl:h-xlarrowBoxHeight xl:w-xlarrowBoxWidth lg:h-lgarrowBoxHeight lg:w-lgarrowBoxWidth md:h-mdarrowBoxHeight md:w-mdarrowBoxWidth sm:h-smarrowBoxHeight sm:w-smarrowBoxWidth  flex justify-center items-center'>
                                                <FontAwesomeIcon className='text-white text-2xl 4xl:text-2xl 3xl:text-xl 2xl:text-xl xl:text-lg lg:text-base md:text-sm sm:text-sm' icon={faArrowRight} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;