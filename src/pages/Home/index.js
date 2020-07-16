import React from 'react';
import './styles.css';
import Header from './../Header';
import { BsFillPersonPlusFill, BsFilePlus, BsPencilSquare } from 'react-icons/bs';
import { Container, Row, Col } from 'react-bootstrap';
export default function Home() {
    return (
        <Container fluid >
            <Row className='nav-bar'>
                <Col>
                    <Header />
                </Col>
            </Row>
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

        </Container>

    );
}       