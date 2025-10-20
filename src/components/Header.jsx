import React from 'react'

const Header = () => {
    return (
        <div className='flex gap-[50px] bg-[#3b3b3bac] pl-[20px] rounded-4xl items-center border border-[#656565]'>
            <h1 className='text-white font-[bricolage] text-[14px]'>About Me</h1>
            <h1 className='text-white font-[bricolage] text-[14px]'>Work</h1>
            <h1 className='text-white font-[bricolage] text-[14px]'>Services</h1>
            <a className='text-white font-[bricolage] text-[14px] bg-[#BC7C48] px-[20px] py-[10px] rounded-4xl'>Contact Me</a>
        </div>
    )
}

export default Header
