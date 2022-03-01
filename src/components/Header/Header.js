import React from 'react';
import Bootstrap from 'bootstrap';
import Logo from '../../assets/images/logo.png';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';


const Header = () => {
    return (
        <div>
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand href="#home"> <img src={Logo} alt="Logo" /> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto">
                        <Nav.Link href="#home">MOONBEAM</Nav.Link>
                        <Nav.Link href="#link">DELEGATORS</Nav.Link>
                        <Nav.Link href="#link">MOONRIVER</Nav.Link>
                        <Nav.Link href="#link">STAKE WITH US</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}


export default Header;