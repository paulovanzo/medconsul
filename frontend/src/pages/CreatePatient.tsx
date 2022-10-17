import '../styles/pagcreatepatient.css'
import { AiFillHome } from 'react-icons/ai';                                                                                                                 
import Header from '../components/Header';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function CreatePatient() {

    return (
        <><div className="head-main">
          <Header />
        </div>
        <div className='container-new-patient'>
            <div className='crumb'>
                <AiFillHome />
                <label> Home {'>'} </label>
                <Link to="/patient">Paciente {'>'}</Link>
                <label> Criar novo Paciente</label>
            </div>
            <div className='container-form'>
                <div className='form-create-patient'> 
                    <Form className='form'>
                        <Form.Group className="mb-3" controlId="formName">
                            <Form.Label>Nome: </Form.Label>
                            <Form.Control type="text" placeholder="Digite o nome do paciente" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formCPF">
                            <Form.Label>CPF: </Form.Label>
                            <Form.Control type="text" placeholder="Digite o CPF" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formTelefone">
                            <Form.Label>Telefone: </Form.Label>
                            <Form.Control type="telefone" placeholder="Digite o Telefone"/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formemail">
                            <Form.Label>E-mail: </Form.Label>
                            <Form.Control type="email" placeholder="Digite o e-mail"/>
                        </Form.Group>
                        
                        <Link to="../patient"><Button>Cancelar</Button></Link>
                        <Button type="submit">Salvar</Button>

                    </Form>
                </div>
            </div>    
        </div>
        </>
    
      )
}

export default CreatePatient