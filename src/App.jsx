import React, { lazy, Suspense, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Outlet, useLocation, Link } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Nav from '@layout/Nav'
import Footer from '@layout/Footer'
import BackToTop from '@ui/BackToTop'
import CustomCursor from '@ui/CustomCursor'
import PageWrapper from '@layout/PageWrapper'
import Skeleton from '@ui/Skeleton'
import Spinner from '@ui/Spinner'
import ErrorBoundary from '@ui/ErrorBoundary'
import Home from '@pages/Home'
import SkillsPage from '@pages/SkillsPage'
import ExperiencePage from '@pages/ExperiencePage'
import ProjectsPage from '@pages/ProjectsPage'
import FreelancePage from '@pages/FreelancePage'
import GitHubPage from '@pages/GitHubPage'
import ContactPage from '@pages/ContactPage'
import NotFound from '@pages/NotFound'
import { trackPageView } from '@lib/analytics'

const Blog = lazy(() => import('@pages/Blog'))
const BlogPost = lazy(() => import('@pages/BlogPost'))

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
    // SPA route changes are not a new document load — track them explicitly
    trackPageView(pathname)
  }, [pathname])
  return null
}

// Skeleton + spinner fallback instead of a blank full-screen div (Issue 23)
function RouteFallback() {
  return (
    <div className="route-fallback">
      <Spinner size={28} />
      <Skeleton height="2rem" width="min(320px, 60%)" />
      <Skeleton height="1rem" count={3} />
    </div>
  )
}

function RouteError({ title }) {
  return (
    <div className="route-error" role="alert">
      <p className="route-error__tag">// error</p>
      <h1 className="route-error__title">{title}</h1>
      <p className="route-error__desc">
        This section failed to load. It might be a temporary network issue.
      </p>
      <Link to="/" className="route-error__link">← Back to home</Link>
    </div>
  )
}

// Per-route boundaries so a failed blog chunk does not unmount the whole
// layout (Nav/Footer keep rendering) (Issue 23)
function BlogRoute() {
  return (
    <ErrorBoundary fallback={<RouteError title="Could not load the blog" />}>
      <Suspense fallback={<RouteFallback />}>
        <Blog />
      </Suspense>
    </ErrorBoundary>
  )
}

function BlogPostRoute() {
  return (
    <ErrorBoundary fallback={<RouteError title="Could not load this post" />}>
      <Suspense fallback={<RouteFallback />}>
        <BlogPost />
      </Suspense>
    </ErrorBoundary>
  )
}

function Layout() {
  const location = useLocation()
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Nav />
      <AnimatePresence mode="wait">
        <PageWrapper key={location.pathname}>
          <Suspense fallback={<RouteFallback />}>
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
          <Route path="blog" element={<BlogRoute />} />
          <Route path="blog/:slug" element={<BlogPostRoute />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
