import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import "../components/index.css"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="business-card">
      <div className="external-links">
        <Link to="/portfolio/">Github Link Here</Link>
      </div>
      <h1>Samuel Suddath</h1>
      <h3>SolonTheWizard</h3>
      <div className="internal-links">
        <Link to="/portfolio/">Portfolio</Link>
        <Link to="/resume/">Resume</Link>
        <Link to="/contract/">Contact</Link>
      </div>
    </div>
  </Layout>
)

export default IndexPage
