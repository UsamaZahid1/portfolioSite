import React, { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext({ theme: 'light', setTheme: () => {} })

export const ThemeProvider = ({ children }) => {
    const [theme, setThemeState] = useState('light')

    useEffect(() => {
        try {
            const stored = localStorage.getItem('usama-theme')
            if (stored === 'light' || stored === 'dark') {
                setThemeState(stored)
                document.documentElement.setAttribute('data-theme', stored)
                return
            }
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                setThemeState('dark')
                document.documentElement.setAttribute('data-theme', 'dark')
                return
            }
            document.documentElement.setAttribute('data-theme', 'light')
        } catch (e) {
            document.documentElement.setAttribute('data-theme', 'light')
        }
    }, [])

    const setTheme = (t) => {
        setThemeState(t)
        document.documentElement.setAttribute('data-theme', t)
        try { localStorage.setItem('usama-theme', t) } catch (e) {}
    }

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext)
