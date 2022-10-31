import '../styles/schedule.css' 
import { useState, useEffect } from 'react'
import { AiFillHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import api from "../utils/api"
import Form from 'react-bootstrap/Form';

function Schedule() { 
 
    return ( 
        <div className='container-list'> 
            <div className='crumb'> 
                <AiFillHome /> 
                <Link to="/"> Home {'>'} </Link>
                <label> Agenda </label> 
            </div> 
            <body className='body-menu'> 
                <div className='list'> 
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
            </body> 
        </div> 
 
    )
} 
 
 
 
export default Schedule