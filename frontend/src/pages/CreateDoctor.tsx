import "../styles/pagcreatedoctor.css";
import React, { useState, FormEvent } from "react";
import { AiFillHome } from "react-icons/ai";
import Header from "../components/Header";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import api from "../utils/api";
import { Link } from "react-router-dom";

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
  }

  return (
    <>
      <div className="head-main">
        <Header />
      </div>
      <div className="container-new-doctor">
        <div className="crumb">
          <AiFillHome />
          <label> Home {">"} </label>
          <Link to="/doctor">Médico {">"}</Link>
          <label> Criar novo Médico</label>
        </div>
        <div className="container-form">
          <div className="form-create-doctor">
            <Form onSubmit={(e) => handleSubmit(e)} className="form">
              <Form.Group
                onChange={(e: any) => {
                  setName(e.target.value);
                }}
                className="mb-3"
                controlId="formName"
              >
                <Form.Label>Nome: </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Digite o nome do paciente"
                />
              </Form.Group>

              <Form.Group
                onChange={(e: any) => {
                  setCrm(e.target.value);
                }}
                className="mb-3"
                controlId="formCRM"
              >
                <Form.Label>CRM: </Form.Label>
                <Form.Control type="text" placeholder="Digite o CRM" />
              </Form.Group>

              <Form.Group
                onChange={(e: any) => {
                  setPhone(e.target.value);
                }}
                className="mb-3"
                controlId="formTelefone"
              >
                <Form.Label>Telefone: </Form.Label>
                <Form.Control type="telefone" placeholder="Digite o Telefone" />
              </Form.Group>

              <Form.Group
                onChange={(e: any) => {
                  setSpeciality(e.target.value);
                }}
                className="mb-3"
                controlId="formemail"
              >
                <Form.Label>Especialidade: </Form.Label>
                <Form.Control
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
