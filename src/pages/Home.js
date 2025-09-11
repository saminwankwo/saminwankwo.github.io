import React from 'react'
import Header from '../components/Header'
import Footer from "../components/Footer";
import img from '../profile.png'
import { useState, useEffect } from "react"
import Placeholder from "../img-placeholder.webp"
import HomePost from '../components/Home';
import Skills from '../components/Skills';
import FeaturedProjects from '../components/FeaturedProjects';

const Home = () => {
    const [items, setItems] = useState([])

    const [user] = useState("saminwankwo")


  useEffect(() => {
    const fetchRepos = async () => {
      const res = await fetch(
        `https://api.github.com/users/${user}/repos?per_page=8&sort=updated`

      )
      const data = await res.json()
      setItems(data)
    }

    fetchRepos()
  }, [user])

  return (
    <>
    <Header />
    {/* <!-- About me, Bio section begins --> */}
        {/* <section className="about-me-section p-3 p-lg-5 theme-bg-light"> */}
        <div className='container'>
          <HomePost />

        </div>
            {/* <div className="container">
                <div className="profile-teaser media flex-column flex-lg-row">
                    <div className="media-body">
                        <h2 className="name font-weight-bold mb-1">Nwankwo Samuel</h2>
                        <div className="tagline mb-3">Software Developer</div>
                        <div className="bio mb-4">I'm a software developer with expertise in building complicated, scalable online and mobile applications from the front end to the back end. Would you like to know if I can assist you with your project? Check out my project <a className="link-on-bg" href="portfolio.html">portfolio</a> and <a className="link-on-bg" href="resume.html">online resume</a>.</div>
                        <div className="mb-4">
                            <a className="btn btn-primary mr-2 mb-3" href="/portfolio"><i className="fas fa-arrow-alt-circle-right mr-2"></i><span className="d-none d-md-inline">View</span> Portfolio</a>
                            <a className="btn btn-secondary mb-3" href="/resume"><i className="fas fa-file-alt mr-2"></i><span className="d-none d-md-inline">View</span> Resume</a>
                        </div>
                    </div>
                    <img className="profile-image mb-3 mb-lg-0 ml-lg-5 mr-md-0" src={img} alt=" Nwankwo samuel's profile, nwankwo samuel's personal website"/>
                </div>
            </div> */}
        {/* </section> */}
        {/* <!-- End of about me, Bio section --> */}
        

        {/* <!-- My Skill Set --> */}
        <section className="overview-section p-3 p-lg-5">
            <Skills />
        </section>
        {/* <!-- End of Skill set section--> */}
        
        <div className="container"><hr/></div>
        
        {/* <!-- Project Section Begins --> */}
        <section className="featured-section p-3 p-lg-5">

            <FeaturedProjects/>
         
        </section>

    <Footer/>
    </>
  )
}

export default Home