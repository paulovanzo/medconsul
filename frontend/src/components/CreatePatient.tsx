import reactLogo from './assets/react.svg'
import '../visual/PagCreatePatient.css'
import { AiFillHome } from 'react-icons/Ai';
import { AiOutlineSearch } from 'react-icons/Ai';
import Header from './Header';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function CreatePatient() {

    return (
        <><div className="head-main">
          <Header />
        </div>
        <div className='container-new-patient'>
            <div className='crumb'>
                <AiFillHome />
                <h3> Home > </h3>
                <h3> Paciente ></h3>
                <h3> Criar novo Paciente</h3>
            </div>
            <div className='container-form'>
                <div className='form-create-patient'> 
                    <Form className='form'>
                        <Form.Group className="mb-3" controlId="formName">
                            <Form.Label>Nome: </Form.Label>
                            <Form.Control type="text" placeholder="Digite o nome do paciente" />
                            {/* <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text> */}
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formCPF">
                            <Form.Label>CPF: </Form.Label>
                            <Form.Control type="text" placeholder="Digite o CPF" />
                        </Form.Group>
                        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group> */}

                        <Form.Group className="mb-3" controlId="formTelefone">
                            <Form.Label>Telefone: </Form.Label>
                            <Form.Control type="telefone" placeholder="Digite o Telefone"/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formemail">
                            <Form.Label>E-mail: </Form.Label>
                            <Form.Control type="email" placeholder="Digite o e-mail"/>
                        </Form.Group>
                        
                        <Button type="">Cancelar</Button>
                        <Button type="submit">Salvar</Button>

                    </Form>
                </div>
            </div>    
        </div>
        </>
    
      )
}

export default CreatePatient