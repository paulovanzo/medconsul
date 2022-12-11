import Form from "react-bootstrap/Form";

import Header from '../components/Header'
import { Crumb } from '../components/Crumb'
import Schedule from "../components/Schedule";
import Specifications from "../components/Specifications";
import '../styles/mainpage.module.css'
import '../styles/pagappointment.css'

function PagAppointment() {
    return (
        <div>
            <Header />
            <div className='container-date'>
                <Crumb/>
                <div className='container-form'>
                    <div className='form-profile'> 
                        <Form className='form'>
                            <Form.Group className="mb-3">
                                <Form.Label>Filtre por dia:</Form.Label>
                                <Form.Select>
                                    <option>Domingo</option>
                                    <option>Segunda</option>
                                    <option>Terça</option>
                                    <option>Quarta</option>
                                    <option>Quinta</option>
                                    <option>Sexta</option>
                                    <option>Sabado</option>
                                </Form.Select>
                            </Form.Group>
                        </Form>
                    </div>
                </div>
            </div>
            <Schedule />
            <Specifications />
        </div>
    );
}

export default PagAppointment;
