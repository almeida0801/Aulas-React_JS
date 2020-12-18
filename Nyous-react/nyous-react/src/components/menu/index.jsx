import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

// quando queriamos renderizar apenas html utiliza-se uma fuction
// quando queriamos ter algum comportamento eu utilizo uma class 

// Pure Function
const Menu = () => {
    return(
        // criando a navbar
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">NYOUS</Navbar.Brand>
        <Navbar.Collapse id ="responsive-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            </Nav>
            <Nav>
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/cadastrar">Cadastrar</Nav.Link>
            </Nav>
        </Navbar.Collapse>

    </Navbar> 
    )
}


export default Menu;
