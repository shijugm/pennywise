import React from "react";
import { slide as Menu } from "react-burger-menu";

export default props => {
  return (
    // Pass on our props
    <Menu {...props}>
      <a className="menu-item" href="/">
        Dashboard
      </a>

      <a className="menu-item" href="/accounts">
        Accounts
      </a>

      <a className="menu-item" href="/budget">
        Budget
      </a>

      <a className="menu-item" href="/help">
        Help
      </a>
    </Menu>
  );
};