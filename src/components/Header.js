import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ThemeContext } from '../App'

const Header = () => {
  const location = useLocation();
  const { theme, setTheme } = useContext(ThemeContext);
  const isDark = theme === 'dark';

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
          <li>
            {/* //TODO: change this button to moon icon */}
            <button
              className="btn-secondary"
              onClick={() => setTheme(isDark ? 'light' : 'dark')}
              aria-label="Toggle theme"
              style={{ marginLeft: '1rem' }}
            >
              {isDark ? 'Light' : 'Dark'}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header