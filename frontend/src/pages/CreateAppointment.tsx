import { FormEvent, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

import styles from "../styles/pagcreateappointment.module.css";
import api from "../utils/api";
import Header from "../components/Header";
import { Crumb } from "../components/Crumb";


import Schedule from "../components/Schedule";
import Specifications from "../components/Specifications";

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

    window.history.pushState({}, "", "/appointment");
  }

  return (
    <>
      <div className={styles.headerMain}>
        <Header />
      </div>
      <div className={styles.container}>
        <Crumb />
        <div className={styles.container}>
          <div className={styles.form}>
            <Form onSubmit={(e) => handleSubmit(e)}>
              <Form.Group
                onChange={(e: any) => {
                  setPatient(e.target.value);
                }}
                className={`${styles.mb3} mb-3`}
                style={{ display: "flex" }}
                controlId="formPaciente"
              >
                <Form.Label className={styles.formLabel}>Paciente: </Form.Label>
                <Form.Control className={styles.formControl} type="text" placeholder="Informe o paciente" />
              </Form.Group>

              <Form.Group
                onChange={(e: any) => {
                  setDoctor(e.target.value);
                }}
                className={`${styles.mb3} mb-3`}
                style={{ display: "flex" }}
                controlId="formMedico"
              >
                <Form.Label className={styles.formLabel}>Medico: </Form.Label>
                <Form.Control className={styles.formControl} type="text" placeholder="Informe o medico" />
              </Form.Group>

              <Form.Group
                onChange={(e: any) => {
                  setDate(e.target.value);
                }}
                className={`${styles.mb3} mb-3`}
                style={{ display: "flex" }}
                controlId="formData"
              >
                <Form.Label className={styles.formLabel}>Data: </Form.Label>
                <Form.Control className={styles.formControl} type="text" placeholder="Digite a data" />
              </Form.Group>

              <Form.Group
                onChange={(e: any) => {
                  setSchedule(e.target.value);
                }}
                className={`${styles.mb3} mb-3`}
                style={{ display: "flex" }}
                controlId="formHorario"
              >
                <Form.Label className={styles.formLabel}>Horario: </Form.Label>
                <Form.Control className={styles.formControl} type="text" placeholder="Digite o horario" />
              </Form.Group>

              <Link to="/appointment">
                <Button>Cancelar</Button>
              </Link>
              <Button type="submit">Salvar</Button>
            </Form>
          </div>
        </div>
        <Specifications />
        <Schedule />
      </div>
    </>
  );
}

export default CreateAppointment;
