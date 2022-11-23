import "../styles/pagappointment.css";
import { AiFillHome } from "react-icons/ai";
import Header from "../components/Header";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import api from "../utils/api";
import { Link } from "react-router-dom";
import { FormEvent, useState } from "react";

function CreateAppointment() {
  const [patient, setPatient] = useState("");
  const [doctor, setDoctor] = useState("");
  const [date, setDate] = useState("");
  const [schedule, setSchedule] = useState("");

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    await api.post("/api/v1/appointment", {
      patient: patient,
      doctor: doctor,
      date: date,
      schedule: schedule,
    });

    window.history.pushState({},"","/appointment")
  }

  return (
    <>
      <div className="head-main">
        <Header />
      </div>
      <div className="container-new-appointment">
        <div className="crumb">
          <AiFillHome />
          <label> Home {">"} </label>
          <Link to="/appointment"> Consulta {">"}</Link>
          <label> Criar nova Consulta </label>
        </div>
        <div className="container-form">
          <div className="form-create-appointment">
            <Form onSubmit={(e) => handleSubmit(e)} className="form">
              <Form.Group
                onChange={(e: any) => {
                  setPatient(e.target.value);
                }}
                className="mb-3"
                controlId="formPaciente"
              >
                <Form.Label>Paciente: </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Informe o paciente"
                />
              </Form.Group>

              <Form.Group
                onChange={(e: any) => {
                  setDoctor(e.target.value);
                }}
                className="mb-3"
                controlId="formMedico"
              >
                <Form.Label>Medico: </Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Informe o medico" 
                />
              </Form.Group>

              <Form.Group
                onChange={(e: any) => {
                  setDate(e.target.value);
                }}
                className="mb-3"
                controlId="formData"
              >
                <Form.Label>Data: </Form.Label>
                <Form.Control type="text" placeholder="Digite a data" />
              </Form.Group>

              <Form.Group
                onChange={(e: any) => {
                  setSchedule(e.target.value);
                }}
                className="mb-3"
                controlId="formHorario"
              >
                <Form.Label>Horario: </Form.Label>
                <Form.Control type="text" placeholder="Digite o horario" />
              </Form.Group>

              <Link to="/appointment">
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

export default CreateAppointment;
