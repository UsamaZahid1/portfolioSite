import React from 'react'
import CaseStudyTop from '../components/CaseStudyTop'
import JaySiteimg from '../assets/JaySite.svg'
import JayLogo from '../assets/Kontest/JayLogo.png'

const JaySite = () => {
    const details = [
        { label: 'Client', value: 'JayAbbasi' },
        { label: 'Role', value: 'UI/UX Designer' },
        { label: 'Deliverables', value: 'Website Design' },
        { label: 'Industry', value: 'Personal Branding' },

    ]
    return (
        <>
            <CaseStudyTop
                image={JayLogo}
                mainHeading={'JayAbbasi Motivational Speaker Website Design'}
                details={details}
            />

            <div className='mb-[40px] px-[50px] mt-[60px]'>
                <h1 className='font-[bricolage1] text-white mb-[20px]'>Jay Abbasi is a motivational speaker and coach who helps individuals and teams develop resilience, focus, and balance in their professional and personal lives. The goal of this redesign was to create a website that reflects Jay’s strong, confident, and inspiring brand personality, while providing a seamless user experience that drives conversions such as bookings and video engagement.</h1>
                <h1 className='font-[bricolage1] text-white mb-[100px]'>The previous design lacked visual hierarchy, personality, and a clear user journey. I completely reimagined the experience, from the homepage to the coaching and booking sections, focusing on storytelling, usability, and conversion. The new design combines bold typography, motivational energy, and clean layouts to reflect Jay’s brand voice and expertise.</h1>
                <img src={JaySiteimg} alt="" className='h-full rounded-2xl mb-[100px]' />

                <div className='flex justify-center'>
                    <div className='text-white inline-flex gap-2 justify-center items-center cursor-pointer mb-[100px] '
                    >
                        <a className='font-[bricolage] text-[22px] md:text-[34px]'>Next Project</a>
                        <i className="ri-arrow-right-line text-[22px] md:text-[34px]"></i>
                    </div>
                </div>

            </div>

        </>
    )
}

export default JaySite
