import React from 'react';
import ai from '../../assets/programmer.svg';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-image">
      <img src={ai} alt="programmer template" />
    </div>
    <div className="gpt3__header-content">
      <h1 className="gradient__text">
        Hello World! <br />
        I&apos;m Alan
      </h1>
      <h3>a Software Developer</h3>
      <h4>I like building fun and enterting technologies!</h4>
    </div>
  </div>
);

export default Header;
