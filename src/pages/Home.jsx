import NowStrip from '../components/NowStrip'
import Hero from '../sections/Hero'
import Skills from '../sections/Skills'
import Experience from '../sections/Experience'
import Projects from '../sections/Projects'
import Freelance from '../sections/Freelance'
import Testimonials from '../sections/Testimonials'
import Writing from '../sections/Writing'
import Contact from '../sections/Contact'

export default function Home() {
  return (
    <main>
      <NowStrip />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Freelance />
      <Testimonials />
      <Writing />
      <Contact />
    </main>
  )
}
