import React from 'react';
import { NavLink } from 'react-router-dom';

const HeaderNavigation = (
  <div className="navigation-container">
    <ul>
      <li>
        <NavLink activeClassName="active" exact to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/products">
          Products
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" exact to="/contact">
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" exact to="/clients">
          Clients
        </NavLink>
      </li>
    </ul>
  </div>
);

export default HeaderNavigation;
