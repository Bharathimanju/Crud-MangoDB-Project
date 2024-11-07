// NavigationBar.js
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import logos from './images/logos.png' 
import './navbar.css'


const NavigationBar = () => {
    return (
        <Navbar style={{backgroundColor:"#fdf2e9" }}>
            <Navbar.Brand href="/">
                <img src={logos} alt="Logo" height="50px" style={{ marginLeft: '45px' }} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" style={{ marginLeft: '55px' }}>
                <Nav className="mr-auto">
                    <LinkContainer to="/">
                        <Nav.Link id="font" className="navbar-link" > <i class='bx bxs-home-heart'id="icons"></i>  Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/cruds">
                        <Nav.Link  className="navbar-link"><i class='bx bxl-mongodb'id="icons"></i> CRUD</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavigationBar;
