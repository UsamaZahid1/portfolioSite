import React from 'react'
import figmaa from '../assets/figma.svg'
import pentool from '../assets/pentool.svg'
import html from '../assets/html.svg'
import css from '../assets/css.svg'
import reacticon from '../assets/reacticon.svg'
import tailwind from '../assets/tailwind.svg'


const Services = () => {
    return (
        <div className="min-h-screen px-12 py-20">
            <h2 className="text-white text-5xl font-[bricolage2] mb-12 text-center">Services</h2>
            <div className='flex justify-between'>
                <div className='min-w-[650px] border border-[#5E5E5E] lg-block p-[30px] rounded-[20px]'>
                    <h1 className='font-[bricolage] text-white text-[34px]'>Mobile UI Design</h1>
                    <h1 className='font-[bricolage1] text-white mt-[40px]'>Designing intuitive, high performing mobile experiences</h1>
                    <div className='flex mt-[40px]'>
                        <img src={figmaa} alt='' className='h-[50px] pr-[30px] border-r border-[#5E5E5E]'></img>
                        <img src={pentool} alt='' className='h-[50px] px-[30px]'></img>
                    </div>
                </div>

                <div className='min-w-[650px] border border-[#5E5E5E] lg-block p-[30px] rounded-[20px]'>
                    <h1 className='font-[bricolage] text-white text-[34px]'>Web & Product Design</h1>
                    <h1 className='font-[bricolage1] text-white mt-[40px]'>Impactful, conversion focused web experiences</h1>
                    <div className='flex mt-[40px]'>
                        <img src={figmaa} alt='' className='h-[50px] pr-[30px] border-r border-[#5E5E5E]'></img>
                        <img src={pentool} alt='' className='h-[50px] px-[30px] '></img>
                    </div>
                </div>

            </div>
            <div className='mt-[46px] flex justify-between border border-[#5E5E5E] lg-block p-[30px] rounded-[20px]'>
                <div>
                    <h1 className='font-[bricolage] text-white text-[34px]'>Web Development</h1>
                    <h1 className='font-[bricolage1] text-white mt-[40px]'>Turning designs into live, interactive products.</h1>
                </div>
                <div className='flex mt-[40px]'>
                    <img src={html} alt='' className='h-[50px] px-[30px] border-r border-[#5E5E5E]'></img>
                    <img src={css} alt='' className='h-[50px] px-[30px] border-r border-[#5E5E5E]'></img>
                    <img src={tailwind} alt='' className='h-[50px] px-[30px] border-r border-[#5E5E5E]'></img>
                    <img src={reacticon} alt='' className='h-[50px] px-[30px] '></img>
                </div>
            </div>

        </div>
    )
}

export default Services
