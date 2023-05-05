import React from 'react'
import Profile from '../profile.png'

const navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark" >
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
	
			{/* <!-- about me --> */}
			<div id="navigation" className="collapse navbar-collapse flex-column" >
				<div className="profile-section pt-3 pt-lg-0">
					<img className="profile-image mb-3 rounded-circle mx-auto" src={Profile} alt="nwankwo samuel's website, portfolio display" />			
					<div className="bio mb-3" style={{textAlign:"center",display:"flex",flexDirection:"column"}}>
						<span>Hi, My name is Nwankwo Samuel </span>
						<span>Welcome to my Personal Website!</span>
					</div>
  
					{/* <!-- social media icons --> */}
					<ul className="social-list list-inline py-2 mx-auto">
						<li className="list-inline-item"><a href="https://www.twitter.com/saminwankwo" target ="_blank" rel ="noreferrer"><i className="fab fa-twitter fa-fw"></i></a></li>
						<li className="list-inline-item"><a href="https://www.linkedin.com/in/saminwankwo" target ="_blank" rel ="noreferrer"><i className="fab fa-linkedin-in fa-fw"></i></a></li>
						<li className="list-inline-item"><a href="https://www.github.com/saminwankwo" target ="_blank" rel ="noreferrer"><i className="fab fa-github-alt fa-fw"></i></a></li>
						<li className="list-inline-item"><a href="https://t.me/saminwankwo" target ="_blank" rel ="noreferrer"><i className="fab fa-telegram fa-fw"></i></a></li>
						<li className="list-inline-item"><a href="https://www.facebook.com/nwankwo.samuel" target ="_blank" rel ="noreferrer"><i className="fab fa-facebook fa-fw"></i></a></li>
					</ul>
					{/* <!-- End of social media icons --> */}
					<hr/>
				</div>
				{/* <!-- about me ends --> */}

				{/* <!-- Menu Options --> */}
				<ul className="navbar-nav flex-column text-left">
					<li className="nav-item active"><a className="nav-link" href="/"><i className="fas fa-user fa-fw mr-2"></i>About Me<span className="sr-only">(current)</span></a></li>
					<li className="nav-item"><a className="nav-link" href="/portfolio"><i className="fas fa-laptop-code fa-fw mr-2"></i>My Portfolio</a></li>
					<li className="nav-item"><a className="nav-link" href="/resume"><i className="fas fa-file-alt fa-fw mr-2"></i>Resume</a></li>
					<li className="nav-item"><a className="nav-link" href="/contact"><i className="fas fa-envelope-open-text fa-fw mr-2"></i>Contact</a></li>
					<li className="nav-item"><a className="nav-link" href="/blog"><i className="fas fa-blog fa-fw mr-2"></i>Blog</a></li>
				</ul>
				{/* <!-- End of menu options --> */}
	
				{/* <!-- Hire me Buton --> */}
				<div className="my-2"><a className="btn btn-primary" href="/contact" target="_blank"><i className="fas fa-paper-plane mr-2"></i>Hire Me</a></div>
	
				{/* <!-- Toggle buton --> */}
				<div className="dark-mode-toggle text-center w-100">
					<hr className="mb-4"/>
					<h4 className="toggle-name mb-3 "><i className="fas fa-adjust mr-1"></i>Dark Mode</h4>
					<input className="toggle" id="darkmode" type="checkbox"/><label className="toggle-btn mx-auto mb-0" for="darkmode"></label>
				</div>
			</div>
		</nav>
	)
}

export default navbar