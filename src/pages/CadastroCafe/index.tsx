import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { format, addDays } from 'date-fns';
import { BASE_URL } from '../../util/Request';

function CadastrarCafe() {

    const navigate = useNavigate();

    const [selected, setSelected] = useState<Date | undefined>(
        addDays(new Date(), 1)
    );

    const disabledDays = {
        before: addDays(new Date(), 1)
    };

    let rodape = <p>Selecione uma Data</p>;
    if (selected) {
        rodape = <p>Você escolheu: {format(selected, 'dd/MM/yyyy')}.</p>;

    }

    const handleCadastrarCafe = async (e: React.FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();
            const formattedDate = selected !== undefined ? selected.toISOString().substring(0, 10) : "";
            await axios.post(`${BASE_URL}/cafeDaManha/addCafe`, { dataDoCafe: formattedDate })
            alert('Data Marcada com Sucesso')
            navigate('/')
        } catch (error) {
            alert('Erro no Cadastro')
        }
    }

    return (
        <Form className='container' onSubmit={handleCadastrarCafe}>

            <Row className="mb-4">
                <Form.Group as={Col} controlId="dataCafe">
                    <DayPicker
                        mode="single"
                        selected={selected}
                        onSelect={setSelected}
                        footer={rodape}
                        disabled={disabledDays}
                    />
                </Form.Group>
            </Row>
            <Button variant="success" type="submit">
                Cadastrar
            </Button>
        </Form>
    );
}

export default CadastrarCafe;