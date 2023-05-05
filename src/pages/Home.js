import React from 'react'
import Header from '../components/Header'
import Footer from "../components/Footer";
import img from '../profile.png'
import { useState, useEffect } from "react"
import Placeholder from "../img-placeholder.webp"

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
        <section className="about-me-section p-3 p-lg-5 theme-bg-light">
            <div className="container">
                <div className="profile-teaser media flex-column flex-lg-row">
                    <div className="media-body">
                        <h2 className="name font-weight-bold mb-1">Nwankwo Samuel</h2>
                        <div className="tagline mb-3">Software Developer</div>
                        <div className="bio mb-4">I'm a software developer with expertise in building complicated, scalable online and mobile applications from the front end to the back end. Would you like to know if I can assist you with your project? Check out my project <a className="link-on-bg" href="portfolio.html">portfolio</a> and <a className="link-on-bg" href="resume.html">online resume</a>.</div>
                        <div className="mb-4">
                            <a className="btn btn-primary mr-2 mb-3" href="portfolio.html"><i className="fas fa-arrow-alt-circle-right mr-2"></i><span className="d-none d-md-inline">View</span> Portfolio</a>
                            <a className="btn btn-secondary mb-3" href="/resume"><i className="fas fa-file-alt mr-2"></i><span className="d-none d-md-inline">View</span> Resume</a>
                        </div>
                    </div>
                    <img className="profile-image mb-3 mb-lg-0 ml-lg-5 mr-md-0" src={img} alt=" Nwankwo samuel's profile picture for nwankwo samuel's personal website"/>
                </div>
            </div>
        </section>
        {/* <!-- End of about me, Bio section --> */}
        

        {/* <!-- My Skill Set --> */}
        <section className="overview-section p-3 p-lg-5">
            <div className="container">
                <h2 className="section-title font-weight-bold mb-3">What I do</h2>
                <div className="section-intro mb-5">I've been developing software for companies worldwide for a couple of years. An overview of my primary technical skill sets and the technologies I employ is provided below. Interested in learning more about my experience? Check out my <a href="resume.html">resume</a> and <a href="portfolio.html">project portfolio</a>.

                <div className="row">

                    {/* <!-- Skill one --> */}
                    <div className="item col-6 col-lg-3">
                        <div className="item-inner">
                            <div className="item-icon"><i className="fab fa-js-square"></i><i className="fab fa-expressjs mr-2"></i><i className="fab fa-react mr-2"><i className="fab fa-node-js"></i></i></div>
                            <h3 className="item-title">Vanilla JavaScript &amp; Express.js &amp; React &amp; Node.js</h3>
                            <div className="item-desc">I build scalable webpages .</div>
                        </div>
                    </div>

                    {/* <!-- Skill four --> */}
                    <div className="item col-6 col-lg-3">
                        <div className="item-inner">
                            <div className="item-icon"><i className="fab fa-php"></i> <i className="fab fa-laravel"></i></div>
                            <h3 className="item-title">PHP &amp; Laravel</h3>
                        </div>
                    </div>


                    {/* <!-- Skill Six --> */}
                    <div className="item col-6 col-lg-3">
                        <div className="item-inner">
                            <div className="item-icon"><i className="fab fa-html5 mr-2"></i><i className="fab fa-css3-alt"></i> <i className="fab fa-bootstrap"></i></div>
                            <h3 className="item-title">HTML, CSS &amp; Bootstrap &amp; Sass &amp; LESS</h3>
                        </div>
                    </div>

                    {/* <!-- Skill eight --> */}
                    <div className="item col-6 col-lg-3">
                        <div className="item-inner">
                            <div className="item-icon"><i className="fab fa-github"></i> <i className="fab fa-linux"></i></div>
                            <h3 className="item-title">git &amp; linux</h3>
                        </div>
                    </div>

                    <div className="item col-6 col-lg-3">
                        <div className="item-inner">
                            <div className="item-icon"><i className="fab fa-android"> </i><i className="fab fa-java"></i></div>
                            <h3 className="item-title">Java </h3>
                        </div>
                    </div>
                    
                </div>
                <div className="text-center py-3"><a href="/contact" className="btn btn-primary"><i className="fas fa-paper-plane mr-2"></i>Hire Me</a></div>
                    
            </div></div>
        </section>
        {/* <!-- End of Skill set section--> */}
        
        <div className="container"><hr/></div>
        
        {/* <!-- Project Section Begins --> */}
        <section className="featured-section p-3 p-lg-5">
            <div className="container">
                <h2 className="section-title font-weight-bold mb-5">Featured Projects</h2>
                
                <div className="row">
          {items.map((item) => (

               <div className="col-md-6 mb-5">
               <div className="card project-card">
                   <div className="row no-gutters">
                       <div className="col-lg-4 card-img-holder">
                           <img src={Placeholder} className="card-img" alt={item.description}/>
                       </div>
                       <div className="col-lg-8">
                           <div className="card-body">
                               <h5 className="card-title"><a href="#" className="theme-link">{item.name}</a></h5>
                               <p className="card-text">{item.description}</p>
                               <a href={item.html_url} rel='noreferrer' target='_blank'><i className="fab fa-github-alt fa-fw"></i></a>
                           </div>
                       </div>
                   </div>
                   {/* <div className="link-mask">
                       <a className="link-mask-link" href="project.html"></a>
                       <div className="link-mask-text">
                           <a className="btn btn-secondary" href="project.html"><i className="fas fa-eye mr-2"></i>View Case Study</a>
                       </div>
                   </div> */}
               </div>
           </div>
            // <Profile key={item.id} {...item} />
          ))}
      
                    
                </div>
                <div className="text-center py-3"><a href="/portfolio" className="btn btn-primary"><i className="fas fa-arrow-alt-circle-right mr-2"></i>View Portfolio</a></div>
                    
            </div>
        </section>

    <Footer/>
    </>
  )
}

export default Home