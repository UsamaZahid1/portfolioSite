import React from 'react'
import CaseStudyTop from '../components/CaseStudyTop'
import kontest from '../assets/kontestLogo.png'
import splash from '../assets/Kontest/Splash.svg'
import onboarding1 from '../assets/Kontest/onboarding1.svg'
import onboarding2 from '../assets/Kontest/onboarding3.svg'
import home from '../assets/Kontest/Home.svg'
import quick from '../assets/Kontest/quick.svg'
import log from '../assets/Kontest/Log.svg'
import Status from '../assets/Kontest/Status.png'
import timer from '../assets/Kontest/Timer.svg'
import WorkoutTimer from '../assets/Kontest/WorkoutTimer.svg'
import exercise from '../assets/Kontest/exercise.svg'
import sleepimg from '../assets/Kontest/SleepLog.svg'
import friends from '../assets/Kontest/friends.svg'
import { useNavigate } from 'react-router-dom'



const KontestAppPage = () => {
  const details = [
    { label: 'Client', value: 'Matthew Blackert' },
    { label: 'Role', value: 'UI/UX Designer' },
    { label: 'Deliverables', value: 'Mobile App Design\nWebsite Design' },
    { label: 'Industry', value: 'Fitness' },
  ];

  const navigate = useNavigate();
  return (
    <>
      <div>
        <CaseStudyTop
          image={kontest}
          mainHeading={'Kontest Mobile App UI Design'}
          details={details}
        />
      </div>

      <div className='mb-[40px] px-[50px]'>
        <h1 className='font-[bricolage1] text-white mb-[20px] '>Kontest is a social and gamified fitness app designed to make working out more engaging, accountable, and fun. It allows users to create or join fitness contests, log their workouts, and compete with friends or gym partners all while tracking their progress in real time.</h1>
        <h1 className='font-[bricolage1] text-white mb-[100px]'>I was responsible for designing the entire Kontest product, including the mobile app UI and its marketing website. My role involved crafting a cohesive visual identity, ensuring consistency across all touchpoints, and creating an engaging experience that reflects the app’s energetic and community-driven nature. I focused on designing intuitive flows, clean interfaces, and meaningful interactions that inspire users to stay consistent with their fitness journey.</h1>

        <div className='grid grid-cols-2 md:grid-cols-3 gap-x-10  gap-y-30'>
          <img src={splash} alt="" className='h-full rounded-[16px]'/>
          <img src={onboarding1} alt="" className='h-full rounded-[16px]'/>
          <img src={onboarding2} alt="" className='h-full rounded-[16px]'/>
          <img src={home} alt="" className='h-full rounded-[16px]'/>
          <img src={quick} alt="" className='h-full rounded-[16px]'/>
          <img src={log} alt="" className='h-full rounded-[16px]'/>
          <img src={WorkoutTimer} alt="" className='h-full rounded-[16px]'/>
          <img src={timer} alt="" className='h-full rounded-[16px]'/>
          <img src={sleepimg} alt="" className='h-full rounded-[16px]'/>
          <img src={exercise} alt="" className='h-full rounded-[16px]'/>
          <img src={Status} alt="" className='h-full rounded-[16px]'/>
          <img src={friends} alt="" className='h-full rounded-[16px]'/>
        </div>

        <div className='flex justify-center mt-[100px]'>
          <div className='text-white inline-flex gap-2 justify-center items-center cursor-pointer mb-[100px] '
            onClick={() => (navigate('/JaySite'))}
          >
            <a className='font-[bricolage] text-[22px] md:text-[34px]'>Next Project</a>
            <i className="ri-arrow-right-line text-[22px] md:text-[34px]"></i>
          </div>
        </div>

      </div>
      

    </>
  )
}

export default KontestAppPage
