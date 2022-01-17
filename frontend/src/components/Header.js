import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
const Header = () => {
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    <Navbar.Brand href="/">Ecommerce</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/cart"><i class="fas fa-cart-plus"></i> Cart</Nav.Link>
                        <Nav.Link href="/signin"><i class="fas fa-user"></i> SignIn</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar> 
        </header>
    )
}

export default Header
