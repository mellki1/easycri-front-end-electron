import React, { useState, useEffect } from 'react'
import { Container, Table, Row } from 'react-bootstrap';
import api from './../../services/api';

import './styles.css';
import Menu from './../Menu';
import MaskedInput from 'react-text-mask';


export default function ListarCliente() {
    
    const [clientes, setClientes] = useState([]);
    const [cpf, setCpf] = useState();

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
  
    async function pesquisaPorCpf(){
       await api.get(`clientes/cpf/${cpf}`)
        .then(response =>{
            setClientes(response.data.clientes)
        })
        .catch(e =>{
            alert(`${e.response.data}`)
        })
    }
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
                                    <MaskedInput
                                        id='cpf'
                                        className='form-control'
                                        required
                                        mask={[/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/,]}
                                        value={cpf}
                                        onChange={e => setCpf(e.target.value)}
                                        onKeyUp={(e) => {
                                            setCpf(e.target.value);
                                            console.log(cpf);
                                            pesquisaPorCpf();
                                        }}
                                    />
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