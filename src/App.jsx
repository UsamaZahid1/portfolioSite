import React, { useRef } from 'react'
import Home from './pages/Home'
import Header from './components/Header'
import { Route, Router, Routes, useNavigate } from 'react-router-dom';
import KontestLandingPage from './pages/KontestLandingPage';
import Footer from './components/Footer';
import KontestAppPage from './pages/KontestAppPage';
import JaySite from './pages/JaySite';
import UIUXallProjects from './pages/UIUXallProjects';
import IeltsProjectPage from './pages/IeltsProjectPage';
import ScrollToTop from './components/ScrollToTop';
import Cursor from './components/Cursor';

const App = () => {
  const navigate = useNavigate();
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const servicesRef = useRef(null);
  return (
    <>
      {/* Header */}
      <Cursor />
        <ScrollToTop/>
      <div className='px-[50px] mt-[30px] absolute z-50 flex justify-between'>
        <div className='cursor-pointer' onClick={() => (navigate('/'))}>
          <span className='font-[borel] text-[#BC7C48] md:text-[32px] text-[16px]'>U</span>
          <span className='font-[borel] md:text-[32px] text-[16px] text-white'>sama</span>
        </div>
        <Header scrollTargets={{ aboutRef, workRef, servicesRef }} />

      </div>


      <Routes className='flex-grow'>
        
        <Route path='/' element={<Home scrollTargets={{ aboutRef, workRef, servicesRef }} />}></Route>
        <Route path='/KontestLandingPage' element={<KontestLandingPage />}></Route>
        <Route path='/KontestAppPage' element={<KontestAppPage />}></Route>
        <Route path='/JaySite' element={<JaySite />}></Route>
        <Route path='/IeltsProjectPage' element={<IeltsProjectPage />}></Route>
        <Route path='/UIUXallProjects' element={<UIUXallProjects />}> </Route>

      </Routes>
      
    </>
  )
}

export default App
