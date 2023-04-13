import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom'
import { InputGroup } from 'react-bootstrap';
import { BASE_URL } from '../../util/Request';

interface Cliente {
    id: number;
    nome: string;
}

function CadastrarItemDoCafe() {

    const [clientes, setClientes] = useState<Cliente[]>([]);

    useEffect(() => {
        axios.get(`${BASE_URL}/cliente/listarClientes`)
            .then(response => {
                setClientes(response.data)
            })

    }, []);

    const {id} = useParams();
    const idcafe = id;
    const [idcliente, setIdCliente] = useState('');
    const [nomedoproduto, setProduto] = useState('');

    const navigate = useNavigate();

    const handleAddItemCafe = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await axios.post(`${BASE_URL}/itemCafe/addItemNoCafe`, { id_cafe: Number(idcafe) || '0', id_cliente: Number(idcliente) || '0', nome_do_produto: nomedoproduto })
            alert('FEITO!')
            navigate(`/${id}/item-cafe`);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Form className='container' onSubmit={handleAddItemCafe}>
            <Row className="align-items-center">
                <Col xs="auto">
                    <Form.Label htmlFor="inlineFormInputGroup" >Nome</Form.Label>
                    <InputGroup className="mb-2">
                        <InputGroup.Text>Nome</InputGroup.Text>
                        <Form.Select value={idcliente} onChange={e => setIdCliente(e.target.value)}>
                            <option> </option>
                            {clientes.map((cliente) => (
                                <option key={cliente.id} value={cliente.id}>
                                    {cliente.nome}
                                </option>
                                
                            ))}
                        </Form.Select>

                    </InputGroup>
                </Col>

                <Col xs="auto">
                    <Form.Label htmlFor="inlineFormInput">Produto</Form.Label>
                    <Form.Control value={nomedoproduto} onChange={(e) => setProduto(e.target.value)} placeholder="Pão Francês" />
                </Col>


            </Row>
            <Col xs="auto">
                <Button variant='success' type="submit">
                    EU LEVO !!!
                </Button>
            </Col>
        </Form>
    );
}

export default CadastrarItemDoCafe;