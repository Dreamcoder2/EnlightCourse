import React from "react";
import {  useNavigate } from "react-router-dom";
import { Navbar, Nav, Container, Col, Row } from "react-bootstrap";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  return (
     <div className="sticky-top">
     <Navbar expand="lg" variant="dark" className="navBg">
       <Container>
         <Navbar.Brand href="#" className="logo">
           <Row>
             <Col>
               <img
                 src="/logo1.jpg"
                 alt="Logo"
                 height="60"
                 className="d-inline-block align-top"
               />
             </Col>
             <Col>
               <div className="logoHead1">Enlight</div>
               <div className="logoHead2">Educational Institution</div>
             </Col>
           </Row>
         </Navbar.Brand>

         <Navbar.Toggle aria-controls="collapsibleNavbar" />

         <Navbar.Collapse
           id="collapsibleNavbar"
           className="justify-content-end d-xl-block"
         >
           <div className="navBar">
             <Nav className="navbar-nav fs-5">
               <Nav.Link href="/">Home</Nav.Link>
               
               <Nav.Link  onClick={() => navigate("/course")}>Courses</Nav.Link>
               <Nav.Link   onClick={() => navigate("/cart")}>AddtoCart</Nav.Link>


               
               <Nav.Link href="/Contact">About us</Nav.Link>
               <Nav.Link href="/Signin">User</Nav.Link>
              
               
             </Nav>
           </div>
         </Navbar.Collapse>
       </Container>
     </Navbar>
   </div>
  );
};

export default Header;
