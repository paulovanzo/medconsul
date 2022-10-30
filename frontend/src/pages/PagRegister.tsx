import '../styles/pagregister.css'; // Criar estilo para Registro
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import api from '../utils/api';
import { Context } from "../contexts/AuthContext"
import { FormEvent, useContext, useState } from 'react';

function PagRegister() {
    const { handleRegister } = useContext(Context);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
  
    const [errs, setErrs] = useState({
      password: false
    })

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();
    
        await api.post('register', {
          username: username,
          password: password,
          name: name,
          email: email,
          phone: phone
        }).then(response => {
          const data = response.data;

          localStorage.setItem('token', data.token)
          localStorage.setItem('username', data.user.username)
    
          handleRegister(data);
        })/*.catch(e => {
          if (e) {
            setErrs({...errs, password: true})
    
            setTimeout(() => {
              setErrs({...errs, password: false})
            }, 2000);
          }
        })*/
        
      }

    return (
        <div className='body-register'>
            <div className='container-register'>
                <div className='heade'>
                    <label id='logo-frist-name'>Med</label>
                    <label id='logo-lest-name'>consul</label>
                </div>
                <div className='body'>
                    <div className='image-register'>
                        <img src="src\icons\img-register.png" />
                    </div>
                    <div className='container-form-register'>
                        <div className='form-register'>
                            <Form onSubmit={(e) => handleSubmit(e)} className='form'>
                                <Form.Group className="mb-3" controlId="formRegister">
                                    <Form.Label>Login: </Form.Label>
                                    <Form.Control onChange={(e) => {setUsername(e.target.value)}} type="text" placeholder="Digite seu login" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formSenha">
                                    <Form.Label>Senha: </Form.Label>
                                    <Form.Control onChange={(e) => {setPassword(e.target.value)}} type="password" placeholder="Digite sua senha" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formNome">
                                    <Form.Label>Nome: </Form.Label>
                                    <Form.Control onChange={(e) => {setName(e.target.value)}} type="text" placeholder="Digite seu nome" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formEmail">
                                    <Form.Label>Email: </Form.Label>
                                    <Form.Control onChange={(e) => {setEmail(e.target.value)}} type="email" placeholder="Digite seu email" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formTelefone">
                                    <Form.Label>Telefone: </Form.Label>
                                    <Form.Control onChange={(e) => {setPhone(e.target.value)}} type="number" placeholder="Digite seu telefone" />
                                </Form.Group>
                                <Button type="submit">Cadastrar</Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PagRegister