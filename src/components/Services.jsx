import React from 'react'
import figmaa from '../assets/figma.svg'
import pentool from '../assets/pentool.svg'
import html from '../assets/html.svg'
import css from '../assets/css.svg'
import reacticon from '../assets/reactIcon.svg'
import tailwind from '../assets/tailwind.svg'
import javascript from '../assets/javascriptIcon.svg'

const Services = () => {
    return (
        <div className="min-h-screen px-6 sm:px-10 lg:px-16 py-6 ">
            <h2 className="text-white text-4xl sm:text-5xl font-[bricolage2] mb-12 text-center">
                Services
            </h2>

            {/* Top Services Row */}
            <div className="flex flex-col lg:flex-row justify-between gap-8">
                {/* Card 1 */}
                <div className="flex-1 border border-[#5E5E5E] p-6 sm:p-8 rounded-2xl hover:bg-[#BC7C48] transition-all duration-300">
                    <h1 className="font-[bricolage] text-white text-2xl sm:text-3xl">
                        Mobile UI Design
                    </h1>
                    <p className="font-[bricolage1] text-gray-300 mt-6 text-[16px] sm:text-[18px] leading-relaxed">
                        Designing intuitive, high performing mobile experiences.
                    </p>
                    <div className="flex mt-8 items-center">
                        <img src={figmaa} alt="Figma" className="h-[40px] sm:h-[50px] pr-6 border-r border-[#5E5E5E]" />
                        <img src={pentool} alt="Pen Tool" className="h-[40px] sm:h-[50px] px-6" />
                    </div>
                </div>

                {/* Card 2 */}
                <div className="flex-1 border border-[#5E5E5E] p-6 sm:p-8 rounded-2xl hover:bg-[#BC7C48]">
                    <h1 className="font-[bricolage] text-white text-2xl sm:text-3xl">
                        Web & Product Design
                    </h1>
                    <p className="font-[bricolage1] text-gray-300 mt-6 text-[16px] sm:text-[18px] leading-relaxed">
                        Impactful, conversion-focused web experiences.
                    </p>
                    <div className="flex mt-8 items-center">
                        <img src={figmaa} alt="Figma" className="h-[40px] sm:h-[50px] pr-6 border-r border-[#5E5E5E]" />
                        <img src={pentool} alt="Pen Tool" className="h-[40px] sm:h-[50px] px-6" />
                    </div>
                </div>
            </div>

            {/* Bottom Card */}
            <div className="mt-10 border border-[#5E5E5E] p-6 sm:p-8 rounded-2xl flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 hover:bg-[#BC7C48] ">
                <div>
                    <h1 className="font-[bricolage] text-white text-2xl sm:text-3xl">
                        Web Development
                    </h1>
                    <p className="font-[bricolage1] text-gray-300 mt-6 text-[16px] sm:text-[18px] leading-relaxed">
                        Turning designs into live, interactive products.
                    </p>
                </div>
                <div className="flex flex-wrap mt-4 lg:mt-0 justify-center lg:justify-end items-center">
                    <img src={html} alt="HTML" className="h-[40px] sm:h-[50px] px-4 border-r border-[#5E5E5E]" />
                    <img src={css} alt="CSS" className="h-[40px] sm:h-[50px] px-4 border-r border-[#5E5E5E]" />
                    <img src={javascript} alt="CSS" className="h-[40px] sm:h-[40px] px-4 border-r border-[#5E5E5E]" />
                    <img src={tailwind} alt="Tailwind" className="h-[40px] sm:h-[50px] px-4 border-r border-[#5E5E5E]" />
                    <img src={reacticon} alt="React" className="h-[40px] sm:h-[50px] px-4" />
                </div>
            </div>
        </div>
    )
}

export default Services
