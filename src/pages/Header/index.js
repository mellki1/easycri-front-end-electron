import React from 'react';
import './styles.css';
import Logo from './../../assets/logo.png';
import { Container, Image } from 'react-bootstrap';
import { BsFillPersonPlusFill, BsFilePlus, BsPencilSquare, BsHouseFill } from 'react-icons/bs';
export default function Header() {
    return (
        <Container fluid>

            <div class="pane-sm sidebar">
                { /* Menu */}
                <nav class="nav-group">
                    <Image src={Logo} fluid />
                    <h4 class="nav-group-title">Menu</h4>
                    <span class="nav-group-item">
                        <BsHouseFill className='icones-menu' />
                        Inicio
                    </span>
                    <span class="nav-group-item">
                        <BsFillPersonPlusFill className='icones-menu' />
                        Cadastrar clientes
                    </span>
                    <span class="nav-group-item">
                        <BsFilePlus className='icones-menu' />
                        Cadastrar requerimento
                    </span>
                    <span class="nav-group-item">
                        <BsPencilSquare className='icones-menu' />
                            Gerar ato
                    </span>
                </nav>
            </div>

        </Container>
    );
}