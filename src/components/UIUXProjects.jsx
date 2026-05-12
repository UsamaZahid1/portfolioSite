import React from 'react'
import { useNavigate } from 'react-router-dom'
import KontestLanding from '../assets/KontestLanding.png'
import KontestApp from '../assets/KontestApp.png'
import Ielts from '../assets/Ielts.png'
import JaySiteImg from '../assets/JaySite.png'
import portfolioImg from '../assets/portfolioMock.svg'

const cases = [
    {
        key: 'kontest-landing',
        cls: 'w-a',
        index: '/01',
        company: 'Kontest',
        scope: '12 months',
        cat: 'Fitness · Lead',
        glyph: 'K',
        role: 'Lead Product Designer',
        years: '2024 — Present',
        title: 'A fitness platform that turns workouts into competitions you actually finish.',
        desc: 'End-to-end UX for the marketing site and onboarding. Cohesive identity across web + mobile.',
        img: KontestLanding,
        path: '/KontestLandingPage',
    },
    {
        key: 'kontest-app',
        cls: 'w-b',
        index: '/02',
        company: 'Kontest App',
        scope: '10 months',
        cat: 'Mobile · iOS / Android',
        glyph: 'K',
        role: 'Senior Product Designer',
        years: '2024',
        title: 'The gamified fitness app — contests, logs, leaderboards.',
        desc: 'Designed 80+ screens, full onboarding, social loops, and the design system used in build.',
        img: KontestApp,
        path: '/KontestAppPage',
    },
    {
        key: 'ielts',
        cls: 'w-c',
        index: '/03',
        company: 'IELTS Prep Hub',
        scope: '5 months',
        cat: 'Edu · Web',
        glyph: 'I',
        role: 'Lead Designer',
        years: '2023',
        title: 'A calmer way to prep for IELTS.',
        desc: 'Modular learning flows, mock-test UX, and progress dashboards for adult learners.',
        img: Ielts,
        path: '/IeltsProjectPage',
    },
    {
        key: 'jay',
        cls: 'w-d',
        index: '/04',
        company: 'Jay',
        scope: '8 weeks',
        cat: 'Personal Brand',
        glyph: 'J',
        role: 'Designer',
        years: '2023',
        title: 'A site for a motivational speaker that earns the room.',
        desc: 'Editorial layout, scroll-led narrative, and a media kit landing.',
        img: JaySiteImg,
        path: '/JaySite',
    },
    {
        key: 'portfolio',
        cls: 'w-e',
        index: '/05',
        company: 'usamadesign.com',
        scope: 'ongoing',
        cat: 'Design + Dev',
        glyph: 'U',
        role: 'Designer & Developer',
        years: '2024 — 26',
        title: 'This portfolio — designed and shipped in React.',
        desc: 'Editorial system, dark/light modes, custom motion. The case study you\'re reading.',
        img: portfolioImg,
        path: '/',
    },
]

const UIUXProjects = () => {
    const navigate = useNavigate()
    return (
        <section id="work" className="work">
            <div className="wrap">
                <div className="section-head reveal is-in">
                    <div className="label">§ 03 — My Work</div>
                    <h2>Five that <em>moved</em><br />the needle.</h2>
                    <div className="aside">A slice of recent shipped product. Hover for details; click for the full write-up.</div>
                </div>

                <div className="work-grid reveal is-in">
                    {cases.map((c) => (
                        <a
                            key={c.key}
                            className={`work-card ${c.cls}`}
                            href={c.path}
                            onClick={(e) => { e.preventDefault(); navigate(c.path) }}
                        >
                            <div className="thumb">
                                <img src={c.img} alt={c.title} />
                            </div>
                            <span className="thumb-label">{c.index} · {c.company} · {c.scope}</span>
                            <span className="tag-cat">{c.cat}</span>
                            <div className="glyph">{c.glyph}</div>
                            <div className="meta">
                                <div className="row1"><span>{c.role}</span><span>{c.years}</span></div>
                                <h3>{c.title}</h3>
                                <p className="desc">{c.desc}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default UIUXProjects
