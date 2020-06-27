import React from "react"
import { Link } from "gatsby"

import "../components/index.css"
import SEO from "../components/seo"

const IndexPage = () => (
  <div className="background">
    <SEO title="Home" />
    <div className="business-card">
      <h1>Samuel Suddath</h1>
      <h2>SolonTheWizard</h2>
      <Link to="/portfolio/">Portfolio</Link> <br />
      <Link to="/resume/">Resume</Link> <br />
      <Link to="/contract/">Contact</Link>
    </div>
  </div>
)

export default IndexPage
