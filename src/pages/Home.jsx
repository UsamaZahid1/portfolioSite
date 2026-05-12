import React from 'react'
import Hero from '../components/Hero'
import Marquee from '../components/Marquee'
import Skills from '../components/Skills'
import UIUXProjects from '../components/UIUXProjects'
import Experience from '../components/Experience'
import About from '../components/About'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <>
            <Hero />
            <Marquee />
            <Skills />
            <UIUXProjects />
            <Experience />
            <About />
            <Footer />
        </>
    )
}

export default Home
