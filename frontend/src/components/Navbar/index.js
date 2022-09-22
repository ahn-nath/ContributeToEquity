// TODO: add documentation

import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/login" activeStyle>
            Login
          </NavLink>
          <NavLink to="/register" activeStyle>
            Register
          </NavLink>
          <NavLink to="/blogs" activeStyle>
            Contributions feed
          </NavLink>
          <NavLink to="/sign-up" activeStyle>
            Contributions in progress
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;