import React, { useState, FormEvent } from "react";
import { AiFillHome } from "react-icons/ai";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

import styles from "../styles/pagcreatedoctor.module.css";
import api from "../utils/api";
import Header from "../components/Header";

function CreateDoctor() {
  const [name, setName] = useState("");
  const [crm, setCrm] = useState("");
  const [phone, setPhone] = useState("");
  const [speciality, setSpeciality] = useState("");

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    await api.post("/api/v1/doctor", {
      name: name,
      crm: crm,
      phoneNumber: phone,
      speciality: speciality,
    });

    window.history.pushState({},"","/doctor")
  }

  return (
    <>
      <div className={styles.headerMain}>
        <Header />
      </div>
      <div className={styles.container}>
        <div className="crumb">
          <AiFillHome />
          <label> Home {">"} </label>
          <Link to="/doctor">Médico {">"}</Link>
          <label> Criar novo Médico</label>
        </div>
        <div className={styles.container}>
          <div className={styles.form}>
            <Form onSubmit={(e) => handleSubmit(e)}>
              <Form.Group
                onChange={(e: any) => {
                  setName(e.target.value);
                }}
                className="mb-3"
                style={{ display: "flex" }}
                controlId="formName"
              >
                <Form.Label className="formLabel">Nome: </Form.Label>
                <Form.Control className="formControl"
                  type="text"
                  placeholder="Digite o nome do paciente"
                />
              </Form.Group>

              <Form.Group
                onChange={(e: any) => {
                  setCrm(e.target.value);
                }}
                className="mb-3"
                style={{ display: "flex" }}
                controlId="formCRM"
              >
                <Form.Label className="formLabel">CRM: </Form.Label>
                <Form.Control className="formControl" type="text" placeholder="Digite o CRM" />
              </Form.Group>

              <Form.Group
                onChange={(e: any) => {
                  setPhone(e.target.value);
                }}
                className="mb-3"
                controlId="formTelefone"
              >
                <Form.Label className="formLabel">Telefone: </Form.Label>
                <Form.Control className="formControl" type="telefone" placeholder="Digite o Telefone" />
              </Form.Group>

              <Form.Group
                onChange={(e: any) => {
                  setSpeciality(e.target.value);
                }}
                className="mb-3"
                style={{ display: "flex", maxWidth: "90%" }}
                controlId="formemail"
              >
                <Form.Label className="formLabel">Especialidade: </Form.Label>
                <Form.Control
                  className="formControl"
                  type="especialidade"
                  placeholder="Digite o e-mail"
                />
              </Form.Group>

              <Link to="/doctor">
                <Button>Cancelar</Button>
              </Link>
              <Button type="submit">Salvar</Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateDoctor;
