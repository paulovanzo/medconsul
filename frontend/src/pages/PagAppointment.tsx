import '../styles/mainpage.css'
import '../styles/pagappointment.css'
import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import Form from 'react-bootstrap/Form';
import Header from '../components/Header'
import Schedule from '../components/Schedule';


function PagAppointment() {
    return (
    <>
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
                            <Form.Label>Escolha o dia:</Form.Label>
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
        <div className="container-list">
            <Schedule />
        </div>
    </>
    )
}

export default PagAppointment
