import React from 'react';
import {
 Navbar,
 Nav
} from "react-bootstrap";


export default function Isnavbar() {
    return (
        <Navbar bg="dark" variant="dark">
        {/* <Navbar.Brand href="#home">PTS-world</Navbar.Brand> */}
        <Navbar.Brand href="#home">
        <img
            alt=""
            src="icon.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
        />{' '}
        Hate nihs
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="./privacy.html">隱私政策</Nav.Link>
            <Nav.Link href="https://github.com/phillychi3/hate_nihs">github</Nav.Link>
            </Nav>

        </Navbar.Collapse>
        </Navbar>

        );
    }