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
          <p className="col-10">With a decade of experience in the dynamic world of hospitality followed by a successful transition into the realm of technology, I bring a unique blend of customer-centric focus and technical expertise to every challenge I encounter. I am deeply passionate about helping others and thrive on the satisfaction of solving problems and making a meaningful impact. As a Technical Support Engineer (TSE) specializing in troubleshooting and providing top-tier support to high-profile enterprise clients, I have honed my skills in problem-solving and collaboration, all while fostering a culture of continuous learning and development. My passion for assisting others has been a driving force in my career, fueling my dedication to delivering exceptional service and exceeding expectations.</p>
          <a href="/Portfolio">
            <button className="toPortfolioButton">View My Work</button>
          </a>
        </div>
      </div>
    )
  }
}

export default About
