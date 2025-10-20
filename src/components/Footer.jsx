import React from 'react'

const Footer = () => {
  return (
    <footer className=' py-[55px] flex flex-col items-center relative overflow-hidden'>
      {/* Background grid */}
      <div className='absolute inset-0 bg-[linear-gradient(transparent_95%,rgba(255,255,255,0.05)_95%),linear-gradient(90deg,transparent_95%,rgba(255,255,255,0.05)_100%)] bg-[length:80px_80px] pointer-events-auto'></div>

      <h1 className='font-[bricolage2] text-[64px] text-white relative z-10'>Let's Work</h1>

          <a className='font-[bricolage1] mt-[30px] text-white text-[20px] border border-[#4D4D4D] bg-[#292929] rounded-[30px] px-[24px] py-[12px] relative z-10'>
        hello@usamadesign.com
      </a>

      <div className='flex items-center relative z-10'>
        <div className='w-16 h-16 mr-[30px] mt-[46px] rounded-full bg-[#424242] flex items-center justify-center'>
          <i className="ri-instagram-line text-white text-[30px]"></i>
        </div>
        <div className='w-16 h-16 rounded-full mt-[46px] bg-[#424242] flex items-center justify-center'>
          <i className="ri-linkedin-fill text-white text-[30px] p-[6px]"></i>
        </div>
      </div>
    </footer>
  )
}

export default Footer
