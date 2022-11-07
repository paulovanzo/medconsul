import '../styles/pagprofile.css'
import { AiFillHome } from 'react-icons/ai';
import Header from '../components/Header';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function PagPatientProfile() {

    return (
        <><div className="head-main">
          <Header />
        </div>
        <div className='container-profile'>
            <div className='crumb'>
                <AiFillHome />
                <label> Home {'>'} </label>
                <Link to="/patient"> Paciente {'>'} </Link>
                <label> Perfil do Paciente </label>
            </div>
            <div className='container-form'>
                <div className='form-profile'> 
                    <Form className='form'>
                        <Row>
                            <Col>
                            <Form.Group className="mb-3" controlId="formName">
                                <Form.Label>Nome: </Form.Label>
                                <Form.Control type="text" placeholder="Fernando Borges" />
                            </Form.Group>
                            </Col>
                            <Col>
                            <Form.Group className="mb-3" controlId="formCPF">
                                <Form.Label>CPF: </Form.Label>
                                <Form.Control type="text" placeholder="123.456.789-10"/>
                            </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                            <Form.Group className="mb-3" controlId="formGenre">
                                <Form.Label>Genero: </Form.Label>
                                <Form.Control type="text" placeholder="M"/>
                            </Form.Group>
                            </Col>
                            <Col>
                            <Form.Group className="mb-3" controlId="formPhone">
                                <Form.Label>Telefone: </Form.Label>
                                <Form.Control type="text" placeholder="(84) 9 9282-4567"/>
                            </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                            <Form.Group className="mb-3" controlId="formDesc">
                                <Form.Label>Descrição geral: </Form.Label>
                                <Form.Control type="textarea" placeholder="Lorem Ipsun"/>
                            </Form.Group>
                            </Col>
                        </Row>
                        <Link to="../patient"><Button>Voltar</Button></Link>
                        <Button type="submit">Salvar</Button>
                    </Form>
                </div>
            </div>    
        </div>
        </>
    
      )
}

export default PagPatientProfile