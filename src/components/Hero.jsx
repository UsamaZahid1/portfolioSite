import React from 'react'
import image from '../assets/usama.webp';
import useCanvasCursor from '../components/Cursor'


const Hero = () => {
    return (
        
        
        <div className="w-full h-screen relative overflow-hidden flex flex-col md:flex-row items-center justify-center md:justify-start px-6 md:px-[50px]">
            {/* Mobile circular image */}
            
            <div className="block md:hidden mt-8">
                <img
                    src={image}
                    alt="Usama portfolio"
                    className="w-[120px] h-[150px] sm:w-[80px] sm:h-[130px] rounded-full object-cover mx-auto border-4 border-[#BC7C48]"
                />
            </div>
            {/* Left Content */}
            <div className="z-10 w-full md:w-[80%] text-center md:text-left mt-[30px] md:mt-[150px]">
                <h1 className="leading-tight md:leading-[1.2]">
                    <span className="text-[50px] sm:text-[60px] md:text-[80px] lg:text-[110px] font-[impact] text-white">I'm a</span>
                    <br />
                    <span className="text-[50px] sm:text-[60px] md:text-[80px] lg:text-[110px] font-[impact] text-[#BC7C48]">UI UX Designer</span>
                    <span className="text-[50px] sm:text-[60px] md:text-[80px] lg:text-[110px] font-[impact] text-white"> &</span>
                    <br />
                    <span className="text-[50px] sm:text-[60px] md:text-[80px] lg:text-[110px] font-[impact]">
                        <span className="text-[#BC7C48]"> React js</span>
                        <span className="text-white"> Developer</span>
                    </span>
                </h1>

                <p className="font-[bricolage] text-white text-[16px] sm:text-[18px] mt-4">
                    Based in Islamabad, Pakistan — Available Worldwide
                </p>

                <div className="mt-[30px] flex flex-col sm:flex-row gap-4 sm:gap-6 items-center sm:items-start justify-center md:justify-start">
                    {/* <a className="bg-white px-[40px] py-[14px] md:px-[48px] md:py-[18px] rounded-[10px] font-[bricolage2] text-[16px] text-[#1a1a1a]">
                        View My Work
                    </a> */}
                    <a
                        href="/UsamaReactResume.pdf"
                        target="_blank"
                        className="border bg-white border-white px-[40px] py-[14px] md:px-[48px] md:py-[18px] rounded-[10px] font-[bricolage2]"
                    >
                        Download Resume
                    </a>
                </div>
            </div>

            {/* Right side image (Desktop only) */}
            <div>
                <img
                    src={image}
                    alt="Usama Portfolio"
                    className="hidden md:block absolute right-0 top-0 h-full w-[55%] object-cover"
                />
            </div>



        </div>
    );
};

export default Hero;
