import React, { useState, useEffect } from 'react'
import { Container, Table, Row } from 'react-bootstrap';
import api from './../../services/api';

import './styles.css';
import Menu from './../Menu';


export default function ListarCliente() {
    
    const [clientes, setClientes] = useState([]);
    
   
    useEffect(()=>{
        api.get('clientes')
        .then(response =>{
            setClientes(response.data.clientes)
        })
        .catch(e =>{
            alert(`${e.response.data}`)
        })
    }, [])
    console.log(clientes);

    return (
         <Container fluid >
            <div class="window">
                <div class="window-content">
                    <div class="pane-group">
                        <div class="pane-sm sidebar">
                            <Menu />
                        </div>
                        <div class="pane">
                        { /* Formulario */}
                            <Row className='cadastro-container'>
                                <div className="content">
                                    <Table striped bordered hover>
                                        <thead>
                                            <tr>
                                                <th>Nome</th>
                                                <th>CPF</th>
                                                <th>Identidade</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {clientes.map(cliente => (
                                                <tr key={cliente._id}>
                                                    <td>{cliente.clientePf.nome}</td>
                                                    <td>{cliente.clientePf.cpf}</td>
                                                    <td>{cliente.clientePf.documentoIdentificacao}</td>
                                                </tr>
                                            ))}
                                            
                                        </tbody>
                                    </Table>

                                </div>
                            </Row>
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </Container> 

    );
}