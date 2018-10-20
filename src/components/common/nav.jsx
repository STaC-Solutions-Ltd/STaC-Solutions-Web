import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
  <nav>
    <ul>
      <li>
        <NavLink to="/">
          {'Services'}
        </NavLink>
      </li>
      <li>
        <NavLink to="/blog">
          {'Blog'}
        </NavLink>
      </li>
      <li>
        <a href="mailto:enquiries@stacsolutions.io">
          {'Contact Us'}
        </a>
      </li>
    </ul>
  </nav>
);

export default Nav;
