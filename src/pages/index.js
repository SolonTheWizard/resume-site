import React from "react"
import { Link } from "gatsby"

import "../components/index.css"
import SEO from "../components/seo"

const IndexPage = () => (
  <div className="background">
    <SEO title="Home" />
    <div className="business-card">
      <div className="external-links">
        <a href="https://github.com/SolonTheWizard">Github</a>
        <a href="https://www.linkedin.com/in/samuel-s-548841120/">LinkedIN</a>
      </div>
      <div className="info">
        <h1 className="title">Samuel Suddath</h1>
        <h3 className="subtitle">Front-End React Developer</h3>
      </div>
      <div className="internal-links">
        <Link to="/portfolio/" className="directory-link">
          Portfolio
        </Link>
        <Link to="/resume/" className="directory-link">
          Resume
        </Link>
        <Link to="/contact/" className="directory-link">
          Contact
        </Link>
      </div>
    </div>
  </div>
)

export default IndexPage

/*
Questions:
1) How to do images
2) How to change fonts
3) Why is my index.css getting overwritten by page.css
4)
*/
