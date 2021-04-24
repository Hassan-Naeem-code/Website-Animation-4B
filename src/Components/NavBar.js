import React from 'react'
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import '../Css/navbar.css';


const NavbarCom = (props) => {
  return (
    <Container className="navbarContainer">
      <nav className="pt-2">
        <Navbar collapseOnSelect expand="lg">
          <Navbar.Brand href="/">
            <img src='data:image/png;base64,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' width={60} height={60} alt="logo" />
            <span className="brandName"> MUTIFY</span>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-center navbarLink" id="responsive-navbar-nav">
            <Nav>
              <Nav.Link as="li" className="navLink">
                Works With
              </Nav.Link>
              <Nav.Link as="li" className="navLink">
                Noise Level
              </Nav.Link>
              <Nav.Link as="li" className="navLink">
                Switch Device
              </Nav.Link>
              <Nav.Link as="li" className="navLink">
                Feedback
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
            <Nav>
              <Nav.Link as="li" className="navLink">
              <Button className="downloadBtn">Download</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </nav>
    </Container>
  )
}
export default NavbarCom;