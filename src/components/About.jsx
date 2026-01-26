import React from 'react'


const About = () => {
    return (
        <div className="h-auto min-h-screen flex flex-col justify-center items-center px-6 md:px-[30px] py-[60px] relative">

            {/* Heading */}
            <h1 className="text-white font-[bricolage2] text-[40px] sm:text-[60px] md:text-[90px] z-10 leading-tight">
                About
                <span className="block sm:inline font-[bricolage] text-[22px] sm:text-[30px] md:text-[40px]">
                    {' '} (not a regular GPT About)
                </span>
            </h1>

            {/* Paragraph */}
            <p className="z-10 max-w-[900px] font-[bricolage1] text-[16px] sm:text-[20px] md:text-[28px] text-white mt-[30px] md:mt-[50px] leading-relaxed md:leading-[1.6] px-2">
                I’m a <span className="text-[#BC7C48] font-semibold">UI/UX Product Designer</span> who occasionally jumps into
                React to bring my designs to life, because watching a static Figma frame turn into an actual click is still
                my favourite kind of magic.
                <br /><br />
                With <span className="text-[#BC7C48] font-semibold">6 years in design</span>, I’ve crafted websites, apps,
                dashboards, and the occasional “Can you make it pop?” client request (yes, I survived). I focus on clean
                interfaces, smart user flows, and solving problems before users even realize they have them.
            </p>
        </div>
    )
}

export default About
