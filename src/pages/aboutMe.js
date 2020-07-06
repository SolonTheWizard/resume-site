import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import headshot from '../images/headshot.png';
import SEO from '../global/seo';
import Layout from '../global/layout';

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
          About Me
        </Link>
      </div>
      <div className="card">
        <img src={headshot} alt="My Headshot" />
        <div className="about">
          <p>
            Sam Suddath is a creative and driven software engineer based out of
            Tampa, Florida. He graduated from the University of South Florida in
            December of 2015 with his Bachelor's of Science in Computer Science.
          </p>
          <p>
            After graduation, Sam started his career as a Junior Software
            Engineer for Lockheed Martin in Marietta, GA, where he worked for a
            year. After his year at Lockheed Martin, he moved back to Tampa for
            an Avionics Software Engineering position at CAE USA, where he has
            worked for the past 3 years now.
          </p>
          <p>
            Since then, Sam has launched his career as a React Engineer,
            spending nights and weekends learning new technologies, building
            apps, and practicing his Web Dev skills.
          </p>
          <p>
            When he isn't coding, Sam enjoys spending time with his wife Liz,
            writing and DM'ing for his D&D campaign, and tackling handy-man
            projects around the house.
          </p>
        </div>
      </div>
    </Wrapper>
  </Layout>
);

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
    padding: 10px 10px;
    width: 100%;
    flex-grow: 1;
    margin-bottom: 20px;
    margin-top: 15px;
    -webkit-box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.15);
    -moz-box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.15);
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.15);
  }
  .card {
    display: flex;
    flex-grow: 1;
    background: #f4f7fb;
    min-width: 500px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 5px;
    -webkit-box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.15);
    -moz-box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.15);
    box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.15);
    margin-bottom: 20px;
  }
  .selected-page {
    border-bottom: 1px solid #ffffff;
  }

  a {
    margin: 5px 9px 15px;
    color: black;
    text-decoration: none;
    width: 105px;
    text-align: center;
  }

  img {
    max-width: 300px;
    height: auto;
    margin-top: 40px;
    -webkit-box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.15);
    -moz-box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.15);
    box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.15);
    border-radius: 2px;
  }

  .about {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 500px;
    margin: 20px 40px 20px;
    padding: 10px 0 50px;
  }
  .menu-bar-link {
    color: #ffffff;
  }
  p {
    text-align: center;
    margin-block-start: 7px;
    margin-block-end: 7px;
    color: #525f7f;
  }
`;

export default AboutMePage;
