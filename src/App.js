import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React, { Suspense, lazy, createContext, useEffect, useMemo, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
const Home = lazy(() => import('./pages/Home'))
const Portfolio = lazy(() => import('./pages/Portfolio'))
const Blog = lazy(() => import('./pages/Blog'))
const Contact = lazy(() => import('./pages/Contact'))
const Resume = lazy(() => import('./pages/Resume'))
const NoPage = lazy(() => import('./pages/NoPage'))

export const ThemeContext = createContext({ theme: 'dark', setTheme: () => {} })


function App() {
  const getInitialTheme = () => {
    const saved = localStorage.getItem('theme')
    if (saved === 'light' || saved === 'dark') return saved
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    return prefersDark ? 'dark' : 'light'
  }

  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    document.body.classList.toggle('light-mode', theme === 'light')
    localStorage.setItem('theme', theme)
  }, [theme])

  const value = useMemo(() => ({ theme, setTheme }), [theme])

  return (
    <ThemeContext.Provider value={value}>
      <BrowserRouter>
        <Suspense fallback={<div className="text-center py-5">Loading…</div>}>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/portfolio" element={<Portfolio />}/>
            <Route path="/blog" element={<Blog />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/resume" element={<Resume />}/>
            <Route path='*' element={<NoPage/>}/>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
