import React from 'react'

const CaseStudyTop = ({
    image,
    mainHeading,
    details = []
}) => {
    return (
        <div>
            <div className='min-h-screen md:pt-[120px] pt-[100px] md:px-[50px] px-[50px] '>
                <img src={image} alt='' className='h-[60px]'></img>
                <h1 className='font-[bricolage2] text-white text-[54px] md:text-[90px]'>{mainHeading}</h1>

                <div className='flex flex-col gap-[20px] md:gap-[20px] mt-[160px] md:mt-[120px] text-[16px] md:text-[16px]'>
                    {details.map((items, index) => (
                        <div key={index} className='font-[bricolage1] flex flex-col'>
                            <span className='text-gray-400'>{items.label}</span>
                            <span className='text-white'>{items.value}</span>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default CaseStudyTop
