import Image from 'next/image'
import { Images } from '../../assets/assets'


function Assets() {

    return (
        <div className='assets-rock p-AssetsPadding 4xl:p-AssetsPadding 3xl:p-3xlAssetsPadding 2xl:p-2xlAssetsPadding xl:p-xlAssetsPadding lg:p-lgAssetsPadding md:p-mdAssetsPadding sm:p-smAssetsPadding'>
            <div className='container'>
                <div className='main-assets flex 4xl:flex 3xl:flex 2xl:flex xl:flex lg:flex md:block sm:block items-top'>
                    <div className='assets-img w-2/5 4xl:w-2/5 3xl:w-2/5 xl:w-2/5 lg:w-2/5 md:w-full sm:w-full mb-0 4xl:mb-0 3xl:mb-0 2xl:mb-0 xl:mb-0 lg:mb-0 md:mb-8 sm:mb-6'>
                        <Image className='w-AssetsImg 4xl:w-AssetsImg' src={Images.assetsImg} alt="Site Logo" />
                    </div>
                    <div className='assets-content w-3/5 4xl:w-3/5 3xl:w-3/5 2xl:w-3/5 xl:w-3/5 lg:w-3/5 md:w-full sm:w-full ms-20 4xl:ms-20 3xl:ms-3xl-16 2xl:ms-14 xl:ms-12 lg:ms-8 md:ms-0 sm:ms-0'>
                        <h3 className='text-h3Heading 4xl:text-h3Heading 3xl:text-3xlh3Heading 2xl:text-2xlh3Heading xl:text-xlh3Heading lg:text-lgh3Heading md:text-mdh3Heading sm:text-smh3Heading font-semibold mb-9 4xl:mb-9 3xl:mb-8 2xl:mb-7 xl:mb-6 lg:mb-5 md:mb-5 sm:mb-5 leading-10'>Who is Assets Rack?</h3>
                        <p className='text-2xl 4xl:text-2xl 3xl:text-xl 2xl:text-lg xl:text-base lg:text-sm sm:text-sm md:text-sm font-light mb-10 4xl:mb-10 3xl:mb-9 2xl:mb-8 xl:mb-7 lg:mb-5 md:mb-5 sm:mb-5'>
                            Phasellus mollis tincidunt semper. Curabitur pharetra tortor nisi, ut consectetur risus faucibus in.
                            Donec ac tortor luctus, condimentum neque in, congue diam. Morbi faucibus lorem et nunc consectetur
                            sagittis. Donec in finibus sem, ac sodales quam. Aliquam varius libero vitae dui finibus faucibus.
                        </p>
                        <p className='text-2xl 4xl:text-2xl 3xl:text-xl 2xl:text-lg xl:text-base lg:text-sm md:text-sm sm:text-sm font-light mb-10 4xl:mb-10 3xl:mb-9 2xl:mb-8 xl:mb-7 lg:mb-5 md:mb-5 sm:mb-5'>
                            Mivamus aliquet maximus varius. Morbi in est et tortor vulputate efficitur non placerat metus.
                            Suspendisse lacinia, lacus non vestibulum porta, nisl eros egestas lorem, eget finibus magna arcu at
                            odio. Etiam a blandit neque.
                        </p>
                        <div className=''>
                            <button className='p-buttonpadding 2xl:p-buttonpadding xl:p-xlbuttonpadding lg:p-lgbuttonpadding md:p-mdbuttonpadding sm:p-mdbuttonpadding bg-buttonBackgroud font-semibold text-lg 2xl:text-lg xl:text-base lg:text-sm md:text-xs sm:text-xs rounded me-1.5 border-solid border-2 border-black-700 ease-in-out duration-500 hover:bg-white'>Contact with Experts</button>
                            <button className='p-buttonpadding 2xl:p-buttonpadding xl:p-xlbuttonpadding lg:p-lgbuttonpadding md:p-mdbuttonpadding sm:p-mdbuttonpadding bg-white font-semibold text-lg 2xl:text-lg xl:text-base lg:text-sm md:text-xs sm:text-xs rounded border-solid border-2 border-black-700 ease-in-out duration-500 hover:bg-buttonBackgroud'>Join us Today</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Assets;