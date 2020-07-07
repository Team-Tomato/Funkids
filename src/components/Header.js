import React from "react";
import { Navbar, Nav } from 'react-bootstrap';
import './header.css';

function Header({logoImg, width, height, heading}) {

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/Home" className="navBrand">
                    <img
                        alt=""
                        src={logoImg}
                        width={width ? width: 30}
                        height={height ? height : 30}
                        className="d-inline-block align-top"
                    />{' '}
                    {heading}
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="/Home">Home</Nav.Link>
                        <Nav.Link href="/About">About Us</Nav.Link>
                        <Nav.Link href="/Contact">Contact Us</Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}


export default Header;