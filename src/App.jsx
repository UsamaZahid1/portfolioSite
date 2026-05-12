import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import KontestLandingPage from './pages/KontestLandingPage'
import KontestAppPage from './pages/KontestAppPage'
import JaySite from './pages/JaySite'
import UIUXallProjects from './pages/UIUXallProjects'
import IeltsProjectPage from './pages/IeltsProjectPage'
import ScrollToTop from './components/ScrollToTop'
import { ThemeProvider } from './components/ThemeContext'

const App = () => {
    return (
        <ThemeProvider>
            <ScrollToTop />
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/KontestLandingPage" element={<KontestLandingPage />} />
                <Route path="/KontestAppPage" element={<KontestAppPage />} />
                <Route path="/JaySite" element={<JaySite />} />
                <Route path="/IeltsProjectPage" element={<IeltsProjectPage />} />
                <Route path="/UIUXallProjects" element={<UIUXallProjects />} />
            </Routes>
        </ThemeProvider>
    )
}

export default App
