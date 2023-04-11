import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { BASE_URL } from '../../util/Request';
import Form from 'react-bootstrap/esm/Form';


interface ItemCafe {

    cliente: {
        nome: String;
    }
    nomeDoProduto: String;
    diaDoCafeDaManha: number;
}

function ListarItensDoCafe() {
    const [itemCafe, setItemCafe] = useState<ItemCafe[]>([]);

    useEffect(() => {
        axios.get(`${BASE_URL}/itemCafe/2/exibirCafe`)
            .then(response => {
                setItemCafe(response.data)
            })

    }, []);

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Item</th>
                    <th>Trouxe?</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {itemCafe.map((itemcafe) => (
                    <tr key={itemcafe.diaDoCafeDaManha}>
                        <td>{ }</td>
                        <td>{itemcafe.cliente.nome}</td>
                        <td>{itemcafe.nomeDoProduto}</td>
                        <td>
                            <Form.Group className="mb-3" id="formGridCheckbox">
                                <Form.Check type="checkbox"/>
                            </Form.Group>
                        </td>
                        <td>
                            <Button variant="danger" size="sm">EXCLUIR</Button>
                        </td>
                    </tr>
                ))}

            </tbody>
        </Table>
    )
}

export default ListarItensDoCafe;