import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { BASE_URL } from '../../util/Request';
import { format, addDays } from 'date-fns'

interface CafeDaManha {
    id: number;
    dataDoCafe: Date;
}

function listarCafeDaManha() {
    const [cafeDaManha, setCafeDaManha] = useState<CafeDaManha[]>([]);

    useEffect(() => {
        axios.get(`${BASE_URL}/cafeDaManha/listarCafe`)
            .then(response => {
                setCafeDaManha(response.data)
            })

    }, []);

    const handleExcluirCafe = async (id: number) => {
        try {
            await axios.delete(`${BASE_URL}/cafeDaManha/${id}/removerCafe`);
            alert('Café Excluido com Sucesso');
            window.location.reload();
        } catch (error) {
            alert('Exclua todos os itens do Café antes de excluir um Café da Manha.');
        }
    }

    return (
        <div>
            <Button variant="success" href='/cafe'>Marcar Café</Button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Data do Café</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {cafeDaManha.map((cafedamanha) => (
                        <tr key={cafedamanha.id}>
                            <td>{cafedamanha.id}</td>
                            <td>{format(addDays(new Date(cafedamanha.dataDoCafe), 1), 'dd/MM/yyyy')}</td>
                            <td>
                                <Button variant="info" size="sm" href={`/${cafedamanha.id}/item-cafe`}>VER</Button>
                                <Button variant="danger" size="sm" onClick={() => handleExcluirCafe(cafedamanha.id)}>EXCLUIR</Button>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </Table>
        </div>
    )
}

export default listarCafeDaManha;