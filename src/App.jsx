import React, { lazy, Suspense, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Nav from '@layout/Nav'
import Footer from '@layout/Footer'
import BackToTop from '@ui/BackToTop'
import CustomCursor from '@ui/CustomCursor'
import PageWrapper from '@layout/PageWrapper'
import Home from '@pages/Home'
import SkillsPage from '@pages/SkillsPage'
import ExperiencePage from '@pages/ExperiencePage'
import ProjectsPage from '@pages/ProjectsPage'
import FreelancePage from '@pages/FreelancePage'
import GitHubPage from '@pages/GitHubPage'
import ContactPage from '@pages/ContactPage'
import NotFound from '@pages/NotFound'

const Blog = lazy(() => import('@pages/Blog'))
const BlogPost = lazy(() => import('@pages/BlogPost'))

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function Layout() {
  const location = useLocation()
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Nav />
      <AnimatePresence mode="wait">
        <PageWrapper key={location.pathname}>
          <Suspense fallback={<div style={{ minHeight: '100vh', background: 'var(--bg)' }} />}>
            <Outlet />
          </Suspense>
        </PageWrapper>
      </AnimatePresence>
      <BackToTop />
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <CustomCursor />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="skills" element={<SkillsPage />} />
          <Route path="experience" element={<ExperiencePage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="freelance" element={<FreelancePage />} />
          <Route path="github" element={<GitHubPage />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:slug" element={<BlogPost />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
