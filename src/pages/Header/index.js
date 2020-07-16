import React from 'react';
import './styles.css';
import Logo from './../../assets/logo.png';
import { Container, Navbar, Nav } from 'react-bootstrap';
export default function Header() {
    return (
        <Container fluid>

            <header>
                <Navbar collapseOnSelect expand='lg' >
                    <Navbar.Brand href="/">
                        <img className='logo' src={Logo} alt='' />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className='nav-bar-itens'>
                            <Nav.Link href='/'>Tela inicial</Nav.Link>
                            <Nav.Link hef=''>Gerar ato</Nav.Link>
                            <Nav.Link href=''>Gerar carimbo</Nav.Link>
                            <Nav.Link href='/cadastroCliente'>Cadastrar cliente</Nav.Link>
                        </Nav>
                        <Nav className='ml-auto p-2' >
                            <Nav.Link href=''>Contatos</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </header>

        </Container>
    );
}