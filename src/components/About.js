import React from 'react'

class About extends React.Component {

  render = () => {
    return (
      <div className="container col-lg-10">
        <h1 className="aboutH1">ABOUT ME</h1>
        <hr className="divider my-6" />
        <div className="container aboutDiv">
          <div className="aboutMeDiv">
            <div className="mb-4 aboutImageDiv">
              <img className="aboutImage" src="images/brandon-image.jpg" alt="Brandon" />
            </div>
            <div className="mb-4 aboutContextDiv">
              <h2 className="aboutH2">Hey, I'm Brandon!</h2>
              <img className="peaceSign" src="https://i.imgur.com/ss6zp15.png" alt="Peace Hand" />
              <h3 className="aboutH3">- Boston Native -</h3>
              <h3 className="aboutH3">- Hospitable Goober -</h3>
              <h3 className="aboutH3">- Wearing Shorts 365 -</h3>
              <h3 className="aboutH3">- Cats Are Cool -</h3>
              <h3 className="aboutH3">- Above Average Nerdery -</h3>
            </div>
          </div>
        </div>
        <h1 className="brandH1">WHY HIRE ME?</h1>
        <hr className="divider my-6" />
        <div className="brandDiv">
          <p className="col-10">With a decade of experience in the dynamic world of hospitality followed by a successful transition into the realm of technology, I am confident in my ability to contribute effectively to your team. Driven by an unyielding quest for personal and professional advancement, I am known for my dependable nature and consistent track record of achieving noteworthy goals. I am eager to lend my expertise and enthusiasm to a team that shares my passion for making a meaningful impact.</p>
          <br />
          <p className="col-10">As a Technical Support Engineer specializing in advanced troubleshooting and supplying top-tier support to Fortune Global 50 enterprise clients, I have acuminated my critical problem-solving and cross-team collaboration skills. My dedication to delivering exceptional service and exceeding expectations has been a driving force in my career. In the TSE role, I had the opportunity to support our most prominent enterprise clients. The high visibility and responsibility of my work enabled me to swiftly advance to the position of TSE II in less than two years. This journey not only deepened my technical knowledge but also sharpened my ability to communicate complex concepts effectively, ensuring smooth resolutions and substantial client satisfaction.</p>
          <a href="/Portfolio">
            <button className="toPortfolioButton">View My Work</button>
          </a>
        </div>
      </div>
    )
  }
}

export default About