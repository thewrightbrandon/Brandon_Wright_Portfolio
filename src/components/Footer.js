import React from 'react'

class Footer extends React.Component {

  render = () => {
    return (
      <footer>
        <a className="footerLink" href="mailto:thewrightbrandon@gmail.com"
        rel="noreferrer" target="_blank">
          <img className="footerIcon" src='images/email-256.png' alt="Envelope Icon"/>
        </a>
        <a className="footerLink" href="https://www.linkedin.com/in/brandon-m-wright/"
        rel="noreferrer" target="_blank">
          <img className="footerIcon" src='images/linkedin-256.png' alt="LinkedIn Logo"/>
        </a>
        <a className="footerLink" href="https://github.com/thewrightbrandon"
        rel="noreferrer" target="_blank">
          <img className="footerIcon" src='images/github-11-256.png' alt="Github Logo"/>
        </a>
      </footer>
    )
  }
}

export default Footer
