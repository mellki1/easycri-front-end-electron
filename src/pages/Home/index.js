import React from 'react';
import './styles.css';
import './../../photon/css/photon.min.css';
import { BsFillPersonPlusFill, BsFilePlus, BsPencilSquare, BsHouseFill } from 'react-icons/bs';
import { Container, Row, Col } from 'react-bootstrap';
export default function Home() {
    return (
        <Container fluid >
            
            <div class="window">
               
                <div class="window-content">
                    <div class="pane-group">
                        <div class="pane-sm sidebar">
                            <nav class="nav-group">
                                <h4 class="nav-group-title">Menu</h4>
                                <span class="nav-group-item">
                                    <BsHouseFill className='icones-menu'/>
                                        Inicio
                                </span>
                                <span class="nav-group-item">
                                    <BsFillPersonPlusFill className='icones-menu'/>
                                        Cadastrar clientes
                                </span>
                                <span class="nav-group-item">
                                    <BsFilePlus className='icones-menu'/>
                                        Cadastrar requerimento
                                </span>
                                <span class="nav-group-item">
                                    <BsPencilSquare className='icones-menu'/>
                                        Gerar ato
                                </span>
                                
                               
                            </nav>
                        </div>
                        <div class="pane">
                            <Row>
                                <Col md>
                                    <div className='cards'>
                                        <BsFillPersonPlusFill className='icones' />
                                        <p className='texto-card'>
                                            Cadastrar novo cliente na base de dados
                                        </p>
                                        <div className='buttons'>
                                            <a type='button' href='/clientes' className=''>
                                                Cadastrar cliente
                                            </a>
                                        </div>
                                    </div>
                                </Col>
                                <Col md>
                                    <div className='cards'>
                                        <BsFilePlus className='icones' />
                                        <p className='texto-card'>
                                            Cadastrar novo Requerimento
                                        </p>
                                        <div className='buttons'>
                                            <a type='button' href='/' className=''>
                                                Cadastrar Requerimento
                                            </a>
                                        </div>
                                    </div>
                                </Col>
                                <Col md>
                                    <div className='cards'>
                                        <BsPencilSquare className='icones' />
                                        <p className='texto-card'>
                                            Gerar ato de averbação ou registro
                                        </p>
                                        <div className='buttons'>
                                            <a type='button' href='/' className=''>
                                                Gerar Ato
                                            </a>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </div>
        </Container>

    );
}       