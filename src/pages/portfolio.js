import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import project1Image from "../images/project1Image.png"
import project2Image from "../images/project2Image.png"
import SEO from "../global/seo"
import Layout from "../global/layout"

const PortfolioPage = () => (
  <Layout>
    <SEO title="Portfolio" />
    <Wrapper>
      <div className="menu-bar">
        <Link to="/" className="menu-bar-link">
          Home
        </Link>
        <Link to="/portfolio/" className="selected-page menu-bar-link">
          __Portfolio__
        </Link>
      </div>
      <div className="title">
        <h1>___Portfolio___________</h1>
      </div>
      <div className="project">
        <div className="project-details">
          <div className="project-title">
            <h2>_Custom Spellbook_</h2>
          </div>
          <div className="project-tags">
            <span>React</span>
            <span>JavaScript</span>
            <span>Node.js</span>
            <span>Styled Components</span>
          </div>
          <div className="description">
            An easy way for a DM or Player to keep track of their chosen spells
            or create new ones for {"D&D"} 5e
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
              Each registered user has their own unique "book" of spells that
              they can modify, add, or delete spells in
            </li>
            <li>
              When spells are deleted they are temporarily stored for an easy
              "quick-restore" feature
            </li>
          </ul>
        </div>
        <div className="project-image">
          <a
            className="image-link"
            href="https://custom-spellbook.web.app/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src={project1Image} alt="project 1" />
          </a>
        </div>
      </div>

      <div className="project">
        <div className="project-image">
          <a
            className="image-link"
            href="
            https://dadjoke-hangman.web.app/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src={project2Image} alt="project 2" />
          </a>
        </div>
        <div className="project-details">
          <div className="project-title">
            <h2>_Dad Joke Hangman_</h2>
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
    padding: 5px 8px;
    margin: 0 5px 15px;
    color: black;
    text-decoration: none;
    width: 90px;
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

export default PortfolioPage
