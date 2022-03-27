import React, { useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import './App.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import {Navbar, Nav, NavDropdown,Container } from 'react-bootstrap';


const Navbarr = () => {
 

  return (
    <>
  <Navbar collapseOnSelect expand="lg" style={{ background: '#e30000' ,height :'50px'}} >
  <Container>
  <img style={{ paddingLeft: '40px' }} src="https://raw.githubusercontent.com/Bateelz/monolist/main/public/assets/images/monolist_red_full_02.png" alt="" width="160px"></img>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    </Nav>
    <Nav>
      <NavDropdown title="username" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Logout</NavDropdown.Item>
       
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>


</>
  );
};
export default Navbarr;