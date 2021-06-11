import React from 'react'

import { ReactComponent as Javascript } from '../icons/javascript.svg'
// import { ReactComponent as Atom } from '../icons/atom-icon.svg'
import { ReactComponent as Bootstrap } from '../icons/bootstrap.svg'
import { ReactComponent as C } from '../icons/c-sharp.svg'
import { ReactComponent as CSS3 } from '../icons/css-3.svg'
import { ReactComponent as Django } from '../icons/django-icon.svg'
import { ReactComponent as Dotnet } from '../icons/dotnet.svg'
import { ReactComponent as Express } from '../icons/express.svg'
import { ReactComponent as Github } from '../icons/github-icon.svg'
import { ReactComponent as Git } from '../icons/git-icon.svg'
import { ReactComponent as Html } from '../icons/html-5.svg'
import { ReactComponent as Jquery } from '../icons/jquery.svg'
import { ReactComponent as Mongodb } from '../icons/mongodb.svg'
import { ReactComponent as Node } from '../icons/nodejs.svg'
import { ReactComponent as Postgres } from '../icons/postgresql.svg'
import { ReactComponent as Python } from '../icons/python.svg'
import { ReactComponent as ReactLogo } from '../icons/react.svg'


class Icons extends React.Component {

  render = () => {
    return (
      <div>
        <div className="container col-lg-10">
          <h1 className="text-center mt-3">Skills & Technologies</h1>
          <hr className="divider my-6" />
          <div className="row">
            <div className="col-3 text-center">
              <div className="mt-4">
                <Javascript />
                <p className="mb-4 svgTags">Javascript</p>
              </div>
            </div>
            <div className="col-3 text-center">
              <div className="mt-4">
                <Html />
                <p className="mb-4 svgTags">HTML-5</p>
              </div>
            </div>
            <div className="col-3 text-center">
              <div className="mt-4">
                <CSS3 />
                <p className="mb-4 svgTags">CSS-3</p>
              </div>
            </div>
            <div className="col-3 text-center">
              <div className="mt-4">
                <ReactLogo />
                <p className="mb-4 svgTags">React</p>
              </div>
            </div>
            <div className="col-3 text-center">
              <div className="mt-4">
                <Node />
                <p className="mb-4 svgTags">Node JS</p>
              </div>
            </div>
            <div className="col-3 text-center">
              <div className="mt-4">
                <Express />
                <p className="mb-4 svgTags">Express</p>
              </div>
            </div>
            <div className="col-3 text-center">
              <div className="mt-4">
                <Mongodb />
                <p className="mb-4 svgTags">MongoDB</p>
              </div>
            </div>
            <div className="col-3 text-center">
              <div className="mt-4">
                <Jquery />
                <p className="mb-4 svgTags">jQuery</p>
              </div>
            </div>
            <div className="col-3 text-center">
              <div className="mt-4">
                <Postgres />
                <p className="mb-4 svgTags">PostgreSQL</p>
              </div>
            </div>
            <div className="col-3 text-center">
              <div className="mt-4">
                <Django />
                <p className="mb-4 svgTags">Django</p>
              </div>
            </div>
            <div className="col-3 text-center">
              <div className="mt-4">
                <Python />
                <p className="mb-4 svgTags">Python</p>
              </div>
            </div>
            <div className="col-3 text-center">
              <div className="mt-4">
                <Bootstrap />
                <p className="mb-4 svgTags">Bootstrap</p>
              </div>
            </div>
            <div className="col-3 text-center">
              <div className="mt-4">
                <C />
                <p className="mb-4 svgTags">C-Sharp</p>
              </div>
            </div>
            <div className="col-3 text-center">
              <div className="mt-4">
                <Dotnet />
                <p className="mb-4 svgTags">.NET Core</p>
              </div>
            </div>
            <div className="col-3 text-center">
              <div className="mt-4">
                <Github />
                <p className="mb-4 svgTags">Github</p>
              </div>
            </div>
            <div className="col-3 text-center">
              <div className="mt-4">
                <Git />
                <p className="mb-4 svgTags">Git</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Icons
