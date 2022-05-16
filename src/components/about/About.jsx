import React from 'react';
import './about.css';
import ai from '../../assets/self.jpeg';

function About() {
  return (
    <div className="header section__padding" id="home">
    <div className="header-content">
      <h4>1. Who am I?</h4>
      <h3 className="gradient__text">About Me</h3>
      <div className="about-me">
        <p>
          I am a recent graduate from San Jose State University!
          I love to work on fun and interactful projects.
          I am currently actively seraching for work.
        </p>
      </div>
      <div className="about-info">
        <h3 className="gradient__text">My Skills</h3>
        <div className="about__info-description">
          <div className="about__info-subtitle">Programming Languages:</div>
          <p className="about__info-subinfo">JavaScript, Java, Python, C/C++</p>
        </div>
        <div className="about__info-description">
          <div className="about__info-subtitle">Web Technology:</div>
          <p className="about__info-subinfo">HTML, PHP, CSS, React</p>
        </div>
        <div className="about__info-description">
          <div className="about__info-subtitle">Databases:</div>
          <p className="about__info-subinfo">MySQL</p>
        </div>
      </div>
    </div>
    <div className="header-image">
      <img src={ai} alt="self portrait"/>
    </div>
  </div>
  )
}

export default About
