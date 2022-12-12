import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { BsFillPencilFill } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";

import { Crumb } from "./Crumb";
import styles from "../styles/list.module.css";
import api from "../utils/api";

type Patient = {
  name: string;
  cpf: string;
  phoneNumber: string;
  gender: string;
};

export default function ListPatient() {
  const [isShown, setIsShown] = useState(true);
  const [listPatient, setListPatient] = useState<Array<Patient>>([]);

  async function fetchData() {
    api.get<Array<Patient>>("/api/v1/patients").then((res) => {
      console.log(res.data);
      setListPatient(res.data);
    });
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleClick = () => {
    setIsShown(!isShown);
  };

  return (
    <div className={styles.container}>
      <Crumb />
      <div className={styles.filterCreate}>
        <input
          className={styles.search}
          type="text"
          id="search-patient"
          placeholder="Campo de busca"
        />
        <Link to="../patient/createNewPatient">
          <button className={styles.btnNew} id="new-patient">
            Cadastrar novo paciente
          </button>
        </Link>
      </div>
      <div className={styles.body}>
        <table className="table_list">
          <tr>
            <th>Nome</th>
            <th>CPF</th>
            <th>Telefone</th>
            <th>Genero</th>
          </tr>
          {listPatient &&
            listPatient.map((patient: Patient) => {
              return (
                <tr>
                  <td>{patient.name}</td>
                  <td>{patient.cpf}</td>
                  <td>{patient.phoneNumber}</td>
                  <td>{patient.gender}</td>
                  <td>
                    <div className={styles.menu_tooltip_options}>
                      <Link to="/doctor/editDoctor">
                        <button className={styles.btnEdit} id="edit-doctor">
                          <BsFillPencilFill />
                        </button>
                      </Link>
                      <Link to="/doctor/deleteDoctor">
                        <button className={styles.btnDelete} id="delete-doctor">
                          <FaTrash />
                        </button>
                      </Link>
                    </div>
                  </td>
                </tr>
              );
            })}
        </table>
      </div>
    </div>
  );
}
