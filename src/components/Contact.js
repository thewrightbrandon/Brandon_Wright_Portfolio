import React from 'react'

class Contact extends React.Component {

  render = () => {
    return (
      <div>
        <h1 className="contactH1">CONTACT ME</h1>
        <hr className="contactDivider" />
        <div className="contactDiv">
          <div className="contactContent">
            <a className="contactLinks" href="mailto:thewrightbrandon@gmail.com"
            rel="noreferrer" target="_blank">
              <div className="contact1">
                <img className="contactImage" src="https://i.imgur.com/PrghLan.png" alt="Email" />
                <h3 className="contactH3">E-Mail</h3>
              </div>
            </a>
            <a className="contactLinks" href="https://www.linkedin.com/in/brandon-m-wright/"
            rel="noreferrer" target="_blank">
              <div className="contact2">
                <img className="contactImage" src="https://i.imgur.com/lF6SMro.png" alt="LinkedIn" />
                <h3 className="contactH3">LinkedIn</h3>
              </div>
            </a>
            <a className="contactLinks" href="https://github.com/thewrightbrandon"
            rel="noreferrer" target="_blank">
              <div className="contact3">
                <img className="contactImage" src="https://i.imgur.com/5lulDbg.png" alt="Github" />
                <h3 className="contactH3">Github</h3>
              </div>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact
