import '../styles/mainpage.css'
import '../styles/pagappointment.css'
import Header from '../components/Header'
import Form from "react-bootstrap/Form";
import { AiFillHome } from "react-icons/ai";
import { Link } from 'react-router-dom';

import Schedule from "../components/Schedule";
import Specifications from "../components/Specifications";

function PagAppointment() {
    return (
        <div>
            <div className="head-main">
                <Header />
            </div>
            <div className='container-date'>
                <div className='crumb'>
                    <AiFillHome />
                    <Link to="/"> Home {'>'} </Link>
                    <label> Agenda </label>
                </div>
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
