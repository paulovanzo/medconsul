import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { Link } from "react-router-dom";
import { FormEvent, useState } from "react";

import { Crumb } from "../components/Crumb";
import Header from "../components/Header";
import api from "../utils/api";
import styles from "../styles/pagcreatepatient.module.css";

function CreatePatient() {
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    await api.post("/api/v1/patient", {
      name: name,
      cpf: cpf,
      phoneNumber: phone,
      email: email,
    });

    window.history.pushState({}, "", "/patient");
    window.location.reload();
  }

  return (
    <>
      <Header />
      <div className={styles.container}>
        <Crumb />
        <div className={styles.container}>
          <div className={styles.form}>
            <Form onSubmit={(e) => handleSubmit(e)}>
              <Form.Group
                onChange={(e: any) => {
                  setName(e.target.value);
                }}
                className={styles.mb3}
                style={{ display: "flex" }}
                controlId="formName"
              >
                <Form.Label className={styles.formLabel}>Nome: </Form.Label>
                <Form.Control
                  className={styles.formControl}
                  type="text"
                  placeholder="Digite o nome do paciente"
                />
              </Form.Group>

              <Form.Group
                onChange={(e: any) => {
                  setCpf(e.target.value);
                }}
                className={styles.mb3}
                style={{ display: "flex" }}
                controlId="formCPF"
              >
                <Form.Label className={styles.formLabel}>CPF: </Form.Label>
                <Form.Control
                  className={styles.formControl}
                  type="text"
                  placeholder="Digite o CPF"
                />
              </Form.Group>

              <Form.Group
                onChange={(e: any) => {
                  setPhone(e.target.value);
                }}
                className={styles.mb3}
                style={{ display: "flex" }}
                controlId="formTelefone"
              >
                <Form.Label className={styles.formLabel}>Telefone: </Form.Label>
                <Form.Control
                  className={styles.formControl}
                  type="telefone"
                  placeholder="Digite o Telefone"
                />
              </Form.Group>

              <Form.Group
                onChange={(e: any) => {
                  setEmail(e.target.value);
                }}
                className={styles.mb3}
                style={{ display: "flex" }}
                controlId="formemail"
              >
                <Form.Label className={styles.formLabel}>E-mail: </Form.Label>
                <Form.Control
                  className={styles.formControl}
                  type="email"
                  placeholder="Digite o e-mail"
                />
              </Form.Group>

              <Link to="/patient">
                <Button className={styles.btnPrimary}>Cancelar</Button>
              </Link>
              <Button type="submit">Salvar</Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreatePatient;
