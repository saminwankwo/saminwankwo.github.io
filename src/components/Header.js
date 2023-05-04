import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    // <!-- header Begins -->
    <header className="header text-center">
        <div className="force-overflow">
            <h1 className="blog-name pt-lg-4 mb-0"><a href="/">Nwankwo Samuel</a></h1>
            
            <Navbar/>
        </div>
    </header>
    // <!-- header Ends -->

  )
}

export default Header