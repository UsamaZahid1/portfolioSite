import React from 'react'
import kontest from '../assets/kontestLogo.png'
import CaseStudyTop from '../components/CaseStudyTop'
import websiteimg from '../assets/kontestWebsite.svg'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'

const KontestLandingPage = () => {
    const navigate = useNavigate();
    const details = [
        { label: 'Client', value: 'Matthew Blackert' },
        { label: 'Role', value: 'UI/UX Designer' },
        { label: 'Deliverables', value: 'Mobile App Design\nWebsite Design' },
        { label: 'Industry', value: 'Fitness' },
    ];
    return (
        <>
            <CaseStudyTop
                image={kontest}
                mainHeading={'Kontest App - Website Design'}
                details={details}
            />
            <div className='rounded-2xl  mb-[40px] px-[50px]'>
                <h1 className='font-[bricolage1] text-white mb-[20px] '>Kontest is a social and gamified fitness app designed to make working out more engaging, accountable, and fun. It allows users to create or join fitness contests, log their workouts, and compete with friends or gym partners all while tracking their progress in real time.</h1>
                <h1 className='font-[bricolage1] text-white mb-[100px]'>I was responsible for designing the entire Kontest product, including the mobile app UI and its marketing website. My role involved crafting a cohesive visual identity, ensuring consistency across all touchpoints, and creating an engaging experience that reflects the app’s energetic and community-driven nature. I focused on designing intuitive flows, clean interfaces, and meaningful interactions that inspire users to stay consistent with their fitness journey.</h1>
                <img src={websiteimg} alt="" className='h-full rounded-2xl mb-[100px]' />
                
                <div className='flex justify-center'>
                    <div className='text-white inline-flex gap-2 justify-center items-center cursor-pointer mb-[100px] '
                        onClick={() => navigate('/KontestAppPage')}>
                        <a className='font-[bricolage] text-[22px] md:text-[34px]'>Next Project</a>
                        <i className="ri-arrow-right-line text-[22px] md:text-[34px]"></i>
                    </div>
                </div>

            </div>
            <Footer />

        </>
    )
}

export default KontestLandingPage
