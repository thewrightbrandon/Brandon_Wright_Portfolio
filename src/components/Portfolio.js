import React from 'react'

import Icons from './Icons'

class Portfolio extends React.Component {

  render = () => {
    return (
      <div className="portfolioDiv">
        <div className="container">
          <h1 className="text-center mt-4">Resumé</h1>
          <hr className="divider my-6" />
          <div className="resumeDiv">
            <a href="/" rel="noreferrer" target="_blank" >
              <button className="btn btn-light resumeButton">Click Here To Download My Resume</button>
            </a>
          </div>
        </div>
        <Icons />
        <div className="container">
          <h1 className="text-center mt-4">Recent Projects</h1>
          <hr className="divider my-6" />

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

        </div>
      </div>
    )
  }
}

export default Portfolio
