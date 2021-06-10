import React from 'react'

import { Link } from 'react-router-dom'

class Header extends React.Component {

  render = () => {
    return (
      <nav className="navbar sticky">
        <div className="logoDiv">
          <a className="navbar-brand" href="/">
            <img id="logo" src="https://i.imgur.com/mYKM4dH.png" alt="logo" />
          </a>
        </div>
        <ul className="container-fluid navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to='/'>HOME</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='/About'>ABOUT</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='/Portfolio'>PORTFOLIO</Link>
          </li>
          <li className="nav-item nav-end">
            <Link className="nav-link" to='/Contact'>CONTACT</Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Header
