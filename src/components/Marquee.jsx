import React from 'react'

const items = [
    { text: 'Kontest', cls: 'italic' },
    { text: 'IELTS PREP HUB', cls: 'sans' },
    { text: 'Jay Shetty Site', cls: '' },
    { text: 'FITNESS · SAAS', cls: 'mono' },
    { text: 'Freelance', cls: 'italic' },
    { text: 'EDU TECH', cls: 'sans' },
    { text: 'Brand Identities', cls: '' },
    { text: '[ DESIGN SYSTEMS ]', cls: 'mono' },
    { text: 'Dashboards', cls: 'italic' },
    { text: 'MOTIVATIONAL', cls: 'sans' },
    { text: 'Mobile UX', cls: '' },
    { text: 'LANDING PAGES', cls: 'mono' },
]

const Marquee = () => {
    const all = [...items, ...items]
    return (
        <section className="marquee" aria-label="Worked with">
            <span className="marquee-label">§ 01 — Worked on</span>
            <div className="marquee-track">
                {all.map((it, i) => (
                    <React.Fragment key={i}>
                        <span className={`logo ${it.cls}`}>{it.text}</span>
                        <span className="logo">●</span>
                    </React.Fragment>
                ))}
            </div>
        </section>
    )
}

export default Marquee
