import React from 'react'
import Home from './pages/Home'
import Header from './components/Header'

const App = () => {
  return (
    <>
      {/* Header */}
      <div className='px-[30px] mt-[30px] absolute w-screen z-50 flex justify-between items-center'>
        <div>
          <span className='font-[borel] text-[#BC7C48] text-[40px]'>U</span>
          <span className='font-[borel] text-[40px] text-white'>sama</span>
        </div>
        <Header />
      </div>

      <Home />
    </>
  )
}

export default App
