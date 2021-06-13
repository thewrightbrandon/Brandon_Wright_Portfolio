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
              <h2 className="aboutH2">Hey, I'm Brandon!</h2>
              <img className="peaceSign" src="https://i.imgur.com/ss6zp15.png" alt="Peace Hand" />
              <h4 className="aboutH4">- Boston Born -</h4>
              <h4 className="aboutH4">- Cocktail Creator -</h4>
              <h4 className="aboutH4">- Coffee Consumer -</h4>
              <h4 className="aboutH4">- Cats Are Cool -</h4>
              <h4 className="aboutH4">- All Things Nerdy -</h4>
            </div>
          </div>
        </div>
        <h1 className="brandH1">WHY HIRE ME?</h1>
        <hr className="divider my-6" />
        <div className="brandDiv">
          <p className="col-10"><b>Coming from a hospitality background I lead with a client first mentality. My goal is to create a warm and engaging environment where clients and co-workers alike can trust me to get the job done. Developing in high-pressure, fast paced environments allowed me to cultivate an intuitive nature that assists me in anticipating the needs of others as well as resolving issues swiftly and with utmost efficiency. I pride myself on being the go-to guy that remains dependable even under the most stressful situations. I am always searching for the most dynamic and communicative way to solve problems. The thought of limitless growth through my journey into the tech world truly motivates me to stay driven and hungry for more.</b></p>
          <a href="/Portfolio">
            <button className="toPortfolioButton">View My Work</button>
          </a>
        </div>
      </div>
    )
  }
}

export default About
