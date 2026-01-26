import React, { useRef } from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import UIUXProjects from '../components/UIUXProjects'
import WebProjects from '../components/WebProjects'
import Services from '../components/Services'
import Footer from '../components/Footer'

const Home = ({ scrollTargets }) => {
    const { aboutRef, workRef, servicesRef } = scrollTargets;
    return (
        <div className='h-screen w-screen'>
            <section id='home'><Hero /></section>
            <section ref={aboutRef}><About /></section>
            <section ref={workRef}><UIUXProjects /></section>
            <section id='webProjects'><WebProjects /></section>
            <section ref={servicesRef}> <Services /></section>
            <section id='footer'><Footer /></section>

        </div>
    )
}

export default Home
