import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { BASE_URL } from '../../util/Request';
import {format} from 'date-fns'


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

    return (
        <div>
            <Button variant="success">Marcar Café</Button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Data do Café</th>
                        <th>Responsavel</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {cafeDaManha.map((cafedamanha) => (
                        <tr key={cafedamanha.id}>
                            <td>{cafedamanha.id}</td>
                            <td>{format(new Date(cafedamanha.dataDoCafe), 'dd-MM-yyyy')}</td>
                            <td>{}</td>
                            <td>
                                <Button variant="info" size="sm">VER</Button>
                                <Button variant="danger" size="sm">EXCLUIR</Button>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </Table>
        </div>
    )
}

export default listarCafeDaManha;