import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

function Header() {
  return (
    <>
        <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home" className='text-danger fw-bolder'>Car Gallery</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home" className='fw-semibold'>Home</Nav.Link>
            <Nav.Link href="#features" className='fw-semibold'>Features</Nav.Link>
            <Nav.Link href="#pricing" className='fw-semibold'>Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Header