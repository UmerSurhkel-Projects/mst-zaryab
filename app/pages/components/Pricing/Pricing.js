'use client'


function Pricing() {

    return (
        <div className='pricing pt-pricingPaddingTop 4xl:pt-pricingPaddingTop  3xl:pt-3xlpricingPaddingTop 2xl:pt-2xlpricingPaddingTop xl:pt-xlpricingPaddingTop lg:pt-lgpricingPaddingTop md:pt-mdpricingPaddingTop sm:pt-smpricingPaddingTop mb-pricingMargin 4xl:mb-pricingMargin 3xl:mb-3xlpricingMargin 2xl:mb-2xlpricingMargin xl:mb-xlpricingMargin lg:mb-lgpricingMargin md:mb-mdpricingMargin sm:mb-smpricingMargin'>
            <div className='container'>
                <div className="pricing-content mb-12 4xl:mb-12 3xl:mb-11 2xl:mb-10 xl:mb-8 lg:mb-8 md:mb-6 sm:mb-5">
                    <h2 className="text-center text-6xl 4xl:text-6xl 3xl:text-5xl 2xl:text-4xl xl:text-4xl lg:text-3xl md:text-3xl sm:text-xl font-semibold mb-6 4xl:mb-6 3xl:mb-5 2xl:mb-5 xl:mb-4 lg:mb-4 md:mb-4 sm:mb-3 text-white">Pricing Comparison</h2>
                    <p className="text-benefitsParagraphe 4xl:text-benefitsParagraphe 3xl:text-xl 2xl:text-lg xl:text-lg lg:text-base md:text-sm sm:text-sm font-light text-center mb-6 4xl:mb-6 3xl:mb-5 2xl:mb-5 xl:mb-4 lg:mb-4 md:mb-4 sm:mb-3 text-white">
                        AssetsRack is the first fully functional asset management program, completely free for first 300 assets.
                    </p>
                    <p className="text-benefitsParagraphe 4xl:text-benefitsParagraphe 3xl:text-xl 2xl:text-lg xl:text-lg lg:text-base md:text-sm sm:text-sm font-light text-center text-white max-w-pricingParagraphe mx-auto">
                        The world’s biggest asset tag retailer, AssetsRack means no more paying for other websites’ expensive services. With AssetsRack, you’ll get
                        quality, flexibility, and security.
                    </p>
                </div>
                <div className='flex grid grid-cols-3 4xl:grid-cols-3 3xl:grid-cols-3 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 items-center gap-9 4xl:gap-9 3xl:gap-8 2xl:gap-7 xl:gap-7 lg:gap-6 md:gap-5 sm:gap-4'>
                    <div className="pricing-box bg-white rounded-pricingBox p-pricingBox 4xl:p-pricingBox 3xl:p-3xlpricingBox 2xl:p-2xlpricingBox xl:p-xlpricingBox lg:p-lgpricingBox md:p-mdpricingBox sm:p-smpricingBox">
                        <div className="mb-12 4xl:mb-12 3xl:mb-10 xl:mb-8 lg:mb-7 md:mb-6 sm:mb-4">
                            <h3 className="text-h3Heading 4xl:text-h3Heading 3xl:text-3xlh3Heading 2xl:text-2xlh3Heading xl:text-xlh3Heading lg:text-lgh3Heading md:text-mdh3Heading sm:text-smh3Heading font-semibold mb-8 2xl:mb-8 xl:mb-7 lg:mb-6 md:mb-5 sm:mb-4 leading-10 text-center">Competitor #1</h3>
                            <p className="text-center text-benefitsParagraphe 4xl:text-benefitsParagraphe 3xl:text-xl 2xl:text-lg xl:text-lg lg:text-base md:text-sm sm:text-sm font-light max-w-pricingParagrapheBox mx-auto min-h-pricingParagraphe">Smartphone Compatible ($15 per device per month) in addition to yearly price</p>
                        </div>
                        <div className="bg-pricingBoxColor rounded p-pricingBoxSmall">
                            <strong className="mb-5 2xl:mb-4 xl:mb-4 lg:mb-4 md:mb-3 sm:mb-3 flex justify-center text-2xl 4xl:text-xl 3xl:text-xl 2xl:text-lg xl:text-lg lg:text-base md:text-sm sm:text-sm font-bold">Subscription</strong>
                            <div className="data bg-white flex grid grid-cols-2 p-6  mb-6">
                                <div className="">
                                    <strong className="block text-center text-pricingStrong 4xl:text-pricingStrong 3xl:text-3xlpricingStrong 2xl:text-2xlpricingStrong xl:text-xlpricingStrong lg:text-lgpricingStrong md:text-mdpricingStrong sm:text-smpricingStrong font-medium mb-10 4xl:mb-10 3xl:mb-9 2xl:mb-8 xl:mb-8 lg:mb-7 md:mb-6 sm:mb-4">5</strong>
                                    <span className="block text-center text-xl 4xl:text-xl 3xl:text-xl 2xl:text-lg xl:text-lg lg:text-base md:text-sm sm:text-sm font-normal">Users</span>
                                </div>
                                <div className="">
                                    <strong className="block text-center text-pricingStrong 4xl:text-pricingStrong 3xl:text-3xlpricingStrong 2xl:text-2xlpricingStrong xl:text-xlpricingStrong lg:text-lgpricingStrong md:text-mdpricingStrong sm:text-smpricingStrong font-medium mb-10 4xl:mb-10 3xl:mb-9 2xl:mb-8 xl:mb-8 lg:mb-7 md:mb-6 sm:mb-4">10 GB</strong>
                                    <span className="block text-center text-xl 4xl:text-xl 3xl:text-xl 2xl:text-lg xl:text-lg lg:text-base md:text-sm sm:text-sm font-normal">Cloud Storage</span>
                                </div>
                            </div>
                            <div className="flex items-center justify-center">
                                <strong className="block text-center text-pricingStrong 4xl:text-pricingStrong 3xl:text-3xlpricingStrong 2xl:text-2xlpricingStrong xl:text-xlpricingStrong lg:text-lgpricingStrong md:text-mdpricingStrong sm:text-smpricingStrong font-semibold mr-3">$8,700</strong>
                                <span className="block text-center text-xl 4xl:text-xl 3xl:text-xl 2xl:text-lg xl:text-lg lg:text-base md:text-sm sm:text-sm font-semibold">/ per Year</span>
                            </div>
                        </div>
                    </div>
                    <div className="pricing-box bg-white rounded-pricingBox p-pricingBox 4xl:p-pricingBox 3xl:p-3xlpricingBox 2xl:p-2xlpricingBox xl:p-xlpricingBox lg:p-lgpricingBox md:p-mdpricingBox sm:p-smpricingBox">
                        <div className="mb-12 4xl:mb-12 3xl:mb-10 xl:mb-8 lg:mb-7 md:mb-6 sm:mb-4">
                            <h3 className="text-h3Heading 4xl:text-h3Heading 3xl:text-3xlh3Heading 2xl:text-2xlh3Heading xl:text-xlh3Heading lg:text-lgh3Heading md:text-mdh3Heading sm:text-smh3Heading font-semibold mb-8 2xl:mb-8 xl:mb-7 lg:mb-6 md:mb-5 sm:mb-4 leading-10 text-center">Competitor #2</h3>
                            <p className="text-center text-benefitsParagraphe 4xl:text-benefitsParagraphe 3xl:text-xl 2xl:text-lg xl:text-lg lg:text-base md:text-sm sm:text-sm font-light max-w-pricingParagrapheBox mx-auto min-h-pricingParagraphe">Smartphone Compatible (No Extra Charges)</p>
                        </div>
                        <div className="bg-pricingBoxColor rounded p-pricingBoxSmall">
                            <strong className="mb-5 2xl:mb-4 xl:mb-4 lg:mb-4 md:mb-3 sm:mb-3 flex justify-center text-2xl 4xl:text-xl 3xl:text-xl 2xl:text-lg xl:text-lg lg:text-base md:text-sm sm:text-sm font-bold">Subscription</strong>
                            <div className="data bg-white flex grid grid-cols-2 p-6  mb-6">
                                <div className="">
                                    <strong className="block text-center text-pricingStrong 4xl:text-pricingStrong 3xl:text-3xlpricingStrong 2xl:text-2xlpricingStrong xl:text-xlpricingStrong lg:text-lgpricingStrong md:text-mdpricingStrong sm:text-smpricingStrong font-medium mb-10 4xl:mb-10 3xl:mb-9 2xl:mb-8 xl:mb-8 lg:mb-7 md:mb-6 sm:mb-4">Unlimited</strong>
                                    <span className="block text-center text-xl 4xl:text-xl 3xl:text-xl 2xl:text-lg xl:text-lg lg:text-base md:text-sm sm:text-sm font-normal">Users</span>
                                </div>
                                <div className="">
                                    <strong className="block text-center text-pricingStrong 4xl:text-pricingStrong 3xl:text-3xlpricingStrong 2xl:text-2xlpricingStrong xl:text-xlpricingStrong lg:text-lgpricingStrong md:text-mdpricingStrong sm:text-smpricingStrong font-medium mb-10 4xl:mb-10 3xl:mb-9 2xl:mb-8 xl:mb-8 lg:mb-7 md:mb-6 sm:mb-4">Unlimited</strong>
                                    <span className="block text-center text-xl 4xl:text-xl 3xl:text-xl 2xl:text-lg xl:text-lg lg:text-base md:text-sm sm:text-sm font-normal">Cloud Storage</span>
                                </div>
                            </div>
                            <div className="flex items-center justify-center">
                                <strong className="block text-center text-pricingStrong 4xl:text-pricingStrong 3xl:text-3xlpricingStrong 2xl:text-2xlpricingStrong xl:text-xlpricingStrong lg:text-lgpricingStrong md:text-mdpricingStrong sm:text-smpricingStrong font-semibold mr-3">$8,700</strong>
                                <span className="block text-center text-xl 4xl:text-xl 3xl:text-xl 2xl:text-lg xl:text-lg lg:text-base md:text-sm sm:text-sm font-semibold">/ per Year</span>
                            </div>
                        </div>
                    </div>
                    <div className="pricing-box bg-white rounded-pricingBox p-pricingBox 4xl:p-pricingBox 3xl:p-3xlpricingBox 2xl:p-2xlpricingBox xl:p-xlpricingBox lg:p-lgpricingBox md:p-mdpricingBox sm:p-smpricingBox">
                        <div className="mb-12 4xl:mb-12 3xl:mb-10 xl:mb-8 lg:mb-7 md:mb-6 sm:mb-4">
                            <h3 className="text-h3Heading 4xl:text-h3Heading 3xl:text-3xlh3Heading 2xl:text-2xlh3Heading xl:text-xlh3Heading lg:text-lgh3Heading md:text-mdh3Heading sm:text-smh3Heading font-semibold mb-8 2xl:mb-8 xl:mb-7 lg:mb-6 md:mb-5 sm:mb-4 leading-10 text-center">Competitor #3</h3>
                            <p className="text-center text-benefitsParagraphe 4xl:text-benefitsParagraphe 3xl:text-xl 2xl:text-lg xl:text-lg lg:text-base md:text-sm sm:text-sm font-light max-w-pricingParagrapheBox mx-auto min-h-pricingParagraphe">Smartphone Compatible ($295/device) in addition to yearly price</p>
                        </div>
                        <div className="bg-pricingBoxColor rounded p-pricingBoxSmall">
                            <strong className="mb-5 2xl:mb-4 xl:mb-4 lg:mb-4 md:mb-3 sm:mb-3 flex justify-center text-2xl 4xl:text-xl 3xl:text-xl 2xl:text-lg xl:text-lg lg:text-base md:text-sm sm:text-sm font-bold">Subscription</strong>
                            <div className="data bg-white flex grid grid-cols-2 p-6  mb-6">
                                <div className="">
                                    <strong className="block text-center text-pricingStrong 4xl:text-pricingStrong 3xl:text-3xlpricingStrong 2xl:text-2xlpricingStrong xl:text-xlpricingStrong lg:text-lgpricingStrong md:text-mdpricingStrong sm:text-smpricingStrong font-medium mb-10 4xl:mb-10 3xl:mb-9 2xl:mb-8 xl:mb-8 lg:mb-7 md:mb-6 sm:mb-4">5</strong>
                                    <span className="block text-center text-xl 4xl:text-xl 3xl:text-xl 2xl:text-lg xl:text-lg lg:text-base md:text-sm sm:text-sm font-normal">Users</span>
                                </div>
                                <div className="">
                                    <strong className="block text-center text-pricingStrong 4xl:text-pricingStrong 3xl:text-3xlpricingStrong 2xl:text-2xlpricingStrong xl:text-xlpricingStrong lg:text-lgpricingStrong md:text-mdpricingStrong sm:text-smpricingStrong font-medium mb-10 4xl:mb-10 3xl:mb-9 2xl:mb-8 xl:mb-8 lg:mb-7 md:mb-6 sm:mb-4">5GB</strong>
                                    <span className="block text-center text-xl 4xl:text-xl 3xl:text-xl 2xl:text-lg xl:text-lg lg:text-base md:text-sm sm:text-sm font-normal">Cloud Storage</span>
                                </div>
                            </div>
                            <div className="flex items-center justify-center">
                                <strong className="block text-center text-pricingStrong 4xl:text-pricingStrong 3xl:text-3xlpricingStrong 2xl:text-2xlpricingStrong xl:text-xlpricingStrong lg:text-lgpricingStrong md:text-mdpricingStrong sm:text-smpricingStrong font-semibold mr-3">$900</strong>
                                <span className="block text-center text-xl 4xl:text-xl 3xl:text-xl 2xl:text-lg xl:text-lg lg:text-base md:text-sm sm:text-sm font-semibold">/ per Year</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;