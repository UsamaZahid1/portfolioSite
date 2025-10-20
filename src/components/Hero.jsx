import React from 'react'
import image from '../assets/usama.png';

const Hero = () => {
    return (

        <div className=' w-full h-screen relative overflow-hidden flex'>

            {/* left Content */}
            <div className='ml-[50px] mt-[250px] z-10 w-[80%]'>
                <h1 className='leading-18'>
                    <span className='text-[110px] font-[impact] text-white'>I'm a</span>
                    <br />
                    <span className='text-[110px] font-[impact] text-[#BC7C48]'>UI UX Designer</span>
                    <span className='text-[110px] font-[impact] text-white'> &</span>
                    <br />
                    <span className='text-[110px] font-[impact]'>
                        <span className='text-[#BC7C48]'> React js</span>
                        <span className=' text-white'> Developer</span>
                    </span>
                </h1>
                <p className='font-[bricolage] text-white text-[18px]'>Based in Islamabad, Pakistan — Available Worldwide</p>
                <div className='mt-[40px] flex gap-6'>
                    <a className='bg-white px-[48px] py-[18px] rounded-[10px] font-[bricolage2] text-[16px]'>View My Work</a>
                    <a className='border border-white text-white px-[48px] py-[18px] rounded-[10px] font-[bricolage2] '>Download Resume</a>
                </div>
            </div>

            {/* right side image */}
            <div>
                <img className=' object-cover absolute right-0 top-0 h-full w-[60%]' src={image} alt="" />
            </div>

        </div>
    )
}

export default Hero
