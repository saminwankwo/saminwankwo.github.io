import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <>
      <Header />
	  		{/* <!-- Main Wrapper Content Begins  --> */}

			<section className="cta-section theme-bg-light py-5">
				<div className="container text-center single-col-max-width">
					<h2 className="heading">Contact Me</h2>
					</div>
			</section>

			{/* <!-- Contact Form begins --> */}
        	<div className="container px-3 px-lg-5">
            	<article className="resume-wrapper mx-auto theme-bg-light p-4 mb-4 my-4 shadow-lg">
					<div className=" theme-bg-light shadow-sm p-5 mb-4 bg-white p-5 m-5">
						<div className="text-center" style={{textAlign:"center",display:"flex",flexDirection:"column"}}>
							<a href="#"><i className="fas fa-coffee fa-5x"></i></a>
							<h5>Collaboration</h5>
							You have a project and you think I can help
							<span> <a href="mailto:nwankwosami@gmail.com"> <i className="far fa-envelope fa-lg"></i> nwankwosami@gmail.com</a></span>
						</div>
					</div>

                <div className="theme-bg-light shadow-sm p-5 mb-4 bg-white p-5 m-5">
                    <div className="text-center" style={{textAlign:"center",display:"flex",flexDirection:"column"}}>
                        <a href="#"><i className="fas fa-paper-plane mr-2 fa-5x"></i></a>
                            <h5>Hire Me</h5>
                            Interested in hiring me for your project
                        <span><a href="mailto:nwankwosami@gmail.com"><i className="far fa-envelope fa-lg"></i> nwankwosami@gmail.com</a></span>
                        <span> <span>You can also checkout my <a href="/resume">Resume</a></span></span>
                    </div>
                </div>

                <div className="theme-bg-light shadow-sm p-5 mb-4 bg-white p-5 m-5">
                    <div className="text-center" style={{textAlign:"center",display:"flex",flexDirection:"column"}}>
                        <a href="#"><i className="fas fa-chalkboard-teacher  fa-5x"></i></a>
                        <h5>Mentorship</h5>
                            You can contact me if you need help learning web development or android app development
                        <span><a href="mailto:nwankwosami@gmail.com"><i className="far fa-envelope fa-lg"></i> nwankwosami@gmail.com</a></span>
                        <span><a className="twitter" href="https://www.twitter.com/saminwankwo"><i className="fab fa-twitter fa-fw fa-lg"></i>@saminwankwo</a> </span>
                    </div>
                </div>

                <div className="theme-bg-light shadow-sm p-5 mb-4 bg-white p-5 m-5">
                    <div className="text-center" style={{textAlign:"center",display:"flex",flexDirection:"column"}}>
                        <a href="#"><i className="fas fa-address-card fa-5x"></i></a>
                        <h5>Just Want to Connect</h5>
                        <p>Or Maybe You just want to be my friend, connect with me on the social media networks.</p>
                        <ul className="list-inline mb-0">
                            <li className="list-inline-item mb-3"><a className="twitter" href="https://www.twitter.com/saminwankwo"><i className="fab fa-twitter fa-fw fa-lg"></i></a></li>
                            <li className="list-inline-item mb-3"><a className="linkedin" href="https://www.linkedin.com/in/saminwankwo/"><i className="fab fa-linkedin-in fa-fw fa-lg"></i></a> </li>
                            <li className="list-inline-item mb-3"><a className="github" href="https://github.com/saminwankwo"><i className="fab fa-github-alt fa-fw fa-lg"></i></a></li>
                            <li className="list-inline-item"><a className="instagram" href="https://www.instagram.com/saminwankwo/"><i className="fab fa-instagram fa-fw fa-lg"></i></a></li>
                            <li className="list-inline-item"><a href="https://t.me/saminwankwo"><i className="fab fa-telegram fa-fw fa-lg"></i></a></li>
                            <li className="list-inline-item mb-3"><a className="medium" href="https://medium.com/@nwankwosami"><i className="fab fa-medium-m fa-fw fa-lg"></i></a></li>
                            <li className="list-inline-item mb-3"><a className="medium" href="https://hashnode.com/@saminwankwo"><i className="fab fa-hashnode fa-fw fa-lg"></i></a></li>
                            <li className="list-inline-item mb-3"><a className="codepen" href="https://codepen.io/saminwankwo"><i className="fab fa-codepen fa-fw fa-lg"></i></a></li> 
                            <li className="list-inline-item mb-3"><a className="facebook" href="https://web.facebook.com/nwankwo.samuel"><i className="fab fa-facebook-f fa-fw fa-lg"></i></a></li>
                        </ul>
                    </div>
                </div>
            </article>
        </div>
      <Footer />
    </>
  )
}

export default Contact