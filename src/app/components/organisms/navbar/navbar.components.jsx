import React from "react";
import Hamburger from "../../molecules/hamburger/hamburger.components";
import logo from "../../../assets/img/logo.jpg";
import {
  NavBar,
  LogoImage,
  NavbarLeft,
  NavbarRight,
} from "./navbar.styles";

// export let openHamburger = '';

const Navbar = () => {
  return (
    <NavBar>
      <NavbarLeft>
        <LogoImage url={logo} />
      </NavbarLeft>
        <NavbarRight>
          <Hamburger />
        </NavbarRight>
    </NavBar>
  );
};

export default Navbar;
