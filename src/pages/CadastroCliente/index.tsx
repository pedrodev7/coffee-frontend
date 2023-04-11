import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

function CadastrarCliente() {

    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8080/cliente/addCliente', { nome, cpf })
            alert('Cadastro Realizado com Sucesso!');
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <Form className='container' onSubmit={handleSubmit}>

            <Form.Group className="mb-3" controlId="nomeCompleto">
                <Form.Label>Nome Completo</Form.Label>
                <Form.Control value={nome} onChange={(e) => setNome(e.target.value)} placeholder="João Gomes Silva e Neto" />
            </Form.Group>

            <Row className="mb-4">
                <Form.Group as={Col} controlId="nomeSocial">
                    <Form.Label>Nome Social</Form.Label>
                    <Form.Control  placeholder="João Silva" />
                </Form.Group>

                <Form.Group as={Col} controlId="cpf">
                    <Form.Label>CPF</Form.Label>
                    <Form.Control value={cpf} onChange={(e) => setCpf(e.target.value)} placeholder="000.000.000.00" />
                </Form.Group>
            </Row>

            <Button variant="success" type="submit">
                Cadastrar
            </Button>
        </Form>
    );
}

export default CadastrarCliente;