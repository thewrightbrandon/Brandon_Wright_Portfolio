import React from 'react'

class Scroll extends React.Component {

  state = {
    showScroll: false,

  }

  scrollTop = () => {
    window.scroll(
      {
        top: 0,
        behavior: "smooth"
      }
    )
  }

  toggleScroll = () => {
    if (window.pageYOffset > 250) {
      this.setState({
        showScroll: true
      });
    } else {
      this.setState({
        showScroll: false
      });
    }
  }

  componentDidMount = () => {
    let scrollComponent = this
    document.addEventListener("scroll", function(e) {
      scrollComponent.toggleScroll()
    })
  }

  render = () => {
    return (
      <div>
        {this.state.showScroll ? (<img onClick={this.scrollTop} id="scrollToTopButton" className="slide-in-right"
        src="https://i.imgur.com/omQnA1x.png" alt="Up Arrow" /> ) : null}
      </div>
    )
  }
}

export default Scroll
