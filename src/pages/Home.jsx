import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import UIUXProjects from '../components/UIUXProjects'
import WebProjects from '../components/WebProjects'
import Services from '../components/Services'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <div className='h-screen w-screen'>
            <Hero />
            <About />
            <UIUXProjects />
            <WebProjects />
            <Services />
            <Footer/>

        </div>
    )
}

export default Home
