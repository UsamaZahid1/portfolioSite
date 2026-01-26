import React from 'react'
import img from '../assets/Ielts/IeltsLogo.png'
import Footer from '../components/Footer'
import CaseStudyTop from '../components/CaseStudyTop'
import home from '../assets/Ielts/home.svg'
import community from '../assets/Ielts/community.svg'
import modules from '../assets/Ielts/modules.svg'
import notes from '../assets/Ielts/notes.svg'
import notes1 from '../assets/Ielts/notes1.svg'
import worksheet from '../assets/Ielts/worksheet.svg'
import { useNavigate } from 'react-router-dom'

const IeltsProjectPage = () => {
    const navigate = useNavigate();
    const details = [
        { label: 'Client', value: 'Muhammad Saad' },
        { label: 'Role', value: 'UI/UX Designer' },
        { label: 'Deliverables', value: 'Web App Design' },
        { label: 'Industry', value: 'E-learning' },
    ]


    return (
        <>
            <CaseStudyTop
                image={img}
                mainHeading={'Ielts Preparation Web App'}
                details={details}
            />
            <div className='rounded-2xl  mb-[40px] px-[50px]'>
                <h1 className='font-[bricolage1] text-white mb-[20px] '>IELTS Preparation is a gamified web app designed for individuals preparing for the IELTS exam. It combines learning, community, and motivation to create an engaging study experience. The platform includes comprehensive IELTS courses with enhanced note-taking features, a forum for discussions, and a community section where users can share updates or seek guidance.</h1>
                <h1 className='font-[bricolage1] text-white mb-[100px]'>I was responsible for designing the entire web app interface and its landing page, focusing on a seamless user experience and intuitive navigation. I created user flows, wireframes, and high-fidelity prototypes to bring the product vision to life. Additionally, I defined the visual style and gamification elements such as badges and progress indicators to enhance user engagement, and ensured that the overall design was responsive, accessible, and visually consistent across all devices. </h1>
                {/* <img src={websiteimg} alt="" className='h-full rounded-2xl mb-[100px]' /> */}
                
                <div className='grid grid-cols-1 md:grid-cols-2 gap-x-10  gap-y-20'>
                    <img src={home} alt="" className='h-full rounded-[10px]' />
                    <img src={modules} alt="" className='h-full rounded-[10px]' />
                    <img src={community} alt="" className='h-full rounded-[10px]' />
                    <img src={notes} alt="" className='h-full rounded-[10px]' />
                    <img src={notes1} alt="" className='h-full rounded-[10px]' />
                    <img src={worksheet} alt="" className='h-full rounded-[10px]' />
                  
                </div>
                <div className='flex justify-center mt-[100px]'>
                    <div className='text-white inline-flex gap-2 justify-center items-center cursor-pointer mb-[100px] '
                        onClick={() => navigate('/KontestLandingPage')} 
                    >
                        <a className='font-[bricolage] text-[22px] md:text-[34px]'>Next Project</a>
                        <i className="ri-arrow-right-line text-[22px] md:text-[34px]"></i>
                    </div>
                </div>

            </div>
            <Footer />

        </>
    )
}

export default IeltsProjectPage
