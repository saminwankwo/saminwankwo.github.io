import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React, { Suspense, lazy } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
const Home = lazy(() => import('./pages/Home'))
const Portfolio = lazy(() => import('./pages/Portfolio'))
const Blog = lazy(() => import('./pages/Blog'))
const Contact = lazy(() => import('./pages/Contact'))
const Resume = lazy(() => import('./pages/Resume'))
const NoPage = lazy(() => import('./pages/NoPage'))



function App() {
  return (
    <BrowserRouter>
        <Suspense fallback={<div className="text-center py-5">Loading…</div>}>
            <Routes>
                <Route index element={<Home />}/>
                <Route path="/portfolio" element={<Portfolio />}/>
                <Route path="/blog" element={<Blog />}/>
                <Route path="/contact" element={<Contact />}/>
                <Route path="/resume" element={<Resume />}/>
                <Route path='*' element={<NoPage/>}/>
            </Routes>
        </Suspense>
    </BrowserRouter>
  );
}

export default App;
