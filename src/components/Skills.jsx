import React from 'react'

const cards = [
    {
        title: 'Product & UX',
        num: 'Core · 01 / 05',
        size: 'lg',
        rows: [
            ['User flows & IA', 92, '6y'],
            ['Wireframing & prototyping', 95, '6y'],
            ['User research & interviews', 78, '4y'],
            ['Usability testing', 75, '4y'],
            ['Conversion optimisation', 82, '5y'],
        ],
    },
    {
        title: 'Visual & UI',
        num: 'Core · 02 / 05',
        size: 'lg',
        rows: [
            ['UI design systems', 90, '5y'],
            ['Type & layout', 92, '6y'],
            ['Mobile UI', 94, '6y'],
            ['Iconography', 80, '5y'],
            ['Brand identity', 84, '5y'],
        ],
    },
    {
        title: 'Tools',
        num: 'Daily · 03 / 05',
        rows: [
            ['Figma · components, variants', 98, '6y'],
            ['Adobe XD · Sketch', 78, '4y'],
            ['Photoshop · Illustrator', 86, '6y'],
            ['Notion · Linear', 80, '3y'],
        ],
    },
    {
        title: 'Engineering literacy',
        num: 'Plus · 04 / 05',
        rows: [
            ['HTML / CSS / Tailwind', 90, '5y'],
            ['React · component APIs', 78, '3y'],
            ['JavaScript', 76, '4y'],
            ['Git · branching · PR review', 70, '3y'],
        ],
    },
    {
        title: 'Soft skills',
        num: 'Soft · 05 / 05',
        rows: [
            ['Cross-functional collaboration', 88, '6y'],
            ['Client communication', 90, '6y'],
            ['Mentoring junior designers', 74, '3y'],
            ['Design QA & handoff', 86, '5y'],
        ],
    },
]

const Skills = () => {
    return (
        <section id="skills" className="skills">
            <div className="wrap">
                <div className="section-head reveal is-in">
                    <div className="label">§ 02 — Skills</div>
                    <h2>What I <em>actually</em><br />do — daily.</h2>
                    <div className="aside">Years of practice in parentheses. Self-assessed — happy to whiteboard any of these on a call.</div>
                </div>

                <div className="skills-grid reveal is-in">
                    {cards.map((c) => (
                        <div key={c.title} className={`skill-card${c.size === 'lg' ? ' lg' : ''}`}>
                            <div className="skill-head">
                                <h3>{c.title}</h3>
                                <span className="num">{c.num}</span>
                            </div>
                            <div className="skill-list">
                                {c.rows.map(([name, pct, yrs]) => (
                                    <div key={name} className="skill-row">
                                        <span className="name">{name}</span>
                                        <div className="meter">
                                            <div className="meter-bar"><i style={{ width: `${pct}%` }} /></div>
                                            <span className="meter-yrs">{yrs}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills
