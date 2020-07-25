import React from 'react';
import './styles.css';
import './../../photon/css/photon.min.css';
import Menu from './../Menu';
import { BsFillPersonPlusFill, BsFillPersonLinesFill, BsFilePlus, BsPencilSquare} from 'react-icons/bs';
import { Container, Row, Col } from 'react-bootstrap';

export default function Home() {
    return (
        <Container fluid >

            <div class="window">

                <div class="window-content">
                    <div class="pane-group">
                        <div class="pane-sm sidebar">

                            <Menu />
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
                            <Row className='adicionar-espaco-cards'>
                                <Col sm={4}>
                                    <div className='cards espaco-cards'>
                                        <BsFillPersonLinesFill className='icones' />
                                        <p className='texto-card'>
                                            Listar clientes para fazer alteração de cadastro
                                        </p>
                                        <div className='buttons'>
                                            <a type='button' href='/clientes_list' className=''>
                                                Listar clientes
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