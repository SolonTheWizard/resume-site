import React from "react"
import { Link } from "gatsby"

import "../components/page.css"
import SEO from "../components/seo"

const ResumePage = () => (
  <div className="background">
    <SEO title="Resume" />
    <div className="menu-bar">
      <Link to="/">Home</Link>
      <Link to="/portfolio/">Portfolio</Link>
      <Link className="selected-page" to="/resume/">
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
