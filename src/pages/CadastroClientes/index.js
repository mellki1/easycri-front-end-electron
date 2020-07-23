import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

import MaskedInput from 'react-text-mask';
import { validateBr } from 'js-brasil';
import api from './../../services/api';

import './styles.css';
import Header from '../Header';

export default function CadastroCliente() {
    const [form, setForm] = useState();
    const [validated, setValidated] = useState(false);
    //States do formulario
    const [sexo, setSexo] = useState();
    const [nome, setNome] = useState();
    const [nacionalidade, setNacionalidade] = useState();
    const [estadoCivil, setEstadoCivil] = useState();
    const [profissao, setProfissao] = useState();
    const [tipoDocumento, setTipoDocumento] = useState('identidade');
    const [documentoIdentificacao, setDocumentoIdentificacao] = useState();
    const [cpf, setCpf] = useState();
    const [nomePai, setNomePai] = useState();
    const [nomeMae, setNomeMae] = useState();
    const [logradouro, setLogradouro] = useState();
    const [numero, setNumero] = useState();
    const [bairro, setBairro] = useState();
    const [cidade, setCidade] = useState();
    const [uf, setUf] = useState();
    const [email, setEmail] = useState();
    const [telefone, setTelefone] = useState();

    //funcao para validar CPF
    function validacaoCPF(cpfCli) {
        console.log(cpfCli);
        if (validateBr.cpf(cpfCli) === true) {
            return true;
        } else if (validateBr.cpf(cpfCli) === false) {

            return false;
        }

    }

    //Verificando CPF enquanto e digitado
    function verificacaoCpf() {
        let cpfCli = document.getElementById('cpf');

        //Validando CPF e mudando CSS
        if (validacaoCPF(cpf) === false) {
            cpfCli.className = 'cpf-invalido';

        } else if (validacaoCPF(cpf) === true) {
            cpfCli.className = 'form-control';
        }
    }

    //Mascara para telefone
    const mascaraTelefone = (e) => {
        const telefoneCli = document.getElementById('telefone').value;
        let tamanhoTelefone = telefoneCli.length;
        if (tamanhoTelefone < 15) {
            return (['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]);
        } else {
            return (['(', /\d/, /\d/, ')', ' ', /\d/, ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]);
        }
    }

   

    //Verificando se o formulario foi preenchido correntamente
    async function handleSubmit(event) {

        const formulario = event.currentTarget;

        if (formulario.checkValidity() === false || validacaoCPF(cpf) === false) {
            alert(`Cadastro não preenchido corretamente`);
            event.preventDefault();
            event.stopPropagation();
            
        } 
        const data = {
            tipo: "PESSOA_FISICA",
            endereco: {
                logradouro,
                numero,
                bairro,
                cidade,
                uf
            },
            email,
            telefone,
            clientePf: {
                cpf,
                nome,
                nacionalidade,
                estadoCivil,
                profissao,
                documentoIdentificacao,
                tipoDocumento,
                sexo,
                nomePai,
                nomeMae
            }
        }

        const response = await api.post('clientes', data).then(()=>{
            alert(`Cliente ${response.data.clientePf.nome} adicionado com sucesso`);
            if(response.status === 200){
                setValidated(true);
            }
        })
        .catch((e)=>{
            alert(`${e.response.data.error}`);
        });
            
    
        
    }

    /* Opções de acordo com o sexo */
    async function Formulario(sexoCli) {


        if (sexoCli === 'sexo_masculino') {

            setForm(
                <Form.Row >
                    <Col xs={4}>
                        <Form.Group controlId="nacionalidade">
                            <Form.Label>Nacionalidade</Form.Label>

                            <Form.Control
                                required
                                type="text"
                                value='brasileiro'
                                onChange={e => setNacionalidade(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="estado_civil">
                            <Form.Label>Estado Civil</Form.Label>

                            <Form.Control
                                required
                                as="select"
                                default={estadoCivil}
                                onChange={e => setNacionalidade(e.target.value)}

                            >
                                <option>solteiro</option>
                                <option>solteiro, convivente em união estável</option>
                                <option>casado</option>
                                <option>divorciado</option>
                                <option>viúvo</option>
                                <option>separado judicialmente</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Form.Row >

            );
        } else if (sexoCli === 'sexo_feminino') {

            setForm(
                <Form.Row>
                    <Col xs={4}>
                        <Form.Group controlId="nacionalidade">
                            <Form.Label>Nacionalidade</Form.Label>

                            <Form.Control
                                required
                                type="text"
                                value='brasileira'
                                onChange={e => setNacionalidade(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="estado_civil">
                            <Form.Label>Estado Civil</Form.Label>


                            <Form.Control
                                required
                                as="select"
                                defaultValue={estadoCivil}
                                onChange={e => setEstadoCivil(e.target.value)}
                            >
                                <option>solteira</option>
                                <option>solteira, convivente em união estável</option>
                                <option>casada</option>
                                <option>divorciada</option>
                                <option>viúva</option>
                                <option>separada judicialmente</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Form.Row>

            );

        }
    }

    return (

        <Container fluid >
            <div class="window">

                <div class="window-content">
                    <div class="pane-group">
                        <div class="pane-sm sidebar">
                            <Header />
                        </div>
                        <div class="pane">
                            { /* Formulario */}
                            <Row className='cadastro-container'>
                                <div className="content">
                                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                        <Form.Row>
                                            <Col>
                                                <Form.Group>
                                                    <Form.Label>Sexo</Form.Label>
                                                    <div>
                                                        <label>
                                                            <input
                                                                type="radio"
                                                                name='sexo'
                                                                value='sexo_feminino'
                                                                onChange={
                                                                    e => {
                                                                        setSexo(e.target.value);
                                                                        setEstadoCivil('solteira');
                                                                        setNacionalidade('brasileira');
                                                                        Formulario(e.target.value);
                                                                    }
                                                                }
                                                            />
                                                                Feminino
                                                            </label>

                                                        <label className='espaco-radio'>
                                                            <input
                                                                type="radio"
                                                                name='sexo'
                                                                value='sexo_masculino'
                                                                onChange={
                                                                    e => {
                                                                        setSexo(e.target.value);
                                                                        setEstadoCivil('solteiro');
                                                                        setNacionalidade('brasileiro');
                                                                        Formulario(e.target.value);
                                                                    }
                                                                }
                                                            />
                                                                Masculino
                                                            </label>
                                                    </div>
                                                </Form.Group>
                                            </Col>

                                        </Form.Row>

                                        <Form.Row>
                                            <Col xs={6} className='space'>
                                                <Form.Group as={Row} controlId='nome'>
                                                    <Form.Label>Nome completo</Form.Label>
                                                    <Form.Control
                                                        required type="text"
                                                        value={nome}
                                                        onChange={e => setNome(e.target.value)}
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col className='space'>
                                                {form}
                                            </Col>
                                        </Form.Row>


                                        <Form.Row>
                                            <Col>
                                                <Form.Group controlId="profissao">
                                                    <Form.Label>Profissão</Form.Label>
                                                    <Form.Control
                                                        required
                                                        type="text"
                                                        value={profissao}
                                                        onChange={e => setProfissao(e.target.value)}
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                                <Form.Group controlId="tipo_documento">
                                                    <Form.Label>Tipo de Documento</Form.Label>
                                                    <Form.Control
                                                        required
                                                        as="select"
                                                        value={tipoDocumento}
                                                        onChange={e => setTipoDocumento(e.target.value)}>
                                                        <option>identidade</option>
                                                        <option>CNH</option>
                                                        <option>identidade Profissional</option>
                                                    </Form.Control>
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                                <Form.Group
                                                    controlId="documento_identificacao"
                                                    value={documentoIdentificacao}
                                                    onChange={e => setDocumentoIdentificacao(e.target.value)}
                                                >
                                                    <Form.Label>Documento de Identificacao</Form.Label>
                                                    <Form.Control required type="text" />
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                                <Form.Group controlId="cpf">
                                                    <Form.Label>CPF</Form.Label>
                                                    <MaskedInput
                                                        id='cpf'
                                                        className='form-control'
                                                        required
                                                        mask={[/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/,]}
                                                        value={cpf}
                                                        onChange={e => setCpf(e.target.value)}
                                                        onKeyUp={(e) => {
                                                            setCpf(e.target.value);
                                                            verificacaoCpf();
                                                        }}
                                                    />

                                                </Form.Group>
                                            </Col>
                                        </Form.Row>

                                        <Form.Row>
                                            <Col>
                                                <Form.Group controlId="nome_pai">
                                                    <Form.Label>Nome do pai</Form.Label>
                                                    <Form.Control
                                                        required
                                                        type="text"
                                                        value={nomePai}
                                                        onChange={e => setNomePai(e.target.value)}
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                                <Form.Group controlId="nome_mae">
                                                    <Form.Label>Nome da mãe</Form.Label>
                                                    <Form.Control
                                                        required
                                                        type="text"
                                                        value={nomeMae}
                                                        onChange={e => setNomeMae(e.target.value)}
                                                    />
                                                </Form.Group>
                                            </Col>
                                        </Form.Row>
                                        <Form.Row>
                                            <Col xs={7}>
                                                <Form.Group controlId="logradouro">
                                                    <Form.Label>Logradouro</Form.Label>
                                                    <Form.Control
                                                        required
                                                        type="text"
                                                        value={logradouro}
                                                        onChange={e => setLogradouro(e.target.value)}
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col xs={2}>
                                                <Form.Group controlId="numero">
                                                    <Form.Label>Número</Form.Label>
                                                    <Form.Control
                                                        required
                                                        type="text"
                                                        value={numero}
                                                        onChange={e => setNumero(e.target.value)}
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                                <Form.Group controlId="bairro">
                                                    <Form.Label>Bairro</Form.Label>
                                                    <Form.Control
                                                        required
                                                        type="text"
                                                        value={bairro}
                                                        onChange={e => setBairro(e.target.value)}
                                                    />
                                                </Form.Group>
                                            </Col>
                                        </Form.Row>
                                        <Form.Row>
                                            <Col>
                                                <Form.Group controlId="cidade">
                                                    <Form.Label>Cidade</Form.Label>
                                                    <Form.Control
                                                        required
                                                        type="text"
                                                        value={cidade}
                                                        onChange={e => setCidade(e.target.value)}
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col xs={1}>
                                                <Form.Group controlId="uf">
                                                    <Form.Label>UF</Form.Label>
                                                    <Form.Control
                                                        className='uf'
                                                        required
                                                        maxLength="2"
                                                        type="text"
                                                        value={uf}
                                                        onChange={e => setUf(e.target.value)}
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                                <Form.Group controlId="email">
                                                    <Form.Label>E-mail</Form.Label>
                                                    <Form.Control
                                                        required
                                                        type="email"
                                                        value={email}
                                                        onChange={e => setEmail(e.target.value)}
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                                <Form.Group controlId="telefone">
                                                    <Form.Label>Telefone</Form.Label>
                                                    <MaskedInput
                                                        id='telefone'
                                                        className='form-control'
                                                        required
                                                        guide={false}
                                                        mask={mascaraTelefone}
                                                        onChange={e => setTelefone(e.target.value)}
                                                    />
                                                </Form.Group>
                                            </Col>
                                        </Form.Row>

                                        <Button variant="secondary" className="button" type="submit">
                                            Cadastrar Cliente
                                        </Button>
                                    </Form>
                                </div>
                            </Row>
                        </div>
                    </div>
                </div>
            </div>

        </Container >
    );

}

