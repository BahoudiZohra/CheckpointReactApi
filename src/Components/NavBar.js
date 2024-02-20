import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';


const NavBar = () => {
  return (
    <div style={{marginBottom:'50px'}}>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">WorkShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/users">Users List </Nav.Link>
            <Nav.Link href="/login">Login </Nav.Link>
            <Nav.Link href="/admin">Admin </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar
