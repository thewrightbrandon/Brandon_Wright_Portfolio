import React from 'react'

import Icons from './Icons'

class Portfolio extends React.Component {

  render = () => {
    return (
      <div className="portfolioDiv">
        <div className="container col-lg-10">
          <h1 className="portfolioH1">RESUMÉ</h1>
          <hr />
          <div className="resumeDiv">
            <a className="resumeLink" href="https://drive.google.com/file/d/1zbZT0EWzT7nIl5qX0NoEOD9bAewm50oN/view"
            rel="noreferrer" target="_blank" >
              <img className="resumeImage" src="images/BMW-Resume.PNG" alt="Resume" />
            </a>
            <a href="https://drive.google.com/file/d/1zbZT0EWzT7nIl5qX0NoEOD9bAewm50oN/view"
            rel="noreferrer" target="_blank" >
              <button className="btn btn-light resumeButton">Click To View Resume</button>
            </a>
          </div>
        </div>
        <Icons />
        <div className="container col-lg-10">
          <h1 className="portfolioH1">RECENT PROJECTS</h1>
          <hr />

            <div className="projectOne">
              <div className="mb-4 projectImageDiv">
                <a href="https://upbeat-clarke-71de29.netlify.app/" rel="noreferrer" target="_blank">
                  <img className="projectImage" src="images/Project1Snap.PNG" alt="First Project" />
                </a>
              </div>
              <div className="mb-4 projectContextDiv">
                <h3 className="projectTitle">Pokemon Adventure</h3>
              </div>
            </div>

            <div className="projectTwo">
              <div className="mb-4 projectImageDiv">
                <a href="https://so-many-friends.herokuapp.com/" rel="noreferrer" target="_blank">
                  <img className="projectImage" src="images/Project2Snap.PNG" alt="Second Project" />
                </a>
              </div>
              <div className="mb-4 projectContextDiv">
                <h3 className="projectTitle">So Many Friends!</h3>
              </div>
            </div>

            <div className="projectThree">
              <div className="mb-4 projectImageDiv">
                <a href="https://thepotluck.herokuapp.com/" rel="noreferrer" target="_blank">
                  <img className="projectImage" src="images/Project3Snap.PNG" alt="Third Project" />
                </a>
              </div>
              <div className="mb-4 projectContextDiv">
                <h3 className="projectTitle">Potluck</h3>
              </div>
            </div>

            <div className="projectFour">
              <div className="mb-4 projectImageDiv">
                <a href="https://the-cocktail-concierge.herokuapp.com/" rel="noreferrer" target="_blank">
                  <img className="projectImage" src="images/FinalProjectSnap.PNG" alt="Fourth Project" />
                </a>
              </div>
              <div className="mb-4 projectContextDiv">
                <h3 className="projectTitle">The Cocktail Concierge</h3>
              </div>
            </div>

            <div className="contactLinkDiv">
              <a href="/Contact">
                <button className="toContactButton">Let's Connect!</button>
              </a>
            </div>

        </div>
      </div>
    )
  }
}

export default Portfolio
