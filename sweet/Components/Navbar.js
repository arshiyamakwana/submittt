import React from 'react';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const MyNavbar = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary w-100 m-0 px-3">
            <Navbar.Brand href="navbar-brand fs-1 fst-italic" to="/">sweet shop</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/createuser">signup</Nav.Link>

                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default MyNavbar;
