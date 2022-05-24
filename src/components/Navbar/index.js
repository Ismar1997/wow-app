import React from "react";
import { Bars, Nav, NavIcon, NavLink, NavH1 } from "./NavbarElements";
import { FaDAndD } from "react-icons/fa";
const Navbar = (props) => {
  return (
    <>
      <Nav>
        <NavLink className="longText" to="/">
          WAY OF WARRIOR
          <FaDAndD color="red" />
        </NavLink>
        <NavIcon onClick={props.toggle}>
          <p>Menu</p>
          <Bars />
        </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;
