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
        `https://api.github.com/users/${user}/repos?per_page=8&sort=updated`

      )
      const data = await res.json()
      setItems(data)
    }

    fetchRepos()
  }, [user])

  return (
    <>
    <Header/>
    {/* <!-- intro plus button --> */}
        <section class="cta-section theme-bg-light py-5">
            <div class="container text-center single-col-max-width">
                <h2 class="heading">Portfolio</h2>
                <div class="intro">
                    <p>Welcome to my Portfolio. I'm taking on freelance work at the moment. Want some help building your software?</p>
                </div>
                <a class="btn btn-primary" href="contact.html" target="_blank"><i class="fas fa-paper-plane mr-2"></i>Hire Me</a>
            </div>
        </section>
        <section class="projects-list px-3 py-5 p-md-5">
            
            {/* <!-- Filter --> */}
            <div class="container">
                <div class="text-center">
                    <ul id="filters" class="filters mb-5 mx-auto pl-0">
                        <li class="type active mb-3 mb-lg-0" data-filter="*">All</li>
                        <li class="type  mb-3 mb-lg-0" data-filter=".webapp">We App</li> -->
                        <li class="type  mb-3 mb-lg-0" data-filter=".frontend">Frontend</li>
                        <li class="type  mb-3 mb-lg-0" data-filter=".backend">Backend</li>
                        <li class="type  mb-3 mb-lg-0" data-filter=".mobileapp">Mobile App</li>
                    </ul>
                </div>

                <div class="project-cards row isotope">
                    <div class="isotope-item col-md-6 mb-5 mobileapp frontend">
                        <div class="card project-card">
                            <div class="row no-gutters">
                                <div class="col-lg-4 card-img-holder">
                                    {/* <img src="assets/Imgs/project/ProfilePage.png" class="card-img" alt="image"> */}
                                </div>
                                <div class="col-lg-8">
                                    <div class="card-body">
                                        <h5 class="card-title"><a href="https://saminwankwo.github.io" class="theme-link" target="_blank">My Portfolio Page</a></h5>
                                        <p class="card-text">Designed in HTML CSS and Javascript, A simple site that describes who I am,what I do, And various way to contact me.</p>
                                    </div>
                                </div>
                            </div>
                             <div class="link-mask">
                                <a class="link-mask-link" href="https://saminwankwo.github.io"></a>
                                <div class="link-mask-text">
                                    <a class="btn btn-secondary" href="https://saminwankwo.github.io">
                                        <i class="fas fa-eye mr-2"></i>View Case Study
                                    </a>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
                
        </section>

    <Footer/>
    </>
  )
}

export default Portfolio