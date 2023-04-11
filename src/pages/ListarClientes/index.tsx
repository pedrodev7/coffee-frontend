import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { BASE_URL } from '../../util/Request';

interface Cliente {
    id: number;
    nome: string;
    cpf: string;
}

function ListarClientes() {
    const [clientes, setClientes] = useState<Cliente[]>([]);

    useEffect(() => {
        axios.get(`${BASE_URL}/cliente/listarClientes`)
            .then(response => {
                setClientes(response.data)
            })
        
    }, []);

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>CPF</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {clientes.map((cliente) => (
                    <tr key={cliente.id}>
                        <td>{cliente.id}</td>
                        <td>{cliente.nome}</td>
                        <td>{cliente.cpf}</td>
                        <td>
                        <Button variant="warning" size="sm">EDITAR</Button>
                        <Button variant="info" size="sm">VER</Button>
                        <Button variant="danger" size="sm">EXCLUIR</Button>
                    </td>
                    </tr>
                ))}

            </tbody>
        </Table>
    )
}

export default ListarClientes;