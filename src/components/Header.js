import React from 'react'

import { Link } from 'react-router-dom'

class Header extends React.Component {

  render = () => {
    return (
      <nav className="navbar">
        <ul className="container-fluid navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to='/'>Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='/About'>About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='/Portfolio'>Portfolio</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='/Contact'>Contact</Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Header
