import React from 'react'

const Header = ({ scrollTargets }) => {
    const { aboutRef, workRef, servicesRef } = scrollTargets;
    const scrollToSection = (ref) => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
        <div className='hidden md:flex md:gap-[50px] bg-[#3b3b3bac] pl-[20px] rounded-4xl items-center border border-[#656565] fixed right-[20px] '>
            <button onClick={()=>scrollToSection(aboutRef)} className='text-white font-[bricolage] text-[14px]'>About Me</button>
            <button onClick={()=>scrollToSection(workRef)} className='text-white font-[bricolage] text-[14px]'>Work</button>
            <button onClick={()=>scrollToSection(servicesRef)} className='text-white font-[bricolage] text-[14px]'>Services</button>
            <a className='text-white font-[bricolage] text-[14px] bg-[#BC7C48] px-[20px] py-[10px] rounded-4xl'>Contact Me</a>
            
            </div>
            <i class="ri-menu-3-fill  md:hidden flex md:gap-[50px] bg-[#3b3b3bac] px-[16px] py-[8px] rounded-2xl center border border-[#656565] fixed right-[20px] text-white"></i>
        </>
    )
}

export default Header
