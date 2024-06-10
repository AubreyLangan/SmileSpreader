import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";


function CustomNavbar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">Smile Spreaders</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Tracker</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Home</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Random Acts Generator</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Random Acts Tracker</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Smile Spreaders Community</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CustomNavbar;