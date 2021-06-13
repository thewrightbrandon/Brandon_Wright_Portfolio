import React from 'react'

class Home extends React.Component {

  render = () => {
    return (
      <div>
        <h1 className="text-focus-in homeH1">BRANDON WRIGHT</h1>
        <div className="homeDiv">
          <div className="homeContent">
            <a className="homeLinks" href="/About">
              <div className="content1">
                <img className="homeImage" src="https://i.imgur.com/kCuz1cu.png" alt="Drinks" />
                <h3 className="homeH3">Bartender Turned Coder</h3>
              </div>
            </a>
            <a className="homeLinks" href="/Portfolio">
              <div className="content2">
                <img className="homeImage" src="https://i.imgur.com/xuzf4pK.png" alt="Computer" />
                <h3 className="homeH3">Full-Stack Software Developer</h3>
              </div>
            </a>
            <a className="homeLinks" href="/Contact">
              <div className="content3">
                <img className="homeImage" src="https://i.imgur.com/bFPtl4e.png" alt="Pineapple" />
                <h3 className="homeH3">A Hospitable Addition to Your Team</h3>
              </div>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
