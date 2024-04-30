import Image from 'next/image'
import {Images} from '../../../public/assets/assets'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Banner() {

    return (
        <div className='banner bg-BannerBackgroud p-bannerPadding 2xl:p-bannerPadding xl:p-xlbannerPadding lg:p-lgbannerPadding md:p-mdbannerPadding sm:p-smbannerPadding'>
            <div className='container'>
                <div className="flex grid grid-cols-2 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
                    <div className='banner-content relative'>
                        <strong className='text-StrongBanner 2xl:text-StrongBanner xl:text-xlStrongBanner lg:text-lgStrongBanner md:text-mdStrongBanner sm:text-smStrongBanner font-thin text-bannerStrongColor'>OVER 25,000 ACTIVE</strong>
                        <h1 className='font-bold text-H1Banner 2xl:text-H1Banner xl:text-xlH1Banner lg:text-lgH1Banner md:text-mdH1Banner sm:text-smH1Banner text-white leading-h1LineHeight 2xl:leading-h1LineHeight xl:leading-xlh1LineHeight lg:leading-lgh1LineHeight md:leading-mdh1LineHeight sm:leading-smh1LineHeight mb-7 2xl:mb-7 xl:mb-6 lg:mb-5 md:mb-4 sm:mb-5'>ACCOUNTS.</h1>
                        <p className='text-2xl 2xl:text-2xl xl:text-xl lg:text-base md:text-base sm:text-sm font-light text-bannerParagraphe mb-11 2xl:mb-11 xl:mb-10 lg:mb-8 md:mb-7 sm:mb-5'><span className='block'>Manage up to 250 Assets for FREE*.</span> Guaranteed best prices for cloud based asset management !</p>
                        <div className="flex items-center">
                            <ul className="p-0 flex items-center me-4 2xl:me-4 xl:me-4 lg:me-4 md:me-3 sm:me-3">
                                <li className="mr-1">
                                    <FontAwesomeIcon className='text-bannerStrongColor h-starHeight w-starWidth 2xl:h-starHeight 2xl:w-starWidth  xl:h-xlstarHeight xl:w-xlstarWidth lg:h-lgstarHeight lg-w-lgstarWidth md:h-mdstarHeight md:w-mdstarWidth sm:h-smstarHeight sm:w-smstarWidth' icon={faStar} />
                                </li>
                                <li className="mr-1">
                                    <FontAwesomeIcon className='text-bannerStrongColor h-starHeight w-starWidth  2xl:h-starHeight 2xl:w-starWidth xl:h-xlstarHeight xl:w-xlstarWidth lg:h-lgstarHeight lg-w-lgstarWidth md:h-mdstarHeight md:w-mdstarWidth sm:h-smstarHeight sm:w-smstarWidth' icon={faStar} />
                                </li>
                                <li className="mr-1">
                                    <FontAwesomeIcon className='text-bannerStrongColor h-starHeight w-starWidth  2xl:h-starHeight 2xl:w-starWidth xl:h-xlstarHeight xl:w-xlstarWidth lg:h-lgstarHeight lg-w-lgstarWidth md:h-mdstarHeight md:w-mdstarWidth sm:h-smstarHeight sm:w-smstarWidth' icon={faStar} />
                                </li>
                                <li className="mr-1">
                                    <FontAwesomeIcon className='text-bannerStrongColor h-starHeight w-starWidth  2xl:h-starHeight 2xl:w-starWidth xl:h-xlstarHeight xl:w-xlstarWidth lg:h-lgstarHeight lg-w-lgstarWidth md:h-mdstarHeight md:w-mdstarWidth sm:h-smstarHeight sm:w-smstarWidth' icon={faStar} />
                                </li>
                                <li className="mr-1">
                                    <FontAwesomeIcon className='text-bannerStrongColor h-starHeight w-starWidth  2xl:h-starHeight 2xl:w-starWidth xl:h-xlstarHeight xl:w-xlstarWidth lg:h-lgstarHeight lg-w-lgstarWidth md:h-mdstarHeight md:w-mdstarWidth sm:h-smstarHeight sm:w-smstarWidth' icon={faStar} />
                                </li>
                            </ul>
                            <span className="text-base 2xl:text-base xl:text-base lg:text-sm md:text-sm sm:text-xs text-white">Rated 5-Star by Independent Users</span>
                        </div>
                        <div className="banner-img absolute -top-12 2xl:-top-12 xl:-top-11 -right-12 2xl:-right-12 xl:-right-40 lg:-top-8 lg:-right-28 md:-top-10 md:right-32 sm:-top-9 sm:right-2">
                            <Image className='object-contain h-bannerAfter w-bannerAfter 2xl:h-bannerAfter 2xl:w-bannerAfter xl:h-xlbannerAfter xl:w-xlbannerAfter lg:h-lgbannerAfter lg:w-xlbannerAfter md:h-mdbannerAfter md:w-mdbannerAfter sm:h-smbannerAfter sm:w-smbannerAfter' src={Images.bannerAfter} alt="Site Logo" />
                        </div>
                    </div>
                    {/* <div className="banner-img">
                        <Image className='' src={Images.siteLogo} alt="Site Logo" />
                    </div> */}
                </div>
            </div>
        </div>
    );

}

export default Banner;