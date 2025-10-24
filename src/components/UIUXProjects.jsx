import React from 'react'
import Ielts from '../assets/Ielts.png'
import JaySite from '../assets/JaySite.png'
import KontestApp from '../assets/KontestApp.png'
import KontestLanding from '../assets/KontestLanding.png'
import ProjectCard from './PojectCard'
import { useNavigate } from 'react-router-dom'

const UIUXProjects = () => {
    const navigate = useNavigate() ;

    return (
        <div className="min-h-screen px-6 md:px-12 py-16 md:py-20">
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-[bricolage2] mb-12 text-center">
                UI/UX — Projects
            </h2>

            <div className="space-y-10">
                {/* Row 1 */}
                <div className="flex flex-col lg:flex-row gap-8 border-b border-[#717171] pb-10">
                    <div className="flex-[2] min-h-[300px] md:min-h-[580px] lg:border-r border-[#717171] lg:pr-8">
                        <ProjectCard
                            image={KontestLanding}
                            title="Kontest - Landing Page"
                            subtitle="App Landing Page UX"
                            onClick={()=>navigate('/KontestLandingPage')}
                        />
                    </div>
                    <div className="flex-[1] min-h-[250px] md:min-h-[350px]">
                        <ProjectCard
                            image={KontestApp}
                            title="Kontest - Gamified Fitness App"
                            subtitle="Mobile App UX/UI"
                            onClick={()=>navigate('/KontestAppPage')}
                            
                        />
                    </div>
                </div>

                {/* Row 2 */}
                <div className="flex flex-col lg:flex-row gap-8 border-b border-[#717171] pb-10">
                    <div className="flex-[1] min-h-[250px] md:min-h-[550px] lg:border-r border-[#717171] lg:pr-8">
                        <ProjectCard
                            image={Ielts}
                            title="IELTS Academy App"
                            subtitle="Education Mobile App UI"
                        />
                    </div>
                    <div className="flex-[2] min-h-[250px] md:min-h-[400px]">
                        <ProjectCard
                            image={JaySite}
                            title="Jay - Motivational Speaker Website"
                            subtitle="Personal Branding Web UX"
                            onClick={()=>(navigate('/JaySite'))}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UIUXProjects
