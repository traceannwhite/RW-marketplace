import React, { useState } from "react";
import { Container, Navbar, Nav, NavItem, NavLink } from "reactstrap";
import SearchBar from "./Searchbar";
import { RiShoppingCartLine } from "react-icons/ri";
import Image from "next/image";

// import NavAuth from "./NavAuth";

const NavBar = () => {
  return (
    <div className="nav-container" id="navbar">
      <Navbar color="light" light expand="md" className="nav-bar">
        <Container className="home-logo">
          <NavLink href="/" className="nav-link" id="navbar-home">
            <Image
              src="https://res.cloudinary.com/dhcagrzcb/image/upload/v1631639955/resonance_wonder_u5ooyz.png"
              style={{ width: "7em" }}
            />
          </NavLink>
        </Container>
        <Container className="user-links">
          <NavLink href="/signup">Sign Up</NavLink>
          <NavLink href="/login">Log In</NavLink>
          {/* <NavAuth /> */}
          <NavItem>
            <NavLink href="/cart">
              <RiShoppingCartLine />
            </NavLink>
          </NavItem>
        </Container>
      </Navbar>
      {/* <SearchBar /> */}
      <Nav className="product-pages-links">
        <NavItem>
          <NavLink href="/products/clothingandshoes/">
            Clothing and Shoes
          </NavLink>
        </NavItem>
        <hr />
        <NavItem>
          <NavLink href="/products/homeandliving/">Home and Living</NavLink>
        </NavItem>
        <hr />

        <NavItem>
          <NavLink href="/products/ecofriendly/">Eco-friendly Products</NavLink>
        </NavItem>
        <hr />
        <NavItem>
          <NavLink href="/products/selfcare/">Self-care Goods</NavLink>
        </NavItem>
      </Nav>
    </div>
  );
};

export default NavBar;
