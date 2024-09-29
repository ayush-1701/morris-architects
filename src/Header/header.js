import React from 'react';
import logo from '../logo.svg';
import styled from 'styled-components';
import './header.css';

const Header = () => {
  return (
    <header className="header">
    
    {/* <img src={logo} className="App-logo" alt="logo" /> */}

      <h1 className="logo">Morris Architectures</h1>
      <nav className="nav">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contactUs">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;