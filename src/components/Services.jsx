import React from 'react'
import figmaa from '../assets/figma.svg'
import pentool from '../assets/pentool.svg'
import html from '../assets/html.svg'
import css from '../assets/css.svg'
import reacticon from '../assets/reactIcon.svg'
import tailwind from '../assets/tailwind.svg'
import javascript from '../assets/javascriptIcon.svg'

const services = [
    {
        title: 'Product & SaaS Design',
        body: 'End-to-end UX for web products — research, flows, IA, UI, and a design system your engineers can ship from.',
        tools: [
            { src: figmaa, alt: 'Figma' },
            { src: pentool, alt: 'Design system' },
        ],
        deliverables: ['User flows', 'Wireframes', 'High-fidelity UI', 'Design system'],
    },
    {
        title: 'Mobile UI Design',
        body: 'Native-feeling mobile UX for iOS and Android — designed for thumbs, low light, and short attention spans.',
        tools: [
            { src: figmaa, alt: 'Figma' },
            { src: pentool, alt: 'Prototyping' },
        ],
        deliverables: ['App flows', 'Component library', 'Interaction specs', 'Prototypes'],
    },
    {
        title: 'Frontend Development',
        body: 'I build the design in React + Tailwind. Closes the design–engineering gap and gets working UI in front of users faster.',
        tools: [
            { src: reacticon, alt: 'React' },
            { src: tailwind, alt: 'Tailwind' },
            { src: javascript, alt: 'JavaScript' },
            { src: html, alt: 'HTML' },
            { src: css, alt: 'CSS' },
        ],
        deliverables: ['Marketing sites', 'Component libraries', 'Production frontends'],
    },
]

const Services = () => {
    return (
        <div className="min-h-screen px-6 md:px-12 py-24">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-14">
                    <span className="inline-block text-[#BC7C48] font-[bricolage] uppercase tracking-[0.18em] text-xs mb-3">
                        What I do
                    </span>
                    <h2 className="text-white font-[bricolage2] text-4xl sm:text-5xl md:text-6xl tracking-tight">
                        Design that ships, code that holds.
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                    {services.map((s) => (
                        <div
                            key={s.title}
                            className="group relative rounded-2xl border border-white/10 bg-white/[0.02] p-7 hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300 flex flex-col"
                        >
                            <h3 className="font-[bricolage2] text-white text-2xl tracking-tight">
                                {s.title}
                            </h3>
                            <p className="font-[bricolage1] text-white/65 mt-3 text-[15px] leading-[1.6]">
                                {s.body}
                            </p>

                            <div className="mt-6">
                                <span className="text-white/40 font-[bricolage1] text-[11px] uppercase tracking-[0.15em]">
                                    Deliverables
                                </span>
                                <ul className="mt-2 flex flex-wrap gap-1.5">
                                    {s.deliverables.map((d) => (
                                        <li
                                            key={d}
                                            className="text-[12px] font-[bricolage1] text-white/70 border border-white/10 rounded-full px-2.5 py-1"
                                        >
                                            {d}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mt-auto pt-6 flex items-center gap-3 border-t border-white/[0.06]">
                                {s.tools.map((t) => (
                                    <img
                                        key={t.alt}
                                        src={t.src}
                                        alt={t.alt}
                                        className="h-7 w-7 opacity-90"
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Services
