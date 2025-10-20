import React from 'react'
import Ielts from '../assets/Ielts.png'
import JaySite from '../assets/JaySite.png'
import KontestApp from '../assets/KontestApp.png'
import KontestLanding from '../assets/KontestLanding.png'
import ProjectCard from './PojectCard'

const UIUXProjects = () => {

    return (
        <div className="min-h-screen px-12 py-20">
            <h2 className="text-white text-5xl font-[bricolage2] mb-12 text-center">UI/UX - Projects</h2>

            <div className="space-y-10">
                {/* Row 1 */}
                <div className="flex flex-col lg:flex-row gap-8 border-b border-[#717171] pb-10">
                    <div className="flex-[2] min-h-[580px]  border-r border-[#717171] pr-8">
                        <ProjectCard image={KontestLanding} title="Kontest - Landing Page" subtitle="App Landing Page UX" />
                    </div>
                    <div className="flex-[1] min-h-[350px]">
                        <ProjectCard image={KontestApp} title="Kontest - Gamified Fitness App" subtitle="Mobile App UX/UI" />
                    </div>
                </div>

                {/* Row 2 */}
                <div className="flex flex-col lg:flex-row gap-8 border-b border-[#717171] pb-10">
                    <div className="flex-[1] min-h-[550px] border-r border-[#717171] pr-8">
                        <ProjectCard image={Ielts} title="Kontest - Gamified Fitness App" subtitle="Mobile App UX/UI" />
                    </div>
                    <div className="flex-[2] min-h-[400px]">
                        <ProjectCard image={JaySite} title="Motivational Speaker Website" subtitle="App Landing Page UX" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UIUXProjects
