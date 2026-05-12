import React from 'react'
import portrait from '../assets/usama.webp'

const About = () => {
    return (
        <section id="about" className="about">
            <div className="wrap">
                <div className="section-head reveal is-in">
                    <div className="label">§ 05 — About</div>
                    <h2>The <em>person</em><br />behind the CV.</h2>
                    <div className="aside">A short bio for hiring managers in a hurry.</div>
                </div>

                <div className="about-grid">
                    <div className="about-photo reveal is-in">
                        <img src={portrait} alt="Usama Zahid, in the studio" />
                        <div className="badge">
                            <span className="b">Lahore — PK</span>
                            <span className="b">UTC +05</span>
                        </div>
                        <span className="ph-label">studio · 2026</span>
                    </div>

                    <div className="about-body reveal is-in">
                        <h3>Designer, not <em>decorator</em>.</h3>
                        <p>
                            I started in 2020, learning the craft on a borrowed laptop. Six years later I lead product design at Kontest — owning the consumer fitness app and its marketing site.
                        </p>
                        <p>
                            I work at the intersection of <strong>product strategy</strong> and <strong>visual craft</strong>. I write the interview notes, draw the flows, build the components, pair with the engineer who ships them, and stay through launch.
                        </p>
                        <p>
                            I'm looking for a <strong>senior or lead role</strong> on a small product team where design has a seat at the strategy table — remote-first or hybrid Lahore-friendly, with relocation possible for the right team.
                        </p>

                        <div className="quick-facts">
                            <div className="fact"><div className="l">Currently</div><div className="v">Lead PD · <em>Kontest</em></div></div>
                            <div className="fact"><div className="l">Years in industry</div><div className="v">6 — since <em>2020</em></div></div>
                            <div className="fact"><div className="l">Open to</div><div className="v">Senior · Lead · Staff</div></div>
                            <div className="fact"><div className="l">Notice period</div><div className="v">4 weeks</div></div>
                            <div className="fact"><div className="l">Work mode</div><div className="v">Remote · <em>Hybrid</em> · Relocation</div></div>
                            <div className="fact"><div className="l">Languages</div><div className="v">English · Urdu</div></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
