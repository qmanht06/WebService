import React from "react";
import "./NavBar.scss";
import { NavLink, useRouteMatch } from "react-router-dom";

const NavBar = () => {
  let { url } = useRouteMatch();
  return (
    <div className="topnav">
      <NavLink to={`${url}/home`} activeClassName="active" exact={true}>
        Home
      </NavLink>
      <NavLink to={`${url}/category`} activeClassName="active">
        Category
      </NavLink>
      <NavLink to={`${url}/order`} activeClassName="active">
        Order
      </NavLink>
      {/* <NavLink to="/admin/" activeClassName="active" exact={true}>
        Home
      </NavLink> */}
    </div>
  );
};

export default NavBar;
