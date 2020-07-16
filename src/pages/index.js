import React, { Component } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import github from '../images/github.png';
import linkedin from '../images/linkedin.png';
import '../global/styles.css';
import SEO from '../global/seo';
import Layout from '../global/layout';

class IndexPage extends Component {
  constructor(props) {
    super(props);
    // set initial state values
    this.state = {
      displayContactInfo: false,
    };
  }

  toggleContactInfo = () => {
    const { displayContactInfo } = this.state;
    this.setState({ displayContactInfo: !displayContactInfo });
  };

  render() {
    const { displayContactInfo } = this.state;
    return (
      <Layout>
        <SEO title="Home" />
        <Wrapper>
          <div className="business-card">
            <div className="external-links">
              <a
                className="social-media-link"
                href="https://github.com/SolonTheWizard"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img
                  className="social-media-link"
                  src={github}
                  alt="github link"
                />
              </a>
              <a
                className="social-media-link"
                href="https://www.linkedin.com/in/SamuelSuddath/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img
                  className="social-media-link"
                  src={linkedin}
                  alt="linkedin link"
                />
              </a>
            </div>
            <div className="info">
              <h1 className="title">Samuel Suddath</h1>
              <h3 className="subtitle">
                Software Engineer (React, Node, JavaScript)
              </h3>
            </div>
            <div className="internal-links">
              <Link to="/portfolio/" className="directory-link">
                Portfolio
              </Link>
              <button onClick={this.toggleContactInfo}>Contact</button>
              <Link to="/aboutMe/" className="directory-link">
                About
              </Link>
            </div>
            <div
              className={`${displayContactInfo ? 'contact-info' : 'hidden'}`}
            >
              <ul>
                <li>Email:</li>
                <li>srsuddath@gmail.com</li>
                <div className="spacer" />
                <li>LinkedIn:</li>
                <li>
                  <a
                    className="special-link"
                    href="https://www.linkedin.com/in/SamuelSuddath/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    linkedin.com/in/SamuelSuddath/
                  </a>
                </li>
              </ul>
              <ul>
                <li>Phone:</li>
                <li>813-486-8098</li>
                <div className="spacer" />
                <li>Github:</li>
                <li>
                  <a
                    className="special-link"
                    href="https://github.com/SolonTheWizard"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    github.com/SolonTheWizard
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Wrapper>
      </Layout>
    );
  }
}

