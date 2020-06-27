import React from "react"
import { Link } from "gatsby"

import "../components/portfolio.css"
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
      <h2>project 1 goes here</h2>
    </div>
  </div>
)

export default PortfolioPage
