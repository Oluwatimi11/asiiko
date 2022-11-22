import React from "react";
import Link from 'react-dom'
import { NavbarButtons, NavbarDiv, NavbarList, NavListItem } from "./right-nav.styles";

const RightNav = ({ tobtn2, open }) => {
  return (
    <NavbarDiv open={open}>
      <NavbarList>
        <NavListItem component={Link} to="/" className="nav-list">
          PRODUCT
        </NavListItem>
        <NavListItem component={Link} to="/" className="nav-list">
          WHO WE SERVE
        </NavListItem>
        <NavListItem component={Link} to="/" className="nav-list">
          PRICING
        </NavListItem>
      </NavbarList>
      <NavbarButtons
            width1="110px"
            color1="#fff"
            backgroundColor1="#0a76d5"
            buttonText1="LOG IN"
            marginRight1=".3rem"
            width2="110px"
            color2="#000"
            backgroundColor2="#9ef9d9"
            buttonText2="GET STARTED"
            tobtn2={tobtn2}
          />
    </NavbarDiv>
  );
};

export default RightNav;
