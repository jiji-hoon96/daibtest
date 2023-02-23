import React from "react";
import { FaSearch, FaComment, FaUser, FaEllipsisH } from "react-icons/fa";
import {
  GridCenter,
  Nav,
  NavAlert,
  NavAlertDot,
  NavLink,
} from "../styles/nav-style";

const FootNav = () => {
  return (
    <Nav>
      <GridCenter>
        <NavLink>
          <FaUser />
        </NavLink>
      </GridCenter>
      <GridCenter>
        <NavLink>
          <NavAlert>1</NavAlert>
          <FaComment />
        </NavLink>
      </GridCenter>
      <GridCenter>
        <NavLink>
          <FaSearch />
        </NavLink>
      </GridCenter>
      <GridCenter>
        <NavLink>
          <NavAlertDot />
          <FaEllipsisH />
        </NavLink>
      </GridCenter>
    </Nav>
  );
};

export default FootNav;
