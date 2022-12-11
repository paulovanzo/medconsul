import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import styles from "../styles/pagprofile.module.css";
import Header from "../components/Header";
import { Crumb } from "../components/Crumb";

function PagPatientProfile() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Crumb />
        <div className={styles.form}>
          <div className={styles.form}>
            <Form className={styles.form}>
              <Row>
                <Col>
                  <Form.Group
                    className={`${styles.mb3} mb-3`}
                    controlId="formName"
                  >
                    <Form.Label>Nome: </Form.Label>
                    <Form.Control type="text" placeholder="Fernando Borges" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="formCPF">
                    <Form.Label>CPF: </Form.Label>
                    <Form.Control type="text" placeholder="123.456.789-10" />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="formGenre">
                    <Form.Label>Genero: </Form.Label>
                    <Form.Control type="text" placeholder="M" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="formPhone">
                    <Form.Label>Telefone: </Form.Label>
                    <Form.Control type="text" placeholder="(84) 9 9282-4567" />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="formDesc">
                    <Form.Label>Descrição geral: </Form.Label>
                    <Form.Control type="textarea" placeholder="Lorem Ipsun" />
                  </Form.Group>
                </Col>
              </Row>
              <Link to="../patient">
                <Button>Voltar</Button>
              </Link>
              <Button type="submit">Salvar</Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}

export default PagPatientProfile;
