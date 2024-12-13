import React from 'react'

import Icons from './Icons'

class Portfolio extends React.Component {

  render = () => {
    return (
      <div className="portfolioDiv">
        <div className="container col-lg-10">
          <h1 className="portfolioH1">RESUMÉ</h1>
          <hr />
          <div className="resumeDiv">
            <a className="resumeLink" href="https://drive.google.com/file/d/1mbiKmJi0yCgXwkL5ySgzJSI_7uWzkde3/view?usp=sharing"
            rel="noreferrer" target="_blank" >
              <img className="resumeImage" src="images/resume_2025.png" alt="Resume" />
            </a>
            <a href="https://drive.google.com/file/d/1Qmj3iipZ8OQEqyC1wIL2Y8k6_kdPkf8d/view?usp=sharing" 
              rel="noreferrer" target="_blank" >
              <button className="btn btn-light resumeButton">Click To View Resume</button>
            </a>
          </div>
        </div>
        <Icons />
        <div className="container col-lg-10">
          <h1 className="portfolioH1">PROJECTS</h1>
          <hr />
            <div className="projectOne">
              <div className="mb-4 projectImageDiv">
                <a className="projectImageLink" href="https://upbeat-clarke-71de29.netlify.app/" rel="noreferrer" target="_blank">
                  <img className="projectImage" src="images/Project1Snap.PNG" alt="First Project" />
                </a>
              </div>
              <div className="mb-4 projectContextDiv">
                <h3 className="projectTitle">Pokemon Adventure</h3>
                <p>
                  A SPA built with JS, jQuery and AJAX.
                </p>
                <p>
                  Welcome to the world of Pokémon! As you make your way through the app, it will guide you through everything you need to know about becoming a Pokémon Trainer! Learn about the world and the creatures who inhabit it, what the road looks like ahead, and what you'll need to be successful on your journey! You may even make a new friend!
                </p>
                <p>
                  This build was an exercise in complex user interface modules, navigating & manipulating the DOM, and inserting data into the DOM received from an external API.
                </p>
                <div className="projectButtonsDiv">
                  <a className="projectLinks" href="https://github.com/thewrightbrandon/poke-adventure-app/tree/main/poke_dir"
                  rel="noreferrer" target="_blank">
                    <button className="projectButtons">Github Repo</button>
                  </a>
                  <a className="projectLinks" href="https://upbeat-clarke-71de29.netlify.app/"
                  rel="noreferrer" target="_blank">
                    <button className="projectButtons">Live Site</button>
                  </a>
                </div>
              </div>
            </div>

            <div className="projectTwo">
              <div className="mb-4 projectImageDiv">
                <a className="projectImageLink" href="https://so-many-friends-ab3402db4584.herokuapp.com/" rel="noreferrer" target="_blank">
                  <img className="projectImage" src="images/Project2Snap.PNG" alt="Second Project" />
                </a>
              </div>
              <div className="mb-4 projectContextDiv">
                <h3 className="projectTitle">So Many Friends!</h3>
                <p>
                  A Full-Stack CRUD MPA built with JS(EJS), Express, MongoDB, Mongoose and NodeJS.
                </p>
                <p>
                  So Many Friends is a pet adoption app that allows users to filter through a database of adoptable pets. Authentication is implemented to allow user and admin accounts to be created. Bcrypt was used for secure encryption of user accounts. Users have limited authorization while admins are given full CRUD access.
                </p>
                <p>
                  This build was an exercise in building full-stack CRUD applications, MVC file structures, RESTful routes, and incorporating Embedded JS.
                </p>
                <div className="projectButtonsDiv">
                  <a className="projectLinks" href="https://github.com/thewrightbrandon/bwright_p2_CRUD"
                  rel="noreferrer" target="_blank">
                    <button className="projectButtons">Github Repo</button>
                  </a>
                  <a className="projectLinks" href="https://so-many-friends-ab3402db4584.herokuapp.com/"
                  rel="noreferrer" target="_blank">
                    <button className="projectButtons">Live Site</button>
                  </a>
                </div>
              </div>
            </div>

            <div className="projectThree">
              <div className="mb-4 projectImageDiv">
                <a className="projectImageLink" href="https://potluck-recipes-7dbbecd03bcc.herokuapp.com/" rel="noreferrer" target="_blank">
                  <img className="projectImage" src="images/Project3Snap.PNG" alt="Third Project" />
                </a>
              </div>
              <div className="mb-4 projectContextDiv">
                <h3 className="projectTitle">Potluck</h3>
                <p>
                  A Full-Stack CRUD SPA built with JS, React, Express, MongoDB, Mongoose and NodeJS. I had the pleasure of collaborating with <a href="https://github.com/lanegrim" rel="noreferrer" target="_blank">Lane Grimaud</a> on this application.
                </p>
                <p>
                  Potluck is a recipe-sharing app that allows users to share their favorite recipes as well as finding new recipes to try. Implementing various filtering features handled by the front end improves the user's search experience. The recipe forms include dynamic inputs to allow the user to add or remove ingredients and/or recipe steps. The use of Authentication and Authorization allowed for account creation as well as limiting the user's edit and delete functionality to their own recipes.
                </p>
                <p>
                  This build was an exercise in working collaboratively on an application, a Kanban-style workflow with daily scrums, Full-Stack Single Page Applications, React with multiple class components, and the MERN stack.
                </p>
                <div className="projectButtonsDiv">
                  <a className="projectLinks" href="https://github.com/thewrightbrandon/Potluck"
                  rel="noreferrer" target="_blank">
                    <button className="projectButtons">Github Repo</button>
                  </a>
                  <a className="projectLinks" href="https://potluck-recipes-7dbbecd03bcc.herokuapp.com/"
                  rel="noreferrer" target="_blank">
                    <button className="projectButtons">Live Site</button>
                  </a>
                </div>
              </div>
            </div>

            <div className="projectFour">
              <div className="mb-4 projectImageDiv">
                <a className="projectImageLink" href="https://github.com/thewrightbrandon/The_Cocktail_Concierge" rel="noreferrer" target="_blank">
                  <img className="projectImage" src="images/FinalProjectSnap.PNG" alt="Fourth Project" />
                </a>
              </div>
              <div className="mb-4 projectContextDiv">
                <h3 className="projectTitle">The Cocktail Concierge</h3>
                <p>
                  A Full-Stack SPA built with JS, React, C#, .NET Core, PostgreSQL and Docker.
                </p>
                <p>
                  The Cocktail Concierge was created for the indecisive bar patron. This app will assist the user in discovering new cocktails and potentially their new go-to drink! Various filter features allow the user to quickly scour through the database. This application represents an insightful experience of learning new tech outside of a classroom environment. This application is still in early development and will serve as a tool to continue to learn about C# and .NET Core.
                </p>
                <p>
                  This build was an exercise in learning C# and .NET Core, using React Hooks and functional components, building & consuming an API, and querying a SQL database.
                </p>
                <div className="projectButtonsDiv">
                  <a className="projectLinks" href="https://github.com/thewrightbrandon/The_Cocktail_Concierge"
                  rel="noreferrer" target="_blank">
                    <button className="projectButtons">Github Repo</button>
                  </a>
                </div>
              </div>
            </div>

            <div className="contactLinkDiv">
              <a href="/Contact">
                <button className="toContactButton">Let's Connect!</button>
              </a>
            </div>

        </div>
      </div>
    )
  }
}

export default Portfolio
