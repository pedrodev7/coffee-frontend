import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import { useEffect, useState } from 'react';
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom'
import { BASE_URL } from '../../util/Request';

function CadastrarCliente() {

    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const {id} = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${BASE_URL}/cliente/${id}/clienteId`)
            .then(response => {
                setNome(response.data.nome)
                setCpf(response.data.cpf)
            })

    }, []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await axios.put(`${BASE_URL}/cliente/${id}/editarCliente`, {nome, cpf})
            alert('Cadastro Alterado com Sucesso!');
            navigate('/lista');
        } catch (error) {
            alert('Falha na Alteração do Cadastro');
        }
    }


    return (
        <Form className='container' onSubmit={handleSubmit}>

            <Form.Group className="mb-3" controlId="nomeCompleto">
                <Form.Label>Nome Completo</Form.Label>
                <Form.Control value={nome} onChange={(e) => setNome(e.target.value)} placeholder="João Gomes Silva e Neto" />
            </Form.Group>

            <Row className="mb-4">

                <Form.Group as={Col} controlId="cpf">
                    <Form.Label>CPF (apenas numeros)</Form.Label>
                    <Form.Control value={cpf} onChange={(e) => setCpf(e.target.value)} placeholder="000.000.000-00" />
                </Form.Group>
            </Row>

            <Button variant="warning" type="submit">
                EDITAR
            </Button>
        </Form>
    );
}

export default CadastrarCliente;