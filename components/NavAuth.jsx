import React, { useState } from "react";
import {
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { IoPerson } from "react-icons/io";
// import { useUser } from "@auth0/nextjs-auth0";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const { user, isLoading } = useUser();
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="nav-auth-container" id="navbar">
      <NavbarToggler onClick={toggle} id="navbar-toggle" />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="login" navbar>
          {/* {!isLoading && !user && ( */}
          <NavItem id="qsLoginBtn">
            <NavLink
              href="/api/auth/login"
              className="btn btn-primary btn-margin"
              tabIndex={0}
              id="navbar-login-desktop"
            >
              Log in
            </NavLink>
          </NavItem>
          {/* )} */}
          {/* {user && ( */}
          <UncontrolledDropdown
            nav
            inNavbar
            id="navbar-menu-desktop"
            className="navbar-menu-dropdown"
          >
            <DropdownToggle
              nav
              caret
              id="profileDropDown"
              className="navbar-profile-pic"
            >
              <IoPerson />
              {/* <img
                src={user.picture}
                src=""
                alt="Profile"
                className="nav-user-profile"
                width="50"
                height="50"
                decode="async"
                id="navbar-picture-desktop"
              /> */}
            </DropdownToggle>
            <DropdownMenu className="dropdown-menu">
              <DropdownItem header id="navbar-user-desktop">
                {username}
              </DropdownItem>
              <DropdownItem className="dropdown-profile" tag="span">
                <NavLink
                  href="/profile"
                  icon="user"
                  id="navbar-profile-desktop"
                >
                  My Profile
                </NavLink>
              </DropdownItem>
              <DropdownItem className="dropdown-profile" tag="span">
                <NavLink
                  href="/profile"
                  icon="user"
                  id="navbar-profile-desktop"
                >
                  Orders
                </NavLink>
              </DropdownItem>
              <DropdownItem id="qsLogoutBtn">
                <NavLink
                  href="/api/auth/logout"
                  icon="power-off"
                  id="navbar-logout-desktop"
                >
                  Log out
                </NavLink>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          {/* )} */}
        </Nav>
      </Collapse>
      {/* {!isLoading && !user && (
              <Nav className="d-md-none" navbar>
                <NavLink
                  href="/api/auth/login"
                  className="btn btn-primary btn-block"
                  tabIndex={0}
                  id="navbar-login-mobile"
                >
                  Log in
                </NavLink>
              </Nav>
            )}
            {user && (
              <Nav
                id="nav-mobile"
                className="d-md-none justify-content-between"
                navbar
              >
                <NavItem>
                  <span className="user-info">
                    <img
                      src={user.picture}
                      alt="Profile"
                      className="nav-user-profile d-inline-block rounded-circle mr-3"
                      width="50"
                      height="50"
                      decode="async"
                      id="navbar-picture-mobile"
                    />
                    <h6 className="d-inline-block" id="navbar-user-mobile">
                      {user.name}
                    </h6>
                  </span>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="/profile"
                    icon="user"
                    id="navbar-profile-mobile"
                  >
                    Profile
                  </NavLink>
                </NavItem>
                <NavItem id="qsLogoutBtn">
                  <NavLink
                    href="/api/auth/logout"
                    className="btn btn-link p-0"
                    icon="power-off"
                    id="navbar-logout-mobile"
                  >
                    Log out
                  </NavLink>
                </NavItem>
              </Nav>
            )} */}
    </div>
  );
};

export default NavBar;
