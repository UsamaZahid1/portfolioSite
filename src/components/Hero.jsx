import React, { useEffect, useState } from 'react'
import image from '../assets/usama.webp';
import { motion } from 'framer-motion';

const Hero = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const gradientX = (mousePosition.x / window.innerWidth) * 100;
    const gradientY = (mousePosition.y / window.innerHeight) * 100;

    return (
        <div className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-black via-[#0a0a0a] to-[#1a1a1a]">

            {/* Dynamic Background Effects */}
            <div
                className="absolute inset-0 opacity-20 transition-all duration-300"
                style={{
                    background: `radial-gradient(circle at ${gradientX}% ${gradientY}%, rgba(188, 124, 72, 0.15) 0%, transparent 50%)`,
                }}
            />

            {/* Animated Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />

            {/* Floating Particles */}
            <div className="absolute inset-0">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-[1px] h-[1px] bg-[#BC7C48] rounded-full animate-float"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${10 + Math.random() * 10}s`,
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 pt-20 lg:pt-12">
                <div className="max-w-7xl mx-auto w-full">
                    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16 xl:gap-24">

                        {/* Left Column - Image with Interactive Effects */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="lg:w-2/5 flex flex-col items-center lg:items-center gap-6 relative"
                        >
                            {/* Main Image Container with Top Padding */}
                            <div className="relative group w-full flex justify-center">
                                {/* Glow Effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-[#BC7C48] via-transparent to-transparent opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500 -translate-x-1/4" />

                                {/* 3D Card Effect Container */}
                                <div className="relative mt-8 lg:mt-16">
                                    {/* Hover Effect Border */}
                                    <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-r from-[#BC7C48] via-transparent to-transparent opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500" />

                                    {/* Profile Image Container */}
                                    <div className="relative overflow-hidden rounded-2xl lg:rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm p-1.5 shadow-2xl">
                                        {/* Animated Gradient Border */}
                                        <div className="absolute inset-0 rounded-[calc(2rem-4px)] bg-gradient-to-r from-transparent via-[#BC7C48]/20 to-transparent animate-gradient-shift" />

                                        <img
                                            src={image}
                                            alt="Usama - UI/UX Designer & Developer"
                                            className="relative w-64 h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 object-cover rounded-xl lg:rounded-[1.75rem] z-10 transform transition-transform duration-500 group-hover:scale-[1.02]"
                                        />
                                    </div>

                                    {/* Floating Elements */}
                                    <div className="absolute -top-4 -left-4 w-20 h-20 border-t border-l border-[#BC7C48]/30 rounded-tl-2xl animate-pulse-slow" />
                                    <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b border-r border-[#BC7C48]/30 rounded-br-2xl animate-pulse-slow" />
                                </div>
                            </div>

                            {/* Available for Work Card - Below Image */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="w-full max-w-sm mx-auto lg:mx-0 mt-4 lg:mt-8"
                            >
                                <div className="relative group overflow-hidden rounded-2xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 backdrop-blur-sm p-6 hover:border-white/20 transition-all duration-300">
                                    {/* Background Glow */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#BC7C48]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    {/* Content */}
                                    <div className="relative z-10">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="relative">
                                                <div className="absolute inset-0 animate-ping rounded-full bg-[#BC7C48]/30" />
                                                <div className="relative w-3 h-3 rounded-full bg-gradient-to-r from-[#BC7C48] to-[#FFA857]" />
                                            </div>
                                            <h3 className="font-bold text-white text-lg">
                                                Available for Opportunities
                                            </h3>
                                        </div>

                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2">
                                                <div className="w-2 h-2 rounded-full bg-[#BC7C48]" />
                                                <span className="text-white/80 text-sm font-medium">
                                                    Full-time Positions
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="w-2 h-2 rounded-full bg-[#FFA857]" />
                                                <span className="text-white/80 text-sm font-medium">
                                                    Contract Work
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="w-2 h-2 rounded-full bg-[#BC7C48]/60" />
                                                <span className="text-white/80 text-sm font-medium">
                                                    Freelance Projects
                                                </span>
                                            </div>
                                        </div>

                                        <div className="mt-4 pt-4 border-t border-white/10">
                                            <p className="text-white/60 text-sm">
                                                Open to collaborate on innovative projects and join forward-thinking teams.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Right Column - Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                            className="lg:w-3/5 text-center lg:text-left mt-8 lg:mt-16"
                        >
                            {/* Location & Role */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                                className="mb-6"
                            >
                                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
                                    <span className="text-[#BC7C48] font-semibold text-sm tracking-widest uppercase">
                                        Pakistan
                                    </span>
                                    <div className="w-1 h-1 rounded-full bg-[#BC7C48]/50" />
                                    <span className="text-white/60 font-medium text-sm">
                                        UI/UX Designer & Developer
                                    </span>
                                </div>
                            </motion.div>

                            {/* Main Headline */}
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                className="mb-6 lg:mb-8"
                            >
                                <span className="block font-bold bg-gradient-to-r from-white via-white to-white/90 bg-clip-text text-transparent text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-tight">
                                    Crafting
                                </span>
                                <span className="block font-bold bg-gradient-to-r from-[#BC7C48] via-[#FFA857] to-[#BC7C48] bg-clip-text text-transparent text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-tight animate-gradient-x">
                                    Digital Experiences
                                </span>
                                <span className="block font-bold text-white/80 text-2xl sm:text-3xl lg:text-4xl mt-4">
                                    That Drive Results
                                </span>
                            </motion.h1>

                            {/* Description */}
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.7 }}
                                className="text-lg sm:text-xl text-white/60 leading-relaxed mb-8 lg:mb-12 max-w-3xl font-light"
                            >
                                I specialize in transforming complex challenges into intuitive,
                                high-performance digital solutions. With expertise in both design
                                and development, I create cohesive experiences that users love
                                and businesses need.
                            </motion.p>

                            {/* Stats */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.8 }}
                                className="flex flex-wrap gap-6 mb-8 lg:mb-12 justify-center lg:justify-start"
                            >
                                {[
                                    { value: "50+", label: "Projects" },
                                    { value: "5+", label: "Years Experience" },
                                    { value: "100%", label: "Client Satisfaction" },
                                    { value: "∞", label: "Passion" }
                                ].map((stat, index) => (
                                    <div key={index} className="text-center lg:text-left">
                                        <div className="text-3xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                                            {stat.value}
                                        </div>
                                        <div className="text-sm text-white/40 tracking-wider mt-1">
                                            {stat.label}
                                        </div>
                                    </div>
                                ))}
                            </motion.div>

                            {/* CTA Buttons */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.9 }}
                                className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start"
                            >
                                <button className="group relative px-8 py-4 rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95">
                                    {/* Button Background */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#BC7C48] via-[#FFA857] to-[#BC7C48] bg-[length:200%_100%] animate-gradient-x" />
                                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />

                                    {/* Button Content */}
                                    <div className="relative flex items-center gap-3">
                                        <span className="font-semibold text-white text-lg tracking-wide">
                                            Start a Project
                                        </span>
                                        <div className="transform group-hover:translate-x-2 transition-transform duration-300">
                                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </div>
                                    </div>
                                </button>

                                <a
                                    href="/UsamaReactResume.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group px-6 py-3 rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105 active:scale-95"
                                >
                                    <div className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-[#BC7C48] group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                        <span className="font-medium text-white text-base">
                                            View Resume
                                        </span>
                                    </div>
                                </a>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Scroll Indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1.5 }}
                        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
                    >
                       
                    </motion.div>
                </div>
            </div>

            {/* Add these animations to your global CSS */}
            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0) translateX(0); }
                    50% { transform: translateY(-20px) translateX(10px); }
                }
                @keyframes gradient-x {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
                @keyframes gradient-shift {
                    0% { transform: translateX(-100%) rotate(0deg); }
                    100% { transform: translateX(100%) rotate(180deg); }
                }
                @keyframes pulse-slow {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.5; }
                }
                .animate-float {
                    animation: float 5s ease-in-out infinite;
                }
                .animate-gradient-x {
                    animation: gradient-x 3s ease infinite;
                    background-size: 200% 200%;
                }
                .animate-gradient-shift {
                    animation: gradient-shift 3s linear infinite;
                }
                .animate-pulse-slow {
                    animation: pulse-slow 2s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
};

export default Hero;