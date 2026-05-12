import React, { useEffect, useState } from 'react'
import { useTheme } from './ThemeContext'

const sections = [
    { id: 'top', label: 'Overview' },
    { id: 'skills', label: 'Skills' },
    { id: 'work', label: 'My Work' },
    { id: 'experience', label: 'Experience' },
    { id: 'about', label: 'About' },
]

const Header = () => {
    const { theme, setTheme } = useTheme()
    const [scrolled, setScrolled] = useState(false)
    const [active, setActive] = useState('top')
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 6)
            let next = 'top'
            for (const s of sections.concat([{ id: 'contact' }])) {
                const el = document.getElementById(s.id)
                if (!el) continue
                if (el.getBoundingClientRect().top < window.innerHeight * 0.35) next = s.id
            }
            setActive(next)
        }
        window.addEventListener('scroll', onScroll, { passive: true })
        onScroll()
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const scrollTo = (id) => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
        setOpen(false)
    }

    return (
        <nav className={`nav${scrolled ? ' is-scrolled' : ''}`}>
            <div className="nav-inner">
                <a className="brand" href="#top" onClick={(e) => { e.preventDefault(); scrollTo('top') }} aria-label="Usama — Home">
                    <div className="brand-mark">U</div>
                    <div className="brand-text">
                        <span>Usama</span>
                        <small>CV · est. 2020</small>
                    </div>
                </a>

                <div className="nav-links">
                    {sections.map((s) => (
                        <a
                            key={s.id}
                            className={`nav-link${active === s.id ? ' is-active' : ''}`}
                            href={`#${s.id}`}
                            onClick={(e) => { e.preventDefault(); scrollTo(s.id) }}
                        >
                            <span className="dot"></span>{s.label}
                        </a>
                    ))}
                    <div className="nav-status"><span className="status-dot"></span>Actively interviewing</div>
                </div>

                <div className="theme-toggle" role="tablist" aria-label="Theme">
                    <span className="thumb" aria-hidden="true"></span>
                    <button onClick={() => setTheme('light')} aria-pressed={theme === 'light'} aria-label="Light theme" title="Light theme">
                        <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="4" /><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4l1.4-1.4M17 7l1.4-1.4" /></svg>
                    </button>
                    <button onClick={() => setTheme('dark')} aria-pressed={theme === 'dark'} aria-label="Dark theme" title="Dark theme">
                        <svg viewBox="0 0 24 24"><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z" /></svg>
                    </button>
                </div>

                <a className="cta" href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('contact') }}>
                    Get in touch <span className="arr">→</span>
                </a>

                <button
                    className={`nav-toggle${open ? ' mobile-open' : ''}`}
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle menu"
                >
                    {open ? 'Close' : 'Menu'}
                </button>
            </div>

            {open && (
                <div className="nav-mobile-panel">
                    {sections.map((s) => (
                        <a key={s.id} href={`#${s.id}`} onClick={(e) => { e.preventDefault(); scrollTo(s.id) }}>{s.label}</a>
                    ))}
                    <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('contact') }}>Contact</a>
                </div>
            )}
        </nav>
    )
}

export default Header
