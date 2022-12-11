import Header from '../components/Header';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Crumb } from '../components/Crumb';
import styles from '../styles/pagprofile.module.css'

function PagDoctorProfile() {

    return (
        <>
            <Header />
            <div className={styles.container}>
                <Crumb/>
                <div className={styles.container}>
                    <div className={styles.form}> 
                        <Form className={styles.form}>
                            <Row>
                                <Col>
                                <Form.Group className={styles.mb3} controlId="formName">
                                    <Form.Label className={styles.formLabel}>Nome: </Form.Label>
                                    <Form.Control className={styles.formControl} type="text" placeholder="Fernando Borges" />
                                </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className={styles.mb3} controlId="formEvaluation">
                                        <Form.Label className={styles.formLabel}>Avaliação: </Form.Label>
                                        <Form.Check type="radio" label="Muito ruim" id="formEvaluationRadios"/>
                                        <Form.Check type="radio" label="Ruim" id="formEvaluationRadios"/>
                                        <Form.Check type="radio" label="Normal" id="formEvaluationRadios"/>
                                        <Form.Check type="radio" label="Bom" id="formEvaluationRadios"/>
                                        <Form.Check type="radio" label="Muito bom" id="formEvaluationRadios"/>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group className={styles.mb3} controlId="formFormation">
                                        <Form.Label className={styles.formLabel}>Formação: </Form.Label>
                                        <Form.Control className={styles.formControl} type="text" placeholder="Clinico Geral"/>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className={styles.mb3} controlId="formPhone">
                                        <Form.Label className={styles.formLabel}>Telefone: </Form.Label>
                                        <Form.Control className={styles.formControl} type="text" placeholder="(84) 9 9282-4567"/>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group className={styles.mb3} controlId="formDesc">
                                        <Form.Label className={styles.formLabel}>Descrição geral: </Form.Label>
                                        <Form.Control className={styles.formControl} type="textarea" placeholder="Lorem Ipsun"/>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Link to="../doctor"><Button>Voltar</Button></Link>
                            <Button type="submit">Salvar</Button>
                        </Form>
                    </div>
                </div>    
            </div>
        </>
    
      )
}

export default PagDoctorProfile