import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import project1Image from '../images/project1Image.png';
import project2Image from '../images/project2Image.png';
import SEO from '../global/seo';
import Layout from '../global/layout';

const PortfolioPage = () => (
  <Layout>
    <SEO title="Portfolio" />
    <Wrapper>
      <div className="menu-bar">
        <Link to="/" className="menu-bar-link">
          Home
        </Link>
        <Link to="/portfolio/" className="selected-page menu-bar-link">
          Portfolio
        </Link>
        <Link to="/aboutMe/" className="menu-bar-link">
          About Me
        </Link>
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
            An easy way for a DM or Player to keep track of their chosen spells
            or create new ones for {'D&D'} 5e
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

      <div className="last project">
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
            <li>Built using Node.js and React</li>
            <li>
              Queries a public Dad Joke API for the Challenge and the Answer
            </li>
            <li>
              Tracks correct and incorrect guessed letters and colors the
              corresponding "keys" appropriately
            </li>
            <li>
              Shows number of guesses remaining as you race to solve the puzzle
              before your hangman is completed
            </li>
          </ul>
        </div>
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
      </div>
    </Wrapper>
  </Layout>
);

const Wrapper = styled.div`
  display: flex;
  min-width: 100%;
  min-height: 100vh;
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
    text-align: center;
    padding: 10px 10px;
    width: 100%;
    flex-grow: 1;
    margin-bottom: 50px;
    -webkit-box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.15);
    -moz-box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.15);
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.15);
  }

  .menu-bar-link {
    color: #ffffff;
    font-size: 1.2rem;
    font-weight: 300;
  }

  @media only screen and (min-width: 751px) {
    /* For desktop: */

    a {
      margin: 5px 9px 5px;
      color: black;
      text-decoration: none;
      width: 105px;
      text-align: center;
    }

    h2 {
      margin: 0 0 2px 10px;
      font-size: 34px;
      font-weight: 300;
      letter-spacing: 1px;
      word-spacing: 5px;
    }

    .project {
      display: flex;
      flex-direction: row;
      justify-content: center;
      margin: 0 20px;
      padding: 20px 10px;
      max-width: 1000px;
      max-height: 600px;
      margin-bottom: 50px;
      border-radius: 5px;
      background: #f4f7fb;
    }
    .project:nth-of-type(even) {
      flex-direction: row-reverse;
    }
    .last {
      margin-bottom: 80px;
    }

    .project-details {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 50%;
      margin: 0 10px;
    }

    .project-image {
      display: flex;
      width: 100%;
      max-height: 100vw;
      align-items: center;
      justify-content: center;
      margin: 0 10px;
      border-radius: 5px;
      width: auto;
      height: auto;
    }
    .image-link {
      padding: 0;
      margin: 0;
      max-width: 500px;
      max-height: 100%;
      width: auto;
      height: auto;
    }
    img {
      max-width: 100%;
      max-height: 100%;
      width: auto;
      height: auto;
      display: block;
      margin: 0 auto;
      -webkit-box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.15);
      -moz-box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.15);
      box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.15);
    }

    .project-tags {
      display: flex;
      width: 100%;
      flex-wrap: wrap;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      margin: 0;
      padding: 0;
      margin-top: 10px;
      margin-bottom: 10px;
    }

    .project-title {
      display: flex;
      width: 100%;
      justify-content: flex-start;
      border-bottom: 2px solid #000000;
      margin-top: 15px;
      color: #000000;
    }

    span {
      padding: 5px 15px;
      background-color: #35c4f4;
      color: white;
      font-size: 0.8rem;
      margin: 5px 10px 5px;
      -webkit-box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.15);
      -moz-box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.15);
      box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.15);
      border-radius: 2px;
    }

    .description {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      width: 98%;
      text-align: left;
      color: #525f7f;
    }

    li {
      margin-bottom: 6px;
      padding: 2px 0;
      line-height: 17px;
      color: #525f7f;
    }
  }

  @media only screen and (max-width: 750px) {
    /* For mobile: */

    a {
      margin: 5px 9px 5px;
      color: black;
      text-decoration: none;
      width: 105px;
      text-align: center;
    }

    .image-link {
      padding: 0;
      margin: 0;
      width: 350px;
      height: 350px;
    }

    .project-title {
      display: flex;
      width: 90%;
      justify-content: flex-start;
      border-bottom: 2px solid #000000;
      margin-top: 15px;
      color: #000000;
    }

    h2 {
      margin: 0;
      font-size: 34px;
      font-weight: 300;
      letter-spacing: 1px;
      word-spacing: 5px;
      width: 100%;
      text-align: center;
    }
    img {
      max-width: 100%;
      max-height: 100%;
    }

    .project {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-left: 25px;
      margin-right: 25px;
      padding: 15px 10px 20px 10px;
      max-width: 85%;
      margin-bottom: 50px;
      border-radius: 5px;
      background: #f4f7fb;
      flex-wrap: wrap;
    }
    .last {
      margin-bottom: 80px;
    }

    .project-details {
      display: flex;
      flex-direction: column;
      align-items: center;
      max-width: 100%;
      flex-grow: 1;
      padding: 0 5px;
      margin: 0;
    }

    .project-image {
      display: flex;
      max-width: 350px;
      max-height: 350px;
      align-items: center;
      justify-content: center;
      -webkit-box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.15);
      -moz-box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.15);
      box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.15);
      margin: 0 10px;
      border-radius: 5px;
      margin-bottom: 15px;
    }

    .project-tags {
      display: flex;
      width: 100%;
      flex-wrap: wrap;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      margin: 0;
      padding: 0;
      margin-top: 10px;
      margin-bottom: 10px;
    }

    span {
      padding: 5px 15px;
      background-color: #35c4f4;
      color: white;
      font-size: 0.8rem;
      margin: 5px 10px 5px;
      -webkit-box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.15);
      -moz-box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.15);
      box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.15);
      border-radius: 2px;
    }

    .description {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      width: 95%;
      padding: 0 20px;
      text-align: left;
      color: #525f7f;
    }

    li {
      margin-bottom: 6px;
      padding: 2px 20px;
      line-height: 17px;
      color: #525f7f;
    }
  }
`;

export default PortfolioPage;
