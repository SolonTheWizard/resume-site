import React from "react"
import { Link } from "gatsby"

import "../components/page.css"
import SEO from "../components/seo"

const ResumePage = () => (
  <div className="background">
    <SEO title="Resume" />
    <div className="menu-bar">
      <Link to="/" className="menu-bar-link">
        Home
      </Link>
      <Link to="/portfolio/" className="menu-bar-link">
        Portfolio
      </Link>
      <Link to="/resume/" className="selected-page menu-bar-link">
        __Resume__
      </Link>
    </div>
    <div className="title">
      <h1>Resume</h1>
    </div>
    <div className="project">
      <h2>resume goes here</h2>
    </div>
  </div>
)

export default ResumePage
