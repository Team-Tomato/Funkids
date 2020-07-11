import React from "react";
import { Navbar, Nav } from 'react-bootstrap';
import './header.css';
import logo from '../logo2.png';


function Header({logoImg, width, height, heading, theme, headerLinks}) {

    // options for theme: {dark/light}

    return (
        <div style={{marginBottom:'40px'}}>
            <Navbar bg={theme ? theme: 'dark'} variant={theme ? theme :'dark'}>
                <Navbar.Brand href="/Home" className="navBrand">
                    <img
                        alt=""
                        src={logoImg? logoImg :logo}
                        width={width ? width: 30}
                        height={height ? height : 30}
                        className="d-inline-block align-top"
                    />{' '}
                    {heading? heading : 'FUNKIDS'}
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        {headerLinks ? 
                            Object.entries(headerLinks).map(item => (
                                <Nav.Link key={item[0]} href={item[1]}>{item[0]}</Nav.Link>
                            ))
                            : 
                            <Nav.Link href='/home'>Home</Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}


export default Header;