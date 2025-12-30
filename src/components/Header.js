import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

const Header = () => {
  return (
    // <!-- header Begins -->
    // <!-- header Begins -->
    <header className="header text-center">
      <div className="force-overflow">
        <h1 className="blog-name pt-lg-4 mb-0"><Link to="/" rel="noreferrer">Nwankwo Samuel</Link></h1>

        <Navbar />
      </div>
    </header>
    // <!-- header Ends -->

  )
}

export default Header