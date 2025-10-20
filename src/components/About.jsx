import React from 'react'
import EarthScene from './Earth'


const About = () => {
    return (
        
        <div className='h-screen ml-[30px] mt-[0px] flex flex-col justify-center items-center '>
           
            <h1 className='text-white font-[bricolage2] text-[90px] z-10'>About
                <span className='font-[bricolage] text-[40px]'> (not a regular gpt About)</span>
            </h1>
            <p className=' z-10 max-w-[1000px] font-[bricolage1] text-[28px] text-center text-white mt-[50px] flex items-baseline justify-center'>I’m a UI/UX Product Designer who occasionally jumps into React to bring my designs to life because watching a static Figma frame turn into an actual click is still my favourite kind of magic.
                With 6 years in design, I’ve crafted websites, apps, dashboards, and the occasional “Can you make it pop?” client request (yes, I survived). I focus on clean interfaces, smart user flows, and solving problems before users even realize they have them.</p>
            <div className='absolute w-full rounded-'><EarthScene /></div> 
            </div>
            
    )
}

export default About
