import React from 'react';
import Nav from './nav';

const Header = () => (
  <header className="header">
    <div className="panel">
      <div>
        <a href="/index.html" alt="Home">
          <img className="logo" src="/images/logo-large.png" alt="STaC Solutions Ltd" />
        </a>
      </div>
      <Nav />
    </div>
  </header>
);

export default Header;
