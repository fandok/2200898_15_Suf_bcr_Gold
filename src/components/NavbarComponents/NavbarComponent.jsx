import "./NavbarComponent.css";

import { Navbar, Nav, Container } from "react-bootstrap";

import { useNavigate } from "react-router-dom";

const NavbarComponent = () => {
  let navigate = useNavigate();
  return (
    <div className="navBackgroundColor">
      <Navbar expand="lg">
        <Container className="mb-5">
          <Navbar.Brand href="" onClick={() => navigate("/")}></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#home">Our Service</Nav.Link>
              <Nav.Link href="#link">Why Us</Nav.Link>
              <Nav.Link href="#link">Testimonial</Nav.Link>
              <Nav.Link href="#link">FAQ</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
