import React from "react";
import { slide as Menu } from "react-burger-menu";
import { NavLink } from "react-router-dom";

export default props => {
  return (
    // Pass on our props
    <Menu {...props}>

    <ul>
      <li>
        <NavLink  activeClassName="current" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink   activeClassName="current" to="accounts">
          Accounts
        </NavLink>
      </li>
      <li>
        <NavLink   activeClassName="current" to="budget">
          Budget
        </NavLink>
      </li>
    </ul>

    </Menu>
  );
};