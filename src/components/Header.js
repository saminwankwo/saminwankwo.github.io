import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="top-nav">
      <div className="container-fluid">
        <Link to="/" className="logo">
          NS
        </Link>

        <ul className="nav-links">
          <li>
            <Link to="/" className={isActive('/') ? 'active' : ''}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/portfolio" className={isActive('/portfolio') ? 'active' : ''}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/blog" className={isActive('/blog') ? 'active' : ''}>
              Blog
            </Link>
          </li>
          <li>
            <Link to="/resume" className={isActive('/resume') ? 'active' : ''}>
              Resume
            </Link>
          </li>
          <li>
            <Link to="/contact" className={isActive('/contact') ? 'active' : ''}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header