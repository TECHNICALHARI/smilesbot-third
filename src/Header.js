import React from "react";
import "./Header.css";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <>
      <Navbar expand="lg">
        <Navbar.Brand as={Link} to="/" className ="header_logo">
          Bella
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <NavDropdown title="Shop" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Phones</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Laptop</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Cloths</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/favorites">
              Favorites
            </Nav.Link>
            <Nav.Link as={Link} to="/orders">
              Orders
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contacts
            </Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link as={Link} to={!user && "/login"}>
              <div className="header_option" onClick={handleAuthenticaton}>
                <span className="header_optionLineOne">
                  Hello {!user ? "Guest" : user.email}
                </span>
                <span className="header_optionLinetwo">
                  {user ? "Sign Out" : "Sign In"}
                </span>
              </div>
            </Nav.Link>
            <Nav.Link as={Link} to="/checkout">
              <div className="header_optionBasket">
                <ShoppingBasketIcon />
                <span className="header_optionLinetwo header_basketCount">
                  {basket?.length}
                </span>
              </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Header;