const Wrapper = styled.div`
  display: flex;
  min-width: 100%;
  min-height: 100vh;
  margin: 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  flex-grow: 1;

  @media only screen and (min-width: 751px) {
    /* For desktop: */
    .business-card {
      box-shadow: 5px 10px 23px rgba(31, 28, 87, 0.2);
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 30px 30px;
      margin-bottom: 75px;
      width: 600px;
      background: #f4f7fb;
    }

    .internal-links {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      margin: 24px 0 8px;
      width: 100%;
    }
    .external-links {
      display: flex;
      flex-direction: row-reverse;
      justify-content: flex-start;
      align-items: center;
      min-width: 100%;
    }
    .contact-info {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      width: 100%;
      margin-top: 10px;
      border-top: 1px solid black;
      padding-top: 15px;
    }
    ul {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-block-start: 4px;
      margin-block-end: 4px;
      list-style-type: none;
      padding-inline-start: 0;
      width: 40%;
    }
    li {
      margin: 3px;
      font-size: 0.9rem;
      padding: 0;
      color: #000000;
    }

    .special-link {
      margin: 3px;
      font-size: 0.9rem;
      padding: 0;
      color: #3433ff;
    }

    .social-media-link {
      width: 32px;
      height: 32px;
      padding: 0;
      margin: 0 10px;
    }

    a {
      color: #000000;
      text-decoration: none;
      text-align: center;
      padding: 8px 18px;
      font-size: 1rem;
      border-radius: 2px;
    }
    .spacer {
      margin: 4px;
    }

    button {
      color: #000000;
      text-decoration: none;
      text-align: center;
      padding: 8px 8px;
      font-size: 1.1rem;
      border-radius: 2px;
      background: none;
      border: 0 transparent;
      width: 80px;
      margin: 0 25px;
    }
    button:hover {
      transition: ease 0.3s;
      cursor: pointer;
      color: #3433ff;
    }
    button:focus {
      outline: none;
    }

    .directory-link {
      width: 80px;
      padding: 8px;
      font-size: 1.1rem;
      margin: 0 25px;
    }
    .directory-link:hover {
      transition: ease 0.3s;
      color: #3433ff;
    }
    .menu-bar-link {
      padding: 5px 0px;
      margin: 0 0 15px;
      text-align: center;
    }

    .title {
      padding: 40px 10px 8px;
      font-size: 2.75rem;
      font-weight: 600;
      margin: 0;
      /* ask kelson to help me change the font*/
    }
    .subtitle {
      padding: 8px 10px;
      margin: 0;
      font-size: 1.5rem;
      font-weight: 400;
      /* ask kelson to help me change the font*/
    }

    .info {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 100%;
      margin: 0 0 10px;
    }
    .hidden {
      display: none;
    }
  }
  @media only screen and (max-width: 750px) {
    /* For mobile: */
    .business-card {
      box-shadow: 5px 10px 23px rgba(31, 28, 87, 0.2);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 20px 20px;
      margin-bottom: 75px;
      width: 300px;
      background: #f4f7fb;
    }

    .internal-links {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      margin: 16px 0 8px;
      width: 100%;
    }
    .external-links {
      display: flex;
      flex-direction: row-reverse;
      justify-content: flex-start;
      align-items: center;
      min-width: 100%;
    }
    .contact-info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      border-top: 1px solid black;
      padding-top: 10px;
    }
    ul {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-block-start: 0;
      margin-block-end: 0;
      list-style-type: none;
      padding-inline-start: 0;
      width: 100%;
      margin: 3px;
    }
    li {
      text-align: center;
      margin: 3px;
      font-size: 0.9rem;
      font-weight: 400;
      padding: 0;
      color: #000000;
      width: 100%;
    }

    .special-link {
      margin: 3px;
      font-size: 0.9rem;
      padding: 0;
      color: #3433ff;
    }

    .social-media-link {
      width: 32px;
      height: 32px;
      padding: 0;
      margin: 0 10px;
    }

    a {
      color: #000000;
      text-decoration: none;
      text-align: center;
      padding: 8px 18px;
      font-size: 1rem;
      border-radius: 2px;
    }
    .spacer {
      margin: 4px;
    }

    button {
      color: #000000;
      text-decoration: none;
      text-align: center;
      padding: 8px 8px;
      font-size: 1.1rem;
      border-radius: 2px;
      background: none;
      border: 0 transparent;
      width: 80px;
      margin: 0 8px;
    }
    button:hover {
      transition: ease 0.3s;
      cursor: pointer;
      color: #3433ff;
    }
    button:focus {
      outline: none;
    }

    .directory-link {
      width: 60px;
      padding: 8px;
      font-size: 1.1rem;
      margin: 0 8px;
    }
    .directory-link:hover {
      transition: ease 0.3s;
      color: #3433ff;
    }
    .menu-bar-link {
      padding: 5px 0px;
      margin: 0 0 15px;
      text-align: center;
    }

    .title {
      padding: 20px 10px 8px;
      font-size: 2.75rem;
      font-weight: 600;
      margin: 0;
      /* ask kelson to help me change the font*/
    }
    .subtitle {
      padding: 8px 10px;
      margin: 0;
      font-size: 1.5rem;
      font-weight: 400;
      width: 275px;
    }

    .info {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 100%;
      margin: 0;
    }
    .hidden {
      display: none;
    }
  }
`;
export default IndexPage;
