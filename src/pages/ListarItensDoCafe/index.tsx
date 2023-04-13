import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { BASE_URL } from '../../util/Request';
import Form from 'react-bootstrap/esm/Form';
import { useParams } from 'react-router-dom';
import { addDays, format, isToday, subDays } from 'date-fns';
import { Alert, Badge, InputGroup } from 'react-bootstrap';
import { cpf } from 'cpf-cnpj-validator';

interface ItemCafe {

    cliente: {
        nome: String;
        cpf: string;
    }
    nomeDoProduto: String;
    diaDoCafeDaManha: number;
    trouxe: Boolean;
}

function ListarItensDoCafe() {
    const [itemCafe, setItemCafe] = useState<ItemCafe[]>([]);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`${BASE_URL}/itemCafe/${id}/exibirCafe`)
            .then(response => {
                setItemCafe(response.data)
            });

    }, []);



    const handleExcluirItem = async (nomeProduto: String) => {
        try {
            await axios.delete(`${BASE_URL}/itemCafe/${id}/${nomeProduto}/delete`);
            alert('Removido com sucesso');
            window.location.reload();
        } catch (error) {
            console.log(error);
        }

    }

    const handlerTrazerItem = async (nomeProduto: String) => {
        try {
            await axios.put(`${BASE_URL}/itemCafe/${id}/${nomeProduto}/trazer`);
            alert(`O Item: ${nomeProduto} Marcou presença no Café da Manhã de Hoje! Parabéns. =)`);
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>

            <Button variant="success" size="sm" href={`/${id}/add-item-cafe`}>EU QUERO CONTRIBUIR !!!</Button>
            <Table striped bordered hover>

                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>CPF</th>
                        <th>Item</th>
                        <th>Data</th>
                        <th>Trouxe?</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {itemCafe.map((itemcafe) => (
                        <tr key={itemcafe.diaDoCafeDaManha}>
                            <td>{itemcafe.cliente.nome}</td>
                            <td>{cpf.format(itemcafe.cliente.cpf)}</td>
                            <td>{itemcafe.nomeDoProduto}</td>
                            <td>{format(addDays(new Date(itemcafe.diaDoCafeDaManha), 1), 'dd/MM/yyyy')}</td>                        
                            <td>
                                <Form.Group className="mb-3" id="formGridCheckbox">
                                    <Form.Check
                                        type="checkbox"
                                        disabled={!isToday(subDays(new Date(itemcafe.diaDoCafeDaManha), -1))}
                                        checked={itemcafe.trouxe === true}
                                        onChange={(e) => handlerTrazerItem(itemcafe.nomeDoProduto)}
                                    />
                                </Form.Group>
                            </td>
                            <td>
                                <Button variant="danger" size="sm" onClick={() => handleExcluirItem(itemcafe.nomeDoProduto)}>EXCLUIR</Button>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </Table>
        </div>
    )
}

export default ListarItensDoCafe;