import React from 'react'

const Footer = () => {
  return (
    <>
    <div className="container"><hr/></div>
        
        <footer className="footer text-center py-4">
            <small className="copyright">Designed with  <a href="/"><i className="fas fa-heart fa-fw"></i></a> by <a href="http:\\www.twitter.com/saminwankwo" target="_blank" rel="noreferrer">Nwankwo Samuel</a></small>
            <ul className="social-list list-inline py-2 mx-auto">
                    <li className="list-inline-item"><a href="https://www.twitter.com/saminwankwo" target = "_blank" rel ="noreferrer"><i className="fab fa-twitter fa-fw"></i></a></li>
                    <li className="list-inline-item"><a href="https://www.linkedin.com/in/saminwankwo" target = "_blank" rel ="noreferrer"><i className="fab fa-linkedin-in fa-fw"></i></a></li>
                    <li className="list-inline-item"><a href="https://www.github.com/saminwankwo" target = "_blank" rel ="noreferrer"><i className="fab fa-github-alt fa-fw"></i></a></li>
                    <li className="list-inline-item"><a href="https://gitlab.com/saminwankwo" target = "_blank" rel ="noreferrer"><i className="fab fa-gitlab"></i></a></li>
                    <li className="list-inline-item"><a href="https://t.me/saminwankwo" target = "_blank" rel ="noreferrer"><i className="fab fa-telegram fa-fw"></i></a></li>
                    <li className="list-inline-item"><a href="https://www.facebook.com/nwankwo.samuel" target = "_blank" rel ="noreferrer"><i className="fab fa-facebook fa-fw"></i></a></li>
                    <li className="list-inline-item"><a href="https://codepen.io/saminwankwo" target = "_blank" rel ="noreferrer"><i className="fab fa-codepen fa-fw"></i></a></li>
                    <li className="list-inline-item"><a href="https://www.instagram.com/saminwankwo" target = "_blank" rel ="noreferrer"><i className="fab fa-instagram fa-fw"></i></a></li>
                    {/* TODO: Add HashNode link here */}
                    <li className="list-inline-item"><a href="mailto:nwankwosami@gmail.com" target = "_blank" rel ="noreferrer"><i className="far fa-envelope fa-fw"></i></a></li>

                </ul>
      
        </footer>

        </>
  )
}

export default Footer