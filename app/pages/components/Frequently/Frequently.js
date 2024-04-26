'use client'
import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from 'flowbite-react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Frequently() {
    return (
        <div className='frequently pt-frequentlyPadding 4xl:pt-frequentlyPadding 3xl:pt-3xlfrequentlyPadding 2xl:pt-2xlfrequentlyPadding xl:pt-xlfrequentlyPadding lg:pt-lgfrequentlyPadding md:pt-mdfrequentlyPadding sm:pt-smfrequentlyPadding mb-frequentlyMargin 4xl:mb-frequentlyMargin  3xl:mb-3xlfrequentlyMargin 2xl:mb-2xlfrequentlyMargin xl:mb-xlfrequentlyMargin lg:mb-lgfrequentlyMargin md:mb-mdfrequentlyMargin sm:mb-smfrequentlyMargin '>
            <div className='container'>
                <div className="frequently-heading flex 4xl:flex 3xl:flex 2xl:flex xl:flex lg:block md:block sm:block gap-[85px] 4xl:gap-[85px] 3xl:gap-[80px] 2xl:gap-[75px] xl:gap-[50px] lg:gap-[0px] md:gap-[0px] sm:gap-[0px] ">
                    <div className='heading-according w-3/5 4xl:w-3/5 3xl:w-3/5 2xl:w-3/5 xl:w-3/5 lg:w-full md:w-full sm:w-full'>
                        <h4 className='text-plansH2 4xl:text-plansH2 3xl:text-3xlplansH2 2xl:text-2xlplansH2 xl:text-xlplansH2 lg:text-lgplansH2 md:text-mdplansH2 sm:text-smplansH2 font-semibold mb-frequentlyHeadingMargin 4xl:mb-frequentlyHeadingMargin 3xl:mb-3xlfrequentlyHeadingMargin 2xl:mb-2xlfrequentlyHeadingMargin xl:mb-xlfrequentlyHeadingMargin lg:mb-lgfrequentlyHeadingMargin md:mb-mdfrequentlyHeadingMargin sm:mb-smfrequentlyHeadingMargin'>Frequently Asked Questions</h4>
                        <Accordion className='border-none'>
                            <AccordionPanel>
                                <div className='mb-3'>
                                    <AccordionTitle className='text-base 4xl:text-base 3xl:text-base 2xl:text-base xl:text-sm lg:text-sm md:text-sm sm:text-xs font-normal mb-6 4xl:mb-6 3xl:mb-5 2xl:mb-5 xl:mb-4 lg:mb-4 md:mb-3 sm:mb-3 p-5 4xl:p-5 3xl:p-4 2xl:p-4 xl:p-4 lg:p-3 md:p-3 sm:p-3 rounded border-solid border border-black-700'>Is AssetTiger really free?</AccordionTitle>
                                    <AccordionContent >
                                        <p className='text-base 4xl:text-base 3xl:text-base 2xl:text-base xl:text-sm lg:text-sm md:text-sm sm:text-xs font-normal p-5 4xl:p-5 3xl:p-4 2xl:p-4 xl:p-4 lg:p-3 md:p-3 sm:p-3'>
                                            Staying on top of your assets saves you time and money. It’s harder to lose or misplace assets when your system tracks every
                                            asset’s history and exact location. There’s a huge opportunity cost to finding your lost assets. Without a system in place,
                                            you lose productivity, too.
                                        </p>
                                    </AccordionContent>
                                </div>
                            </AccordionPanel>
                            <AccordionPanel>
                                <div className='mb-3'>
                                    <AccordionTitle className='text-base 4xl:text-base 3xl:text-base 2xl:text-base xl:text-sm lg:text-sm md:text-sm sm:text-xs font-normal mb-6 4xl:mb-6 3xl:mb-5 2xl:mb-5 xl:mb-4 lg:mb-4 md:mb-3 sm:mb-3 p-5 4xl:p-5 3xl:p-4 2xl:p-4 xl:p-4 lg:p-3 md:p-3 sm:p-3 rounded border-solid border border-black-700'>Why should I track my assets?</AccordionTitle>
                                    <AccordionContent>
                                        <p className='text-base 4xl:text-base 3xl:text-base 2xl:text-base xl:text-sm lg:text-sm md:text-sm sm:text-xs font-normal p-5 4xl:p-5 3xl:p-4 2xl:p-4 xl:p-4 lg:p-3 md:p-3 sm:p-3'>
                                            Staying on top of your assets saves you time and money. It’s harder to lose or misplace assets when your system tracks every
                                            asset’s history and exact location. There’s a huge opportunity cost to finding your lost assets. Without a system in place,
                                            you lose productivity, too.
                                        </p>
                                    </AccordionContent>
                                </div>
                            </AccordionPanel>
                            <AccordionPanel>
                                <div className='mb-3'>
                                    <AccordionTitle className='text-base 4xl:text-base 3xl:text-base 2xl:text-base xl:text-sm lg:text-sm md:text-sm sm:text-xs font-normal mb-6 4xl:mb-6 3xl:mb-5 2xl:mb-5 xl:mb-4 lg:mb-4 md:mb-3 sm:mb-3 p-5 4xl:p-5 3xl:p-4 2xl:p-4 xl:p-4 lg:p-3 md:p-3 sm:p-3 rounded border-solid border border-black-700'>What are the essential parts of a first-rate asset management program?</AccordionTitle>
                                    <AccordionContent>
                                        <p className='text-base 4xl:text-base 3xl:text-base 2xl:text-base xl:text-sm lg:text-sm md:text-sm sm:text-xs font-normal p-5 4xl:p-5 3xl:p-4 2xl:p-4 xl:p-4 lg:p-3 md:p-3 sm:p-3'>
                                            Staying on top of your assets saves you time and money. It’s harder to lose or misplace assets when your system tracks every
                                            asset’s history and exact location. There’s a huge opportunity cost to finding your lost assets. Without a system in place,
                                            you lose productivity, too.
                                        </p>
                                    </AccordionContent>
                                </div>
                            </AccordionPanel>
                            <AccordionPanel>
                                <div className='mb-3'>
                                    <AccordionTitle className='text-base 4xl:text-base 3xl:text-base 2xl:text-base xl:text-sm lg:text-sm md:text-sm sm:text-xs font-normal mb-6 4xl:mb-6 3xl:mb-5 2xl:mb-5 xl:mb-4 lg:mb-4 md:mb-3 sm:mb-3 p-5 4xl:p-5 3xl:p-4 2xl:p-4 xl:p-4 lg:p-3 md:p-3 sm:p-3 rounded border-solid border border-black-700'>What is the purpose of the mobile application?</AccordionTitle>
                                    <AccordionContent>
                                        <p className='text-base 4xl:text-base 3xl:text-base 2xl:text-base xl:text-sm lg:text-sm md:text-sm sm:text-xs font-normal p-5 4xl:p-5 3xl:p-4 2xl:p-4 xl:p-4 lg:p-3 md:p-3 sm:p-3'>
                                            Staying on top of your assets saves you time and money. It’s harder to lose or misplace assets when your system tracks every
                                            asset’s history and exact location. There’s a huge opportunity cost to finding your lost assets. Without a system in place,
                                            you lose productivity, too.
                                        </p>
                                    </AccordionContent>
                                </div>
                            </AccordionPanel>
                            <AccordionPanel>
                                <div className='mb-3'>
                                    <AccordionTitle className='text-base 4xl:text-base 3xl:text-base 2xl:text-base xl:text-sm lg:text-sm md:text-sm sm:text-xs font-normal mb-6 4xl:mb-6 3xl:mb-5 2xl:mb-5 xl:mb-4 lg:mb-4 md:mb-3 sm:mb-3 p-5 4xl:p-5 3xl:p-4 2xl:p-4 xl:p-4 lg:p-3 md:p-3 sm:p-3 rounded border-solid border border-black-700'>Xolor sit amet, consect em dolor sit amet ?.</AccordionTitle>
                                    <AccordionContent>
                                        <p className='text-base 4xl:text-base 3xl:text-base 2xl:text-base xl:text-sm lg:text-sm md:text-sm sm:text-xs font-normal p-5 4xl:p-5 3xl:p-4 2xl:p-4 xl:p-4 lg:p-3 md:p-3 sm:p-3'>
                                            Staying on top of your assets saves you time and money. It’s harder to lose or misplace assets when your system tracks every
                                            asset’s history and exact location. There’s a huge opportunity cost to finding your lost assets. Without a system in place,
                                            you lose productivity, too.
                                        </p>
                                    </AccordionContent>
                                </div>
                            </AccordionPanel>
                            <AccordionPanel>
                                <div className='mb-3'>
                                    <AccordionTitle className='text-base 4xl:text-base 3xl:text-base 2xl:text-base xl:text-sm lg:text-sm md:text-sm sm:text-xs font-normal mb-6 4xl:mb-6 3xl:mb-5 2xl:mb-5 xl:mb-4 lg:mb-4 md:mb-3 sm:mb-3 p-5 4xl:p-5 3xl:p-4 2xl:p-4 xl:p-4 lg:p-3 md:p-3 sm:p-3 rounded border-solid border border-black-700'>Norem ipsum dolor sit amet, consect emv ?.</AccordionTitle>
                                    <AccordionContent>
                                        <p className='text-base 4xl:text-base 3xl:text-base 2xl:text-base xl:text-sm lg:text-sm md:text-sm sm:text-xs font-normal p-5 4xl:p-5 3xl:p-4 2xl:p-4 xl:p-4 lg:p-3 md:p-3 sm:p-3'>
                                            Staying on top of your assets saves you time and money. It’s harder to lose or misplace assets when your system tracks every
                                            asset’s history and exact location. There’s a huge opportunity cost to finding your lost assets. Without a system in place,
                                            you lose productivity, too.
                                        </p>
                                    </AccordionContent>
                                </div>
                            </AccordionPanel>
                        </Accordion>
                    </div>
                    <div className='form pt-formPaading 4xl:pt-formPaading 3xl:pt-3xlformPaading 2xl:pt-2xlformPaading xl:pt-xlformPaading lg:pt-lgformPaading md:pt-mdformPaading sm:pt-smformPaading w-2/5 4xl:w-2/5 3xl:w-2/5 2xl:w-2/5 xl:w-2/5 lg:w-full md:w-full sm:w-full'>
                        <div className='shadow-fromBox rounded-formBox p-fromBox 4xl:p-fromBox 3xl:p-3xlfromBox 2xl:p-2xlfromBox xl:p-xlfromBox lg:p-p-lgfromBox md:p-mdfromBox sm:p-smfromBox'>
                            <h5 className='text-2xl 4xl:text-2xl 3xl:text-2xl 2xl:text-xl xl:text-xl lg:text-lg md:text-base sm:text-base font-semibold mb-10 4xl:mb-10 3xl:mb-10 2xl:mb-9 xl:mb-8 lg:mb-7 md:mb-6 sm:mb-6'>Contact Us</h5>
                            <form className="w-full">
                                <div className="w-full p-5 4xl:p-5 3xl:p-5 2xl:p-5 xl:p-4 lg:p-4 md:p-3 sm:p-3  rounded border-solid border-2 border-black-700 mb-4 flex items-center bg-[#FAFAFA]">
                                    <FontAwesomeIcon className='me-4 h-5 w-5' icon={faUser} />
                                    <input className='p-0 bg-transparent w-full text-base 4xl:text-base 3xl:text-base 2xl:text-base xl:text-sm lg:text-sm md:text-sm sm:text-xs font-normal outline-0' id="email4" type="email" placeholder="Your name" required />
                                </div>
                                <div className="w-full p-5 4xl:p-5 3xl:p-5 2xl:p-5 xl:p-4 lg:p-4 md:p-3 sm:p-3 rounded border-solid border-2 border-black-700 mb-4 flex items-center bg-[#FAFAFA]">
                                    <FontAwesomeIcon className='me-4 h-5 w-5' icon={faEnvelope} />
                                    <input className='p-0 bg-transparent w-full text-base 4xl:text-base 3xl:text-base 2xl:text-base xl:text-sm lg:text-sm md:text-sm sm:text-xs outline-0 font-normal' id="email4" type="email" placeholder="Your email" required />
                                </div>
                                <div className="w-full p-5 4xl:p-5 3xl:p-5 2xl:p-5 xl:p-4 lg:p-4 md:p-3 sm:p-3 rounded border-solid border-2 border-black-700 mb-4 bg-[#FAFAFA]">
                                    <textarea className='p-0 bg-transparent w-full outline-0 text-base 4xl:text-base 3xl:text-base 2xl:text-base xl:text-sm lg:text-sm md:text-sm sm:text-xs font-normal resize-none' id="comment" placeholder="Your message" required rows={4} />
                                </div>
                                <div className='submit-button flex justify-end items-center mb-7 4xl:mb-7 3xl:mb-6 2xl:mb-6 xl:mb-5 lg:mb-4 md:mb-4 sm:mb-4'>
                                    <button className='p-buttonpadding 2xl:p-buttonpadding xl:p-xlbuttonpadding lg:p-lgbuttonpadding md:p-mdbuttonpadding sm:p-mdbuttonpadding bg-buttonBackgroud font-semibold text-lg 2xl:text-lg xl:text-base lg:text-sm md:text-xs sm:text-xs rounded border-solid border-2 border-black-700 ease-in-out duration-500 hover:bg-white'>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Frequently;