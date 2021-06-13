import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

class App extends React.Component {

  render = () => {

    return (
      <BrowserRouter>
        <div>
          <Header />
            <Switch>
              <Route exact path='/'>
                <Home />
              </Route>
              <Route path='/About'>
                <About />
              </Route>
              <Route path='/Portfolio'>
                <Portfolio />
              </Route>
              <Route path='/Contact'>
                <Contact />
              </Route>
            </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
