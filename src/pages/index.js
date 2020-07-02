import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import "../global/styles.css"
import SEO from "../global/seo"
import Layout from "../global/layout"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Wrapper>
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
          <Link to="/contact/" className="directory-link">
            Contact
          </Link>
        </div>
      </div>
    </Wrapper>
  </Layout>
)
const Wrapper = styled.div`
  min-width: 100%;
  min-height: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  flex-grow: 1;

  .business-card {
    box-shadow: 5px 10px 23px rgba(31, 28, 87, 0.2);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 30px;
    margin-bottom: 80px;
    margin-top: 180px;
    width: 600px;
  }

  .internal-links {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin: 8px 0 20px;
    min-width: 90%;
  }
  .external-links {
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-start;
    min-width: 100%;
    margin-top: 5px;
  }

  a {
    color: black;
    text-decoration: none;
    text-align: center;
    padding: 8px 18px;
    font-size: 1rem;
  }

  .directory-link {
  }
  .directory-link:hover {
    background-color: #f6f6f6;
    transition: ease 0.3s;
    -webkit-box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.15);
    -moz-box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.15);
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.15);
  }
  .menu-bar-link {
    padding: 5px 0px;
    margin: 0 0 15px;
    text-align: center;
  }

  .title {
    padding: 40px 0 10px;
    margin: 2px 4px 2px;
    font-size: 2.75rem;
    font-weight: 600;
    /* ask kelson to help me change the font*/
  }
  .subtitle {
    padding: 5px 0 10px;
    margin: 2px 8px 8px;
    font-size: 2rem;
    font-weight: 400;
    /* ask kelson to help me change the font*/
  }

  .info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 600px;
    margin: 0 0 10px;
  }
`
export default IndexPage
