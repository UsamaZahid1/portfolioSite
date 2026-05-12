import React from 'react'

const roles = [
    {
        years: { tag: 'Current', range: 'Feb 2026 — Present', span: '~3 mo' },
        title: 'Senior UI/UX Designer',
        company: 'Savvy Programmers',
        loc: 'Lahore, PK',
        summary: 'Designing user-friendly UI/UX solutions for eCommerce web and mobile applications, focused on customer experience and conversion.',
        bullets: [
            'Collaborate with developers and stakeholders to create responsive interfaces.',
            'Own user flows, wireframes, and high-fidelity designs in Figma.',
        ],
        stack: ['Figma', 'eCommerce', 'Web', 'Mobile'],
    },
    {
        years: { tag: '2024 — 25', range: 'Nov 2024 — Dec 2025', span: '~14 mo' },
        title: 'Senior UI/UX Designer',
        company: 'Keeklr',
        loc: 'Malaysia · Remote',
        summary: 'Led end-to-end design for client-focused SaaS products — user flows, wireframes, and high-fidelity prototypes.',
        bullets: [
            'Improved task completion rate by 30% through usability-driven redesigns.',
            'Partnered with developers and product owners to deliver against business goals and user expectations.',
        ],
        stack: ['Figma', 'SaaS', 'Prototyping'],
    },
    {
        years: { tag: '2024', range: 'Aug 2024 — Nov 2024', span: '~4 mo' },
        title: 'Senior UI/UX Designer',
        company: 'Podify',
        loc: 'United States · Remote',
        summary: 'Designed web and mobile experiences for a podcast agency, sharpening onboarding and engagement.',
        bullets: [
            'Optimized website flows, leading to a 20% faster user setup process.',
        ],
        stack: ['Figma', 'Web', 'Mobile'],
    },
    {
        years: { tag: '2022 — 24', range: 'Jan 2022 — Feb 2024', span: '~2 yrs' },
        title: 'Lead UI/UX Designer',
        company: 'Digit Solution',
        loc: 'Islamabad, PK',
        summary: 'Promoted from Senior to Lead. Managed a team of 3 junior designers; delivered enterprise dashboards and mobile apps.',
        bullets: [
            'Spearheaded landing page redesigns that improved conversion by 28%.',
            'Standardized the design system and workflows to improve collaboration and reduce design time.',
            'Earned high stakeholder satisfaction across enterprise engagements.',
        ],
        stack: ['Figma', 'Dashboards', 'Design Systems', 'Mobile'],
    },
    {
        years: { tag: '2021', range: 'Jan 2021 — Dec 2021', span: '1 yr' },
        title: 'UI/UX Designer',
        company: 'Exytex Technologies',
        loc: 'Wah Cantt, PK',
        summary: 'Translated product requirements into low- and high-fidelity designs in Adobe XD and Figma.',
        bullets: [
            'Redesigned landing pages, achieving measurable conversion rate improvements.',
        ],
        stack: ['Adobe XD', 'Figma', 'Landing'],
    },
    {
        years: { tag: '2020', range: 'Jan 2020 — Dec 2020', span: '1 yr' },
        title: 'UI/UX Designer',
        company: 'Exeloft Technologies',
        loc: 'Wah Cantt, PK',
        summary: 'First product-design role. Partnered with developers to implement new features and maintain product usability.',
        bullets: [
            'Conducted user research and usability testing for multiple apps.',
        ],
        stack: ['Figma', 'Research', 'Usability'],
    },
]

const Experience = () => {
    return (
        <section id="experience" className="exp">
            <div className="wrap">
                <div className="section-head reveal is-in">
                    <div className="label">§ 04 — Experience</div>
                    <h2>Where I've <em>worked</em>,<br />in plain prose.</h2>
                    <div className="aside">Reverse chronological. Full CV PDF available on request.</div>
                </div>

                <div className="exp-list reveal is-in">
                    {roles.map((r, i) => (
                        <article key={i} className="exp-row">
                            <div className="exp-years">
                                <b>{r.years.tag}</b>
                                {r.years.range && <span>{r.years.range}</span>}
                                {r.years.span && <span>{r.years.span}</span>}
                            </div>
                            <div className="exp-role">
                                <h4>{r.title}</h4>
                                <div className="company">
                                    <span>{r.company}</span>
                                    <span className="loc">· {r.loc}</span>
                                </div>
                            </div>
                            <div className="exp-detail">
                                <p>{r.summary}</p>
                                {r.bullets && r.bullets.length > 0 && (
                                    <ul>
                                        {r.bullets.map((b, j) => <li key={j}>{b}</li>)}
                                    </ul>
                                )}
                            </div>
                            <div className="exp-stack">
                                {r.stack.map((t) => <span key={t} className="tg">{t}</span>)}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience
