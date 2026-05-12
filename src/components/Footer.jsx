import React from 'react'

const Contact = () => {
    return (
        <>
            <section id="contact" className="contact">
                <div className="orb"></div>
                <div className="wrap">
                    <div className="contact-grid">
                        <div>
                            <h2>Let's<br />have a <em>chat</em>.</h2>
                        </div>
                        <div className="contact-side">
                            <a className="contact-email" href="mailto:hello@usamadesign.com?subject=Opportunity%20at%20your%20company">
                                hello@usamadesign.com <span className="arr">→</span>
                            </a>

                            <a className="resume-cta" href="/ResumeUIUX.pdf" target="_blank" rel="noopener noreferrer">
                                <span className="ic">PDF</span>
                                <span className="t">
                                    <small>Download · CV</small>
                                    <strong>Full CV — May 2026</strong>
                                </span>
                                <span className="arr">↓</span>
                            </a>

                            <div className="contact-meta">
                                <div><b>Response time</b>Within 24 hrs · Mon–Fri</div>
                                <div><b>Notice period</b>4 weeks</div>
                                <div><b>Time zone</b>UTC +05 · Lahore</div>
                                <div><b>Work auth</b>Open · Visa welcome</div>
                            </div>

                            <div className="socials">
                                <a href="https://www.linkedin.com/in/usamadesign/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
                                <a href="https://dribbble.com/uzahid231" target="_blank" rel="noopener noreferrer">Dribbble ↗</a>
                                <a href="https://www.instagram.com/usamauxdev/" target="_blank" rel="noopener noreferrer">Instagram ↗</a>
                            </div>
                        </div>
                    </div>

                   
                </div>
            </section>

            <footer className="site-foot">
                <div className="foot-inner">
                    <span>© {new Date().getFullYear()} Usama Zahid · All rights reserved</span>
                    <div className="foot-links">
                        <a href="#top">Top ↑</a>
                        <a href="#work">My Work</a>
                        <a href="#experience">Experience</a>
                        <a href="#contact">Contact</a>
                    </div>
                    <span>Designed &amp; built by Usama</span>
                </div>
            </footer>
        </>
    )
}

export default Contact
