import React from 'react'

import Icons from './Icons'

class Portfolio extends React.Component {

  render = () => {
    return (
      <div className="portfolioDiv">
        <Icons />
        <div className="container">
          <h1 className="text-center mt-4">Recent Projects</h1>
          <hr className="divider my-6" />
        </div>
      </div>
    )
  }
}

export default Portfolio
