import React from 'react'
import Ielts from '../assets/Ielts.png'
import JaySite from '../assets/JaySite.png'
import KontestApp from '../assets/KontestApp.png'
import KontestLanding from '../assets/KontestLanding.png'
import portfolioimg from '../assets/portfolioMock.svg'
import ProjectCard from './PojectCard'
import { useNavigate } from 'react-router-dom'

const WebProjects = () => {
    const navigate = useNavigate();
  return (
      <div className="min-h-screen px-6 md:px-12 py-24">
          <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
              <span className="inline-block text-[#BC7C48] font-[bricolage] uppercase tracking-[0.18em] text-xs mb-3">
                  Designed &amp; built
              </span>
              <h2 className="text-white text-4xl sm:text-5xl md:text-6xl font-[bricolage2] tracking-tight">
                  Frontend in production
              </h2>
          </div>

          <div className="space-y-10">
              {/* Row 1 */}
              <div className="flex flex-col lg:flex-row gap-8 border-b border-[#717171] pb-10">
                  <div className="flex-[2] min-h-[300px] md:min-h-[580px] lg:border-r border-[#717171] lg:pr-8">
                      <ProjectCard
                          image={portfolioimg}
                          title="My Portfolio Website"
                          subtitle="Portfolio Website Design & Dev"
                      />
                  </div>
                  <div className="flex-[1] min-h-[250px] md:min-h-[350px]">
                      <ProjectCard
                          image={KontestApp}
                          title="Kontest Dashboard"
                          subtitle="Admin Panel Web UI"
                          onClick={()=>(navigate('/'))}
                      />
                  </div>
              </div>
          </div>
          </div>
      </div>
  )
}

export default WebProjects
