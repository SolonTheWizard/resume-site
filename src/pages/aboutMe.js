import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import SEO from "../global/seo"
import Layout from "../global/layout"

const AboutMePage = () => (
  <Layout>
    <SEO title="About Me" />
    <Wrapper>
      <div className="menu-bar">
        <Link to="/" className="menu-bar-link">
          Home
        </Link>
        <Link to="/portfolio/" className="menu-bar-link">
          Portfolio
        </Link>
        <Link to="/aboutMe/" className="selected-page menu-bar-link">
          __About Me__
        </Link>
      </div>
      <div className="title">
        <h1>___About Me___________</h1>
      </div>
    </Wrapper>
  </Layout>
)

const Wrapper = styled.div`
  display: flex;
  min-width: 100%;
  min-height: 100%;
  margin: 0;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  font-size: 16px;
  flex-grow: 1;

  .menu-bar {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 40px 10px 10px;
    width: 100%;
    flex-grow: 1;
  }

  a {
    margin: 5px 9px 15px;
    color: black;
    text-decoration: none;
    width: 105px;
    text-align: center;
  }

  .image-link {
    padding: 0;
    margin: 0;
    width: 500px;
    height: 500px;
  }

  h1 {
    padding-left: 75px;
    margin: 0 0 2px 10px;
    font-size: 34px;
    font-weight: 400;
    letter-spacing: 1px;
    word-spacing: 5px;
  }
  h2 {
    margin: 0 0 2px 10px;
    font-size: 34px;
    font-weight: 300;
    letter-spacing: 1px;
    word-spacing: 5px;
  }
  img {
    max-width: 100%;
    max-height: 100%;
  }

  .title {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 100%;
    font-family: sans-serif;
    text-decoration: underline;
  }

  .project {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-left: 20px;
    padding: 10px 10px;
    width: 90%;
    height: 500px;
    margin-bottom: 30px;
  }

  .project-details {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    background: #f4f7fb;
    margin: 0 10px;
    border-radius: 5px;
  }

  .project-image {
    display: flex;
    max-width: 500px;
    max-height: 500px;
    align-items: center;
    justify-content: center;
    -webkit-box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.15);
    -moz-box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.15);
    box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.15);
  }

  .project-tags {
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }

  .project-title {
    display: flex;
    width: 100%;
    justify-content: flex-start;
    text-decoration: underline;
    margin-top: 15px;
  }

  .selected-page {
    text-decoration: underline;
  }

  span {
    padding: 5px 15px;
    background-color: black;
    color: white;
    font-size: 14px;
    margin: 0 10px 10px;
  }

  .description {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 98%;
    text-indent: 15px;
  }

  li {
    margin-bottom: 6px;
  }
`

export default AboutMePage
