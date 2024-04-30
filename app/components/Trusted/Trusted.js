import Image from 'next/image'
import {Images} from '../../../public/assets/assets'


function Trusted() {

    return (
        <div className='trusted p-trustedPadding 4xl:p-trustedPadding 3xl:p-3xltrustedPadding 2xl:p-2xltrustedPadding xl:p-xltrustedPadding lg:p-lgtrustedPadding md:p-mdtrustedPadding sm:p-smtrustedPadding relative shadow-trustedShadow'>
            <div className='container'>
                <div className='heading-trusted'>
                    <span className='flex text-trustedspan 4xl:text-trustedspan 3xl:text-xl 2xl:text-lg xl:text-base lg:text-base md:text-sm sm:text-xs  font-light'>Who endorse our work</span>
                    <div className='flex items-center 4xl:flex 3xl:flex 2xl:flex xl:flex lg:flex md:block sm:block'>
                        <h2 className='text-6xl 4xl:text-6xl 3xl:text-5xl 2xl:text-4xl xl:text-4xl lg:text-3xl md:text-3xl sm:text-xl font-semibold mb-0 4xl:mb-0 3xl:mb-0 2xl:mb-0 xl:mb-0 lg:mb-0 md:mb-4 sm:mb-3'>Trusted By:</h2>
                        <ul className='p-0 trusted-img flex justify-between 4xl:justify-between 3xl:justify-between 2xl:justify-between xl:justify-between lg:justify-between md:justify-start sm:justify-start items-center ms-trustedHeader 4xl:ms-trustedHeader 3xl:ms-3xltrustedHeader 2xl:ms:2xltrustedHeader xl:ms-xltrustedHeader lg:ms-lgtrustedHeader md:ms-0 sm:ms-0'>
                            <li className='mr-11 4xl:mr-11 3xl:mr-10 2xl:mr-8 xl:mr-7 lg:mr-6 md:mr-5 sm:mr-4'>
                                <Image className='w-trustedImg 4xl-w-trustedImg 3xl:w-3xltrustedImg 2xl:w-2xltrustedImg xl:w-xltrustedImg lg:w-lgtrustedImg md:w-mdtrustedImg sm:w-smtrustedImg' src={Images.TrustedImgOne} alt="Site Logo" />
                            </li>
                            <li className='mr-11 4xl:mr-11 3xl:mr-10 2xl:mr-8 xl:mr-7 lg:mr-6 md:mr-5 sm:mr-4'>
                                <Image className='w-trustedImg 4xl-w-trustedImg 3xl:w-3xltrustedImg 2xl:w-2xltrustedImg xl:w-xltrustedImg lg:w-lgtrustedImg md:w-mdtrustedImg sm:w-smtrustedImg' src={Images.TrustedImgOne} alt="Site Logo" />
                            </li>
                            <li className='mr-11 4xl:mr-11 3xl:mr-10 2xl:mr-8 xl:mr-7 lg:mr-6 md:mr-5 sm:mr-4'>
                                <Image className='w-trustedImg 4xl-w-trustedImg 3xl:w-3xltrustedImg 2xl:w-2xltrustedImg xl:w-xltrustedImg lg:w-lgtrustedImg md:w-mdtrustedImg sm:w-smtrustedImg' src={Images.TrustedImgOne} alt="Site Logo" />
                            </li>
                            <li className='mr-11 4xl:mr-11 3xl:mr-10 2xl:mr-8 xl:mr-7 lg:mr-6 md:mr-5 sm:mr-4'>
                                <Image className='w-trustedImg 4xl-w-trustedImg 3xl:w-3xltrustedImg 2xl:w-2xltrustedImg xl:w-xltrustedImg lg:w-lgtrustedImg md:w-mdtrustedImg sm:w-smtrustedImg' src={Images.TrustedImgOne} alt="Site Logo" />
                            </li>
                            <li className=''>
                                <Image className='w-trustedImg 4xl-w-trustedImg 3xl:w-3xltrustedImg 2xl:w-2xltrustedImg xl:w-xltrustedImg lg:w-lgtrustedImg md:w-mdtrustedImg sm:w-smtrustedImg' src={Images.TrustedImgOne} alt="Site Logo" />
                            </li>
                        </ul>
                    </div>
                    <div className='trusted-after absolute top-0 right-0'>
                        <Image className='w-trustedAfter 4xl:w-trustedAfter 3xl:w-3xltrustedAfter 2xl:w-2xltrustedAfter xl:w-xltrustedAfter lg:w-lgtrustedAfter md:w-mdtrustedAfter sm:w-smtrustedAfter' src={Images.TrustedImgAfter} alt="Site Logo" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Trusted;