//TODO: DONE set NavbarBrand to go to home page and export Header

import React from "react";
import { Navbar, NavbarBrand, NavbarText } from "reactstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar className="mx-5">
      <NavbarBrand
        tag={Link}
        to="/"
        className="text-light"
        style={{ fontSize: 28, fontWeight: 500 }}
      >
        Contact App
      </NavbarBrand>
    </Navbar>
  );
};

export default Header;
