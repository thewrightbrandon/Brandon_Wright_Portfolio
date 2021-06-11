import React from 'react'

class About extends React.Component {

  render = () => {
    return (
      <div className="container aboutDiv">
        <div className="aboutMeDiv">
          <div className="mb-4 aboutImageDiv">
            <img className="aboutImage" src="images/me.jpg" alt="Brandon" />
          </div>
          <div className="mb-4 aboutContextDiv">
            <h5 className="aboutMe">Hey There!</h5>
          </div>
        </div>
      </div>
    )
  }
}

export default About
