import React from "react"
import { Link } from "gatsby"

import "../components/page.css"
import SEO from "../components/seo"

const PortfolioPage = () => (
  <div className="background">
    <SEO title="Portfolio" />
    <div className="menu-bar">
      <Link to="/">Home</Link>
      <Link className="selected-page" to="/portfolio/">
        __Portfolio__
      </Link>
      <Link to="/resume/">Resume</Link>
    </div>
    <div className="title">
      <h1>Portfolio</h1>
    </div>
    <div className="project">
      <div className="project-details">
        <div className="project-title">
          <h2>Custom Spellbook</h2>
        </div>
        <div className="project-tags">
          <span>React</span>
          <span>JavaScript</span>
          <span>Node.js</span>
          <span>Styled Components</span>
        </div>
        <div className="description">
          An easy way for a DM or Player to keep track of their chosen spells or
          create new ones for {"D&D"} 5e
        </div>
        <ul>
          <li>Built using Node.js and React</li>
          <li>Hosted using Google Firebase</li>
          <li>Utilizes Local Storage to save user data and custom spells</li>
          <li>
            Registers and Stores multiple users in a home-made
            user-authentication system complete with password update and
            password reset capabilities
          </li>
          <li>
            Each registered user has their own unique "book" of spells that they
            can modify, add, or delete spells in
          </li>
          <li>
            When spells are deleted they are temporarily stored for an easy
            "quick-restore" feature
          </li>
        </ul>
      </div>
      <div className="project-image">Image goes here</div>
    </div>
    <div className="project">
      <div className="project-image">Image goes here</div>
      <div className="project-details">
        <div className="project-title">
          <h2>Dad Joke Hangman</h2>
        </div>
        <div className="project-tags">
          <span>React</span>
          <span>JavaScript</span>
          <span>Firebase</span>
          <span>Public API</span>
        </div>
        <div className="description">
          A "punny" game of hangman where the prompts are all dad jokes!
        </div>
        <ul>
          <li> Detail 1</li>
          <li> Detail 2</li>
          <li> Detail 3</li>
          <li> Detail 4</li>
        </ul>
      </div>
    </div>
  </div>
)

export default PortfolioPage
