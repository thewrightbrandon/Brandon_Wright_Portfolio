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
              <img className="aboutImage" src="images/me.jpg" alt="Brandon" />
            </div>
            <div className="mb-4 aboutContextDiv">
              <p className="aboutMe"> Hey, I'm Brandon! </p>
            </div>
          </div>
        </div>
        <h1 className="brandH1">WHY CHOOSE ME?</h1>
        <hr className="divider my-6" />
        <div className="brandDiv">
          <p className="col-10">Coming from a hospitality background I lead with a client first mentality. My goal is to create a warm and engaging environment where clients and co-workers alike can trust me to get the job done. Developing in high-pressure, fast paced environments allowed me to cultivate an intuitive nature that assists me in anticipating the needs of others as well as resolving issues swiftly and with utmost efficiency. I pride myself on being the go-to guy that remains dependable even under the most stressful situations. I am always searching for the most dynamic and communicative way to solve problems. The thought of limitless growth through my journey into the tech world truly motivates me to stay driven and hungry for more.</p>
          <button className="toPortfolioButton">Link to Portfolio</button>
        </div>
      </div>
    )
  }
}

export default About
