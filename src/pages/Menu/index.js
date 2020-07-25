import React from 'react';
import './styles.css';
import Logo from './../../assets/logo.png';
import { Container, Image } from 'react-bootstrap';
import { BsFillPersonPlusFill, BsFilePlus, BsPencilSquare, BsHouseFill, BsFillPersonLinesFill } from 'react-icons/bs';
export default function Menu() {
    return (
        <Container fluid>

            <div class="pane-sm sidebar">
                { /* Menu */}
                <nav class="nav-group">
                    <Image src={Logo} fluid />
                    <h4 class="nav-group-title">Menu</h4>
                    
                    <a class="nav-group-item" href='/'>
                        
                        <BsHouseFill className='icones-menu' />
                        Inicio
                      
                    </a>
               
                    <a class="nav-group-item" href='/clientes'>
                        <BsFillPersonPlusFill className='icones-menu' />
                        Cadastrar clientes
                    </a>

                    <a class="nav-group-item" href='/clientes_list'>
                        <BsFillPersonLinesFill className='icones-menu' />
                            Listar Clientes
                    </a>
                    
                    <a class="nav-group-item" href='/'>
                        <BsFilePlus className='icones-menu' />
                        Cadastrar requerimento
                    </a>

                    <a class="nav-group-item" href='/'>
                        <BsPencilSquare className='icones-menu' />
                            Gerar ato
                    </a>

                    
                </nav>
            </div>

        </Container>
    );
}