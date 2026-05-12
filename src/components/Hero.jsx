import React from 'react'
import portrait from '../assets/usama.webp'

const Hero = () => {
    return (
        <header className="hero" id="top">
            <div className="orb"></div>
            <div className="wrap">
                <div className="hero-grid">
                    <aside className="hero-meta">
                        <div className="row"><span>Index</span><b>§ 00 / Hero</b></div>
                        <div className="row"><span>Role sought</span><b>Senior / Lead PD</b></div>
                        <div className="row"><span>Location</span><b>Lahore — Remote</b></div>
                        <div className="row"><span>Notice period</span><b>4 weeks</b></div>
                        <div className="row"><span>Work auth</span><b>Open · Visa OK</b></div>
                    </aside>

                    <h1 className="hero-title">
                        <span className="it">Senior</span> product<br />
                        designer, <span className="underlined">6 yrs</span>,<br />
                        looking for the<br />
                        <span className="it">next</span> hard problem.
                    </h1>

                    <aside className="hero-aside">
                        <div className="hero-portrait">
                            <img src={portrait} alt="Usama Zahid" />
                            <span className="ph-label">portrait · 2026</span>
                        </div>
                        <p className="hero-tag">Product-led, conversion-obsessed. Currently lead designer at Kontest — a social, gamified fitness platform.</p>
                    </aside>
                </div>

                <div className="hero-strip">
                    <p className="hero-tagline">
                        I ship <em>products</em>, not deliverables — flows, hi-fi UI, design systems, and the React frontend to land them. <em>Hiring? I'd love to talk.</em>
                    </p>
                    <div className="ctas">
                        <a href="/ResumeUIUX.pdf" target="_blank" rel="noopener noreferrer" className="btn primary">
                            Download CV <span className="arr">↓</span>
                        </a>
                        <a href="#contact" className="btn ghost" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}>
                            Email me <span className="arr">→</span>
                        </a>
                    </div>
                </div>

                <div className="openrole">
                    <span className="pulse"></span>
                    <b>Actively interviewing</b>
                    <span className="sep"></span>
                    <span className="mono-tag">Open to: Sr / Lead Product Designer · Design Engineer</span>
                    <span className="sep"></span>
                    <span className="mono-tag">Remote · Hybrid · Relocation OK</span>
                    <span className="last">Updated · May 2026</span>
                </div>

                <div className="hero-stats">
                    <div className="stat">
                        <div className="n num">6<sup>yrs</sup></div>
                        <div className="l">In product design, since 2020</div>
                    </div>
                    <div className="stat">
                        <div className="n num">50<sup>+</sup></div>
                        <div className="l">Shipped product surfaces</div>
                    </div>
                    <div className="stat">
                        <div className="n num">4</div>
                        <div className="l">Featured case studies</div>
                    </div>
                    <div className="stat">
                        <div className="n num">100<sup>%</sup></div>
                        <div className="l">Designs that survived engineering</div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Hero
