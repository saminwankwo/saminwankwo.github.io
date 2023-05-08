import React from 'react'
import { useState, useEffect } from "react"
import Header from '../components/Header'
import Footer from "../components/Footer";


const Portfolio = () => {
    const [items, setItems] = useState([])

    const [user] = useState("saminwankwo")


  useEffect(() => {
    const fetchRepos = async () => {
      const res = await fetch(
        `https://api.github.com/users/${user}/repos?&sort=updated&direction=desc`

      )
      const data = await res.json()
      setItems(data)
      console.log(data)
    }

    fetchRepos()
  }, [user])

  return (
    <>
    <Header/>
    {/* <!-- intro plus button --> */}
        <section className="cta-section theme-bg-light py-5">
            <div className="container text-center single-col-max-width">
                <h2 className="heading">Portfolio</h2>
                <div className="intro">
                    <p>Welcome to my Portfolio. I'm taking on freelance work at the moment. Want some help building your software?</p>
                </div>
                <a className="btn btn-primary" href="/contact" target="_blank"><i className="fas fa-paper-plane mr-2"></i>Hire Me</a>
            </div>
        </section>
        <section className="projects-list px-3 py-5 p-md-5">
            
            {/* <!-- Filter --> */}
            <div className="container">
                <div className="text-center">
                    <ul className="filters mb-5 mx-auto pl-0" role="tablist" id="filters">
                        <li className="type active mb-3 mb-lg-0" data-filter=".tab1">
                            <a className="nav-link active show r-20" id="w3--tab1" data-toggle="tab" href="#w3-tab1" role="tab" aria-controls="tab1" aria-expanded="true" aria-selected="true">Projects</a>
                        </li>

                        <li className="type  mb-3 mb-lg-0" data-filter=".tab2">
                            <a className="nav-link r-20" id="w3--tab2" data-toggle="tab" href="#w3-tab2" role="tab" aria-controls="tab2" aria-selected="false">Github</a>
                        </li>
                        {/* <li className="type active mb-3 mb-lg-0" data-filter="projects" data-toggle = "tab"  id ="tab1">Projects</li>
                        <li className="nav-link type  mb-3 mb-lg-0" data-filter="webapp">github</li>*/ }
                    </ul>
                </div>

                <div className="tab-pane fade show active" id="w3-tab1" role="tabpanel" aria-labelledby="w3-tab1">
                <div className="project-cards row isotope project">
                    <div className="isotope-item col-md-6 mb-5 project">
                        oficepro dem group
                    </div>
                    <div className="isotope-item col-md-6 mb-5">
                        something
                    </div>
                </div>

                <div className="project-cards row isotope webapp">
                    <div className="isotope-item col-md-6 mb-5 project">
                        oficepro dem group
                    </div>
                    <div className="isotope-item col-md-6 mb-5">
                        something
                    </div>
                </div>

                </div>
                <div class="tab-pane fade" id="w3-tab2" role="tabpanel" aria-labelledby="w3-tab2">
                    <div class="project-cards row isotope">
                    {items.map((item) => (
                        <>
                        <div class="isotope-item col-md-6 mb-5 mobileapp frontend">
                            <div class="card project-card" key={item.id}>
                                <div class="row no-gutters">
                                    <div class="col-lg-4 card-img-holder">
                                        {/* <img src="assets/Imgs/project/ProfilePage.png" class="card-img" alt="image"> */}
                                    </div>
                                    <div class="col-lg-8">
                                        <div class="card-body">
                                            <h5 class="card-title"><a href="#" class="theme-link" target="_blank">{item.name}</a></h5>
                                            <p class="card-text">{item.description}</p>
                                        </div>

                                    </div>
                                </div>
                                 <div class="link-mask">
                                    {/* <a class="link-mask-link" href="https://saminwankwo.github.io"></a> */}
                                    <div class="link-mask-text">
                                        <a class="btn btn-secondary" href={item.html_url}>
                                            <i class="fas fa-eye mr-2"></i>Open in github
                                        </a>
                                    </div>
                                </div> 
                            </div>
                        </div>

                        
                        </>
                    ))}
                    </div>
                </div>

                {/* <div className="project-cards row isotope project">
                    <div className="isotope-item col-md-6 mb-5 project">
                        oficepro dem group
                    </div>
                    <div className="isotope-item col-md-6 mb-5">
                        something
                    </div>
                </div>

                <div className="project-cards row isotope webapp">
                    <div className="isotope-item col-md-6 mb-5 project">
                        oficepro dem group
                    </div>
                    <div className="isotope-item col-md-6 mb-5">
                        something
                    </div>
                </div> */}
            </div>
                
        </section>

    <Footer/>
    </>
  )
}

export default Portfolio