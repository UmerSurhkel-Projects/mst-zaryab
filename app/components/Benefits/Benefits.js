import Image from 'next/image'
import {Images} from '../../../public/assets/assets'


function Benefits() {

    return (
        <div className='benefits mb-BenefitsMargin 4xl:mb-BenefitsMargin 3xl:mb-3xlBenefitsMargin 2xl:mb-2xlBenefitsMargin xl:mb-xlBenefitsMargin lg:mb-lgBenefitsMargin md:mb-mdBenefitsMargin sm:mb-smBenefitsMargin'>
            <div className='container'>
                <div className="benefits-content mb-contentBenefits 4xl:mb-contentBenefits 3xl:mb-3xlcontentBenefits 2xl:mb-2xlcontentBenefits xl:mb-xlcontentBenefits lg:mb-lgcontentBenefits md:mb-mdcontentBenefits sm:mb-smcontentBenefits">
                    <h2 className="text-h2Color text-6xl 4xl:text-6xl 3xl:text-5xl 2xl:text-4xl xl:text-4xl lg:text-3xl md:text-3xl sm:text-xl font-semibold text-center mb-6 4xl:mb-6 3xl:mb-5 2xl:mb-5 xl:mb-4 lg:mb-4 md:mb-4 sm:mb-3">Benefits</h2>
                    <p className="text-center text-benefitsParagraphe 4xl:text-benefitsParagraphe 3xl:text-xl 2xl:text-lg xl:text-lg lg:text-base md:text-sm sm:text-sm font-light">Yovamus eget aliquam dui. Integer eu arcu vel arcu suscipit ultrices quis non mauris.</p>
                </div>
                <div className="flex grid grid-cols-4 4xl:grid-cols-4 3xl:grid-cols-4 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-benefitsGaps 4xl:gap-benefitsGaps 3xl:gap-3xlbenefitsGaps 2xl:gap-2xlbenefitsGaps xl:gap-xlbenefitsGaps lg:gap-lgbenefitsGaps md:gap-mdbenefitsGaps sm:gap-smbenefitsGaps">
                    <div className="p-benefitsBox 4xl:p-benefitsBox 3xl:p-3xlbenefitsBox 2xl:p-2xlbenefitsBox xl:p-xlbenefitsBox lg:p-lgbenefitsBox md:p-mdbenefitsBox sm:p-smbenefitsBox shadow-benefitsBox rounded-benefitsBox mb-MbBenefitsBox 4xl:mb-MbBenefitsBox 3xl:mb-5 2xl:mb-5 xl:mb-4 lg:mb-4 md:mb-3 sm:mb-3">
                        <div className="benefits-img flex justify-center mb-BenefitsIcon 4xl:mb-BenefitsIcon 3xl:mb-7 2xl:mb-6 xl:mb-5 lg:mb-5 md:mb-4 sm:mb-4">
                            <Image className='w-benefitsImg 4xl:w-benefitsImg 3xl:w-3xlbenefitsImg 2xl:w-2xlbenefitsImg xl:w-xlbenefitsImg lg:w-lgbenefitsImg md:w-mdbenefitsImg sm:w-smbenefitsImg' src={Images.benefitsImgOne} alt="Site Logo" />
                        </div>
                        <strong className='flex justify-center mb-4 4xl:mb-4 3xl:mb-4 2xl:mb-4 xl:mb-3 lg:mb-3 md:mb-3 sm:mb-2 text-2xl 4xl:text-2xl 3xl:text-3xlbenefits 2xl:text-xl xl:text-lg lg:text-base md:text-base sm:text-sm font-semibold text-h2Color'>Assets</strong>
                        <p className='text-base 4xl:text-base 3xl:text-base 2xl:text-base xl:text-sm lg:text-sm md:text-sm sm:text-xs font-normal text-center text-black'>Duis mauris augue, efficitur eu arcu sit amet, posuere dignissim neque enean enim.</p>
                    </div>
                    <div className="p-benefitsBox 4xl:p-benefitsBox 3xl:p-3xlbenefitsBox 2xl:p-2xlbenefitsBox xl:p-xlbenefitsBox lg:p-lgbenefitsBox md:p-mdbenefitsBox sm:p-smbenefitsBox shadow-benefitsBox rounded-benefitsBox mb-MbBenefitsBox 4xl:mb-MbBenefitsBox 3xl:mb-5 2xl:mb-5 xl:mb-4 lg:mb-4 md:mb-3 sm:mb-3">
                        <div className="benefits-img flex justify-center mb-BenefitsIcon 4xl:mb-BenefitsIcon 3xl:mb-7 2xl:mb-6 xl:mb-5 lg:mb-5 md:mb-4 sm:mb-4">
                            <Image className='w-benefitsImg 4xl:w-benefitsImg 3xl:w-3xlbenefitsImg 2xl:w-2xlbenefitsImg xl:w-xlbenefitsImg lg:w-lgbenefitsImg md:w-mdbenefitsImg sm:w-smbenefitsImg' src={Images.benefitsImgTwo} alt="Site Logo" />
                        </div>
                        <strong className='flex justify-center mb-4 4xl:mb-4 3xl:mb-4 2xl:mb-4 xl:mb-3 lg:mb-3 md:mb-3 sm:mb-2 text-2xl 4xl:text-2xl 3xl:text-3xlbenefits 2xl:text-xl xl:text-lg lg:text-base md:text-base sm:text-sm font-semibold text-h2Color'>Contracts and Licenses</strong>
                        <p className='text-base 4xl:text-base 3xl:text-base 2xl:text-base xl:text-sm lg:text-sm md:text-sm sm:text-xs font-normal text-center text-black'>We provide you with the perfect platform to keep your contracts and licenses in the same</p>
                    </div>
                    <div className="p-benefitsBox 4xl:p-benefitsBox 3xl:p-3xlbenefitsBox 2xl:p-2xlbenefitsBox xl:p-xlbenefitsBox lg:p-lgbenefitsBox md:p-mdbenefitsBox sm:p-smbenefitsBox shadow-benefitsBox rounded-benefitsBox mb-MbBenefitsBox 4xl:mb-MbBenefitsBox 3xl:mb-5 2xl:mb-5 xl:mb-4 lg:mb-4 md:mb-3 sm:mb-3">
                        <div className="benefits-img flex justify-center mb-BenefitsIcon 4xl:mb-BenefitsIcon 3xl:mb-7 2xl:mb-6 xl:mb-5 lg:mb-5 md:mb-4 sm:mb-4">
                            <Image className='w-benefitsImg 4xl:w-benefitsImg 3xl:w-3xlbenefitsImg 2xl:w-2xlbenefitsImg xl:w-xlbenefitsImg lg:w-lgbenefitsImg md:w-mdbenefitsImg sm:w-smbenefitsImg' src={Images.benefitsImgThree} alt="Site Logo" />
                        </div>
                        <strong className='flex justify-center mb-4 4xl:mb-4 3xl:mb-4 2xl:mb-4 xl:mb-3 lg:mb-3 md:mb-3 sm:mb-2 text-2xl 4xl:text-2xl 3xl:text-3xlbenefits 2xl:text-xl xl:text-lg lg:text-base md:text-base sm:text-sm font-semibold text-h2Color'>Reports</strong>
                        <p className='text-base 4xl:text-base 3xl:text-base 2xl:text-base xl:text-sm lg:text-sm md:text-sm sm:text-xs font-normal text-center text-black'>View predefined reports which include statements about your assets to help clean up your workload.</p>
                    </div>
                    <div className="p-benefitsBox 4xl:p-benefitsBox 3xl:p-3xlbenefitsBox 2xl:p-2xlbenefitsBox xl:p-xlbenefitsBox lg:p-lgbenefitsBox md:p-mdbenefitsBox sm:p-smbenefitsBox shadow-benefitsBox rounded-benefitsBox mb-MbBenefitsBox 4xl:mb-MbBenefitsBox 3xl:mb-5 2xl:mb-5 xl:mb-4 lg:mb-4 md:mb-3 sm:mb-3">
                        <div className="benefits-img flex justify-center mb-BenefitsIcon 4xl:mb-BenefitsIcon 3xl:mb-7 2xl:mb-6 xl:mb-5 lg:mb-5 md:mb-4 sm:mb-4">
                            <Image className='w-benefitsImg 4xl:w-benefitsImg 3xl:w-3xlbenefitsImg 2xl:w-2xlbenefitsImg xl:w-xlbenefitsImg lg:w-lgbenefitsImg md:w-mdbenefitsImg sm:w-smbenefitsImg' src={Images.benefitsImgFour} alt="Site Logo" />
                        </div>
                        <strong className='flex justify-center mb-4 4xl:mb-4 3xl:mb-4 2xl:mb-4 xl:mb-3 lg:mb-3 md:mb-3 sm:mb-2 text-2xl 4xl:text-2xl 3xl:text-3xlbenefits 2xl:text-xl xl:text-lg lg:text-base md:text-base sm:text-sm font-semibold text-h2Color'>Security</strong>
                        <p className='text-base 4xl:text-base 3xl:text-base 2xl:text-base xl:text-sm lg:text-sm md:text-sm sm:text-xs font-normal text-center text-black'>SSL Encryption protects data as it transfers from your computer, tablet, or smartphone</p>
                    </div>
                    <div className="p-benefitsBox 4xl:p-benefitsBox 3xl:p-3xlbenefitsBox 2xl:p-2xlbenefitsBox xl:p-xlbenefitsBox lg:p-lgbenefitsBox md:p-mdbenefitsBox sm:p-smbenefitsBox shadow-benefitsBox rounded-benefitsBox mb-MbBenefitsBox 4xl:mb-MbBenefitsBox 3xl:mb-5 2xl:mb-5 xl:mb-4 lg:mb-4 md:mb-3 sm:mb-3">
                        <div className="benefits-img flex justify-center mb-BenefitsIcon 4xl:mb-BenefitsIcon 3xl:mb-7 2xl:mb-6 xl:mb-5 lg:mb-5 md:mb-4 sm:mb-4">
                            <Image className='w-benefitsImg 4xl:w-benefitsImg 3xl:w-3xlbenefitsImg 2xl:w-2xlbenefitsImg xl:w-xlbenefitsImg lg:w-lgbenefitsImg md:w-mdbenefitsImg sm:w-smbenefitsImg' src={Images.benefitsImgFive} alt="Site Logo" />
                        </div>
                        <strong className='flex justify-center mb-4 4xl:mb-4 3xl:mb-4 2xl:mb-4 xl:mb-3 lg:mb-3 md:mb-3 sm:mb-2 text-2xl 4xl:text-2xl 3xl:text-3xlbenefits 2xl:text-xl xl:text-lg lg:text-base md:text-base sm:text-sm font-semibold text-h2Color'>Mobile</strong>
                        <p className='text-base 4xl:text-base 3xl:text-base 2xl:text-base xl:text-sm lg:text-sm md:text-sm sm:text-xs font-normal text-center text-black'>You’re constantly on the move, but that shouldn’t affect your asset management.</p>
                    </div>
                    <div className="p-benefitsBox 4xl:p-benefitsBox 3xl:p-3xlbenefitsBox 2xl:p-2xlbenefitsBox xl:p-xlbenefitsBox lg:p-lgbenefitsBox md:p-mdbenefitsBox sm:p-smbenefitsBox shadow-benefitsBox rounded-benefitsBox mb-MbBenefitsBox 4xl:mb-MbBenefitsBox 3xl:mb-5 2xl:mb-5 xl:mb-4 lg:mb-4 md:mb-3 sm:mb-3">
                        <div className="benefits-img flex justify-center mb-BenefitsIcon 4xl:mb-BenefitsIcon 3xl:mb-7 2xl:mb-6 xl:mb-5 lg:mb-5 md:mb-4 sm:mb-4">
                            <Image className='w-benefitsImg 4xl:w-benefitsImg 3xl:w-3xlbenefitsImg 2xl:w-2xlbenefitsImg xl:w-xlbenefitsImg lg:w-lgbenefitsImg md:w-mdbenefitsImg sm:w-smbenefitsImg' src={Images.benefitsImgSix} alt="Site Logo" />
                        </div>
                        <strong className='flex justify-center mb-4 4xl:mb-4 3xl:mb-4 2xl:mb-4 xl:mb-3 lg:mb-3 md:mb-3 sm:mb-2 text-2xl 4xl:text-2xl 3xl:text-3xlbenefits 2xl:text-xl xl:text-lg lg:text-base md:text-base sm:text-sm font-semibold text-h2Color'>Innovation</strong>
                        <p className='text-base 4xl:text-base 3xl:text-base 2xl:text-base xl:text-sm lg:text-sm md:text-sm sm:text-xs font-normal text-center text-black'>We’re continually evolving to meet and exceed customers’ expectations, advances</p>
                    </div>
                    <div className="p-benefitsBox 4xl:p-benefitsBox 3xl:p-3xlbenefitsBox 2xl:p-2xlbenefitsBox xl:p-xlbenefitsBox lg:p-lgbenefitsBox md:p-mdbenefitsBox sm:p-smbenefitsBox shadow-benefitsBox rounded-benefitsBox mb-MbBenefitsBox 4xl:mb-MbBenefitsBox 3xl:mb-5 2xl:mb-5 xl:mb-4 lg:mb-4 md:mb-3 sm:mb-3">
                        <div className="benefits-img flex justify-center mb-BenefitsIcon 4xl:mb-BenefitsIcon 3xl:mb-7 2xl:mb-6 xl:mb-5 lg:mb-5 md:mb-4 sm:mb-4">
                            <Image className='w-benefitsImg 4xl:w-benefitsImg 3xl:w-3xlbenefitsImg 2xl:w-2xlbenefitsImg xl:w-xlbenefitsImg lg:w-lgbenefitsImg md:w-mdbenefitsImg sm:w-smbenefitsImg' src={Images.benefitsImgSaven} alt="Site Logo" />
                        </div>
                        <strong className='flex justify-center mb-4 4xl:mb-4 3xl:mb-4 2xl:mb-4 xl:mb-3 lg:mb-3 md:mb-3 sm:mb-2 text-2xl 4xl:text-2xl 3xl:text-3xlbenefits 2xl:text-xl xl:text-lg lg:text-base md:text-base sm:text-sm font-semibold text-h2Color'>Users</strong>
                        <p className='text-base 4xl:text-base 3xl:text-base 2xl:text-base xl:text-sm lg:text-sm md:text-sm sm:text-xs font-normal text-center text-black'>Set reminders and alarms for assets that require regular maintenance, assets</p>
                    </div>
                    <div className="p-benefitsBox 4xl:p-benefitsBox 3xl:p-3xlbenefitsBox 2xl:p-2xlbenefitsBox xl:p-xlbenefitsBox lg:p-lgbenefitsBox md:p-mdbenefitsBox sm:p-smbenefitsBox shadow-benefitsBox rounded-benefitsBox mb-MbBenefitsBox 4xl:mb-MbBenefitsBox 3xl:mb-5 2xl:mb-5 xl:mb-4 lg:mb-4 md:mb-3 sm:mb-3">
                        <div className="benefits-img flex justify-center mb-BenefitsIcon 4xl:mb-BenefitsIcon 3xl:mb-7 2xl:mb-6 xl:mb-5 lg:mb-5 md:mb-4 sm:mb-4">
                            <Image className='w-benefitsImg 4xl:w-benefitsImg 3xl:w-3xlbenefitsImg 2xl:w-2xlbenefitsImg xl:w-xlbenefitsImg lg:w-lgbenefitsImg md:w-mdbenefitsImg sm:w-smbenefitsImg' src={Images.benefitsImgEight} alt="Site Logo" />
                        </div>
                        <strong className='flex justify-center mb-4 4xl:mb-4 3xl:mb-4 2xl:mb-4 xl:mb-3 lg:mb-3 md:mb-3 sm:mb-2 text-2xl 4xl:text-2xl 3xl:text-3xlbenefits 2xl:text-xl xl:text-lg lg:text-base md:text-base sm:text-sm font-semibold text-h2Color'>Reserve & Check Out</strong>
                        <p className='text-base 4xl:text-base 3xl:text-base 2xl:text-base xl:text-sm lg:text-sm md:text-sm sm:text-xs font-normal text-center text-black'>Duis mauris augue, efficitur eu arcu sit amet, posuere dignissim neque enean enim.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Benefits;