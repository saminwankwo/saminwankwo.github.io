import React from 'react'
import Header from '../components/Header'
import Footer from "../components/Footer";


const Resume = () => {
  return (
    <>
    <Header/>
    {/* <!-- button for offline download --> */}
      <section className ="cta-section theme-bg-light py-5">
            <div className ="container text-center single-col-max-width">
                <h2 className ="heading mb-3">Online Resume</h2>
                <a className ="btn btn-primary" href="/assets/Resume.pdf" target="_blank" download="001NwankwoSamuelResume.pdf"><i className="fas fa-file-pdf mr-2"></i>Download PDF Version</a>
            </div>
        </section>

        {/* <!-- end of button download --> */}
        
        {/* <!-- Resume starts --> */}
        <div className="container px-3 px-lg-5" style={{textAlign:"justify"}}>
            <article className="resume-wrapper mx-auto theme-bg-light p-5 mb-5 my-5 shadow-lg">
                
                {/* <!-- resume header --> */}
                <div className="resume-header">
                    <div className="row align-items-center">
                        <div className="resume-title col-12 col-md-6 col-lg-8 col-xl-9">
                            <h2 className="resume-name mb-0 text-uppercase">Nwankwo Samuel</h2>
                            <div className="resume-tagline mb-3 mb-md-0">Software Developer</div>
                        </div>
                        <div className="resume-contact col-12 col-md-6 col-lg-4 col-xl-3">
                            <ul className="list-unstyled mb-0">
                                <li className="mb-2"><i className="fas fa-phone-square fa-fw fa-lg mr-2 "></i><a className="resume-link" href="tel:+2348058643829">+234 805 864 3829</a></li>
                                <li className="mb-2"><i className="fas fa-envelope-square fa-fw fa-lg mr-2"></i><a className="resume-link" href="mailto:nwankwosami@gmail.com">nwankwosami@gmail.com</a></li>
                                <li className="mb-2"><i className="fas fa-globe fa-fw fa-lg mr-2"></i><a className="resume-link" href="https://saminwankwo.netlify.com" target="_blank" rel="noreferrer">www.saminwankwo.netlify.com</a></li>
                                <li className="mb-0"><i className="fas fa-map-marker-alt fa-fw fa-lg mr-2"></i>Nigeria</li>
                            </ul>
                        </div>
                    </div>
                            
                </div>
                {/* <!-- End of resume header --> */}
                <hr></hr>
                
                {/* <!-- Resume intro --> */}
                <div className="resume-intro py-3">
                    <div className="media flex-column flex-md-row align-items-center">
                        {/* <img className="resume-profile-image mb-3 mb-md-0 mr-md-5 ml-md-0 rounded mx-auto" src="assets/Imgs/me.jpg" alt="Resume Image for Nwankwo samuel's website"> */}
                        <div className="media-body text-left">
                            <p className="mb-0"> A programmer who is effective at working in teams, advancing projects toward project goals, quality assurance, and on-time delivery.
                                    Front end and back end development is the area of expertise for a web developer. An experienced manager who is familiar with every phase of the development cycle for dynamic web projects.
                                    Professional software developer with technical leadership, communication, and presentation skills. experience with the entire project life cycle, including design, implementation, and integration.</p>
                        </div>
                    </div>
                </div>
                {/* <!-- end of Resume intro --> */}
                <hr/>

                {/* <!-- Resume body --> */}
                <div className="resume-body">
                    <div className="row">
                        <div className="resume-main col-12 col-lg-8 col-xl-9 pr-0 pr-lg-5" >
                            
                            {/* <!-- Work experience section --> */}
                            <section className="work-section py-3">
                                <h3 className="text-uppercase resume-section-heading mb-4">Work Experiences</h3>
                                
                                {/* <!-- Role number one --> */}
                                <div className="item mb-3">
                                    <div className="item-heading row align-items-center mb-2">
                                        <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">Backend Developer</h4>
                                        <div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-left text-md-right">Credib.io | August 2022 - Present</div>
                                    </div>
                                    <div className="item-content">
                                        <p></p>
                                        <ul className="resume-list">
                                            <li>Develop and maintain the server-side logic and architecture of web applications</li>
                                            <li>Design and implement APIs and data models for efficient data retrieval and manipulation</li>
                                            <li>Ensure the security, scalability, and performance of the backend infrastructure</li>
                                            <li>Integrate with front-end frameworks and libraries to provide a seamless user experience</li>
                                            <li>Monitor and troubleshoot issues with the backend infrastructure</li>
                                            <li>Collaborate with other developers and stakeholders to ensure the overall success of the project</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="item mb-3">
                                    <div className="item-heading row align-items-center mb-2">
                                        <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">Software Developer</h4>
                                        <div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-left text-md-right">Emblic Technologies | March 2020 - July 2022</div>
                                    </div>
                                    <div className="item-content">
                                        <p></p>
                                        <ul className="resume-list">
                                            <li>Collaborating with stakeholders to identify business requirements and user needs</li>
                                            <li>Designing software solutions that meet those requirements and needs</li>
                                            <li>Writing high-quality, efficient, and maintainable code</li>
                                            <li>Testing and debugging software to ensure that it functions as expected</li>
                                            <li>Integrating software with other systems and applications as necessary</li>
                                            <li>Documenting software design and functionality for reference by other developers, users, and stakeholders</li>
                                            <li>Keeping up to date with new and emerging software technologies and trends</li>
                                            <li>Participating in code reviews and other quality assurance processes to ensure that software meets established standards</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="item mb-3">
                                    <div className="item-heading row align-items-center mb-2">
                                        <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">Frontend Developer</h4>
                                        <div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-left text-md-right">Softicu | May 2019 - December 2019</div>
                                    </div>
                                    <div className="item-content">
                                        <p></p>
                                        <ul className="resume-list">
                                            <li>Analyzing information to recommend and plan the installation of new systems or modifications of an existing system.</li>
                                            <li>Working with customers or departments on technical issues including software system design and maintenance.</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* <!-- Role number two --> */}
                                <div className="item mb-3">
                                    <div className="item-heading row align-items-center mb-2">
                                        <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">Intern/Instructor</h4>
                                        <div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-left text-md-right">Aspire Labs | APRIL - OCT 2018</div>
                                    </div>
                                    <div className="item-content">
                                        <p>As Part of qualification for a degree in computer science, I was an Intern at AspireLabs, A coding school, Here I </p>
                                        <ul className="resume-list">
                                            <li>Taught programming and the basic principle of computer science to children between the ages of 6 - 18.</li>
                                            <li>Also wrote and implemented script for internal application mostly on frontend</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* <!-- Role number three --> */}
                                <div className="item mb-3">
                                    <div className="item-heading row align-items-center mb-2">
                                        <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">Volunteer</h4>
                                        <div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-left text-md-right">CodeSpark | OCTOBER 2018</div>
                                    </div>
                                    <div className="item-content">
                                        <p>Volunteered with CodeSpark for google Africa code week,</p> 
                                            <ul className="resume-list">
                                                <li>To teach children between the ages of 8 - 18  the fundementals programming and software development</li> 
                                                <li>During this period, the kids learnt basic HTML,CSS, JS and Scratch.</li>
                                            </ul>
                                    </div>
                                </div>

                                {/* <!-- Role Number Four --> */}
                                <div className="item">
                                    <div className="item-heading row align-items-center mb-2">
                                        <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">Backend Developer</h4>
                                        <div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-left text-md-right">Textbookng | 2016 - 2018</div>
                                        </div>
                                        <div className="item-content">
                                            <p>Part of a team of designers and developers that designed, developed and implement an online (internet-based) based university books sales project.</p>
                                            <ul className="resume-list">
                                                <li>Created, delivered and maintained scalable system architecture to support
                                                high-availability internet site with various internal applications.</li>
                                                <li>Wrote and implemented scripts to enhance user experience on alot of internal projects</li>
                                            </ul>
                                        </div>
                                </div>

                                {/* <!-- Role Number Five --> */}
                                <div className="item">
                                    <div className="item-heading row align-items-center mb-2">
                                        <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">Computer Operator</h4>
                                            <div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-left text-md-right">Gilmor | 2011 - 2012</div>
                                        </div>
                                        <div className="item-content">
                                            <p><ul className="resume-list"> 
                                                <li>Responsible for data entry, processing, keeping of records and managing
                                                databases.</li>
                                                <li>Responsible for operating computer systems and performing preventive
                                                maintenance tasks on computer system hardware.</li>
                                            </ul></p>
                                        </div>
                                </div>
                            </section>
                            {/* <!-- End of work experience --> */}

                            {/* <!-- Projects --> */}
                             {/* <section className="project-section py-3">
								<h3 className="text-uppercase resume-section-heading mb-4">Projects</h3>
								<div className="item mb-3">
									<div className="item-heading row align-items-center mb-2">
										<h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">Project Lorem Ipsum</h4>
										<div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-left text-md-right">Open Source</div>
										
									</div>
									<div className="item-content">
										<p>You can use this section for your side projects. You can <a href="#" className="theme-link">provide a project link here</a> as well. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
										
										
									</div>
								</div>
								<div className="item">
									<div className="item-heading row align-items-center mb-2">
										<h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">Project Sed Fringilla</h4>
										<div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-left text-md-right">Open Source</div>
										
									</div>
									<div className="item-content">
										<p>You can use this section for your side projects. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.</p>
										
									</div>
								</div>
								<div className="item">
									<div className="item-heading row align-items-center mb-2">
										<h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">Project Praesent </h4>
										<div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-left text-md-right">Open Source</div>
										
									</div>
									<div className="item-content">
										<p>You can use this section for your side projects. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.</p>
										
									</div>
								</div>
                            </section>  */}
                            {/* <!--//project-section--> */}

                        </div>
                        <aside className="resume-aside col-12 col-lg-4 col-xl-3 px-lg-4 pb-lg-4" style={{textAlign:"left"}}>
                            <section className="skills-section py-3">
                                <h3 className="text-uppercase resume-section-heading mb-4">Skills</h3>
								<div className="item">
									<h4 className="item-title">Technical</h4>
									<ul className="list-unstyled resume-skills-list">
										<li className="mb-2">JavaScript/React/Express</li>
										<li className="mb-2">PHP/Laravel/PostgreSQL/MySQL</li>
										<li className="mb-2">Node.js/MongoDb</li>
										<li className="mb-2">Object-oriented design</li>
										<li className="mb-2">Design and implement database structures</li>
										<li className="mb-2">Worked and delivered complex software systems</li>
									</ul>
                                </div>
                                
								<div className="item">
									<h4 className="item-title">Professional</h4>
									<ul className="list-unstyled resume-skills-list">
										<li className="mb-2">Effective communication</li>
										<li className="mb-2">Good team player</li>
										<li className="mb-2">Strong problem solver</li>
										<li className="mb-2">Good time management</li>
									</ul>
								</div>
                            </section>
                            {/* <!--//skills-section--> */}
            
                            <section className="education-section py-3">
								<h3 className="text-uppercase resume-section-heading mb-4">Education</h3>
									<ul className="list-unstyled resume-education-list">
										<li className="mb-3">
									        	<div className="resume-degree font-weight-bold">B.SC in Computer Science</div>
												<div className="resume-degree-org text-muted">Michael Okpara University</div>
												<div className="resume-degree-time text-muted">2015 - 2019</div>
										</li>
										<li>
											<div className="resume-degree font-weight-bold">Diploma in IT</div>
											<div className="resume-degree-org text-muted">Hands-on institue of Tech</div>
											<div className="resume-degree-time text-muted">2010</div>
										</li>
									</ul>
                            </section>
                                    {/* <!--//education-section--> */}

                                    
									<section className="skills-section py-3">
										<h3 className="text-uppercase resume-section-heading mb-4">Languages</h3>
										<ul className="list-unstyled resume-lang-list">
                                                <li className="mb-2">Igbo <span className="text-muted">(Native)</span></li>
                                            <li className="mb-2">Hausa <span className="text-muted">(Fluent)</span></li>
                                            <li className="mb-2">English <span className="text-muted">(Fluent)</span></li>
											<li>Spanish <span className="text-muted">(Working Knowledge)</span></li>
										</ul>
									</section>
									{/* <!--//certificates-section--> */}
									<section className="skills-section py-3">
										<h3 className="text-uppercase resume-section-heading mb-4">Interests</h3>
										<ul className="list-unstyled resume-interests-list mb-0">
											<li className="mb-2">Traveling</li>
											<li className="mb-2">Cooking</li>
											<li className="mb-2">Photography</li>
											
										</ul>
									</section>
									{/* <!--//certificates-section--> */}
									
						</aside>
						{/* <!--//resume-aside--> */}
					</div>
					
					{/* <!--//row--> */}
                </div>
                {/* <!--//resume-body--> */}
                        
                <hr/>
                        
                <div className="resume-footer text-center">
				    <ul className="resume-social-list list-inline mx-auto mb-0 d-inline-block text-muted">
						<li className="list-inline-item mb-lg-0 mr-3"><a className="resume-link" href="https://www.github.com/saminwankwo"><i className="fab fa-github-square fa-2x mr-2" data-fa-transform="down-4"></i><span className="d-none d-lg-inline-block text-muted">github.com/saminwankwo</span></a></li>
						<li className="list-inline-item mb-lg-0 mr-3"><a className="resume-link" href="https://www.linkedin.com/in/saminwankwo/"><i className="fab fa-linkedin fa-2x mr-2" data-fa-transform="down-4"></i><span className="d-none d-lg-inline-block text-muted">linkedin.com/in/username</span></a></li>
						<li className="list-inline-item mb-lg-0 mr-lg-3"><a className="resume-link" href="https://www.twitter.com/saminwankwo"><i className="fab fa-twitter-square fa-2x mr-2" data-fa-transform="down-4"></i><span className="d-none d-lg-inline-block text-muted">@saminwankwo</span></a></li>
					</ul>
				</div>
				{/* <!--//resume-footer--> */}
			</article>
        </div>

    <Footer/>
    </>
  )
}

export default Resume