import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import styles from "../styles/list.module.css";
import api from "../utils/api";
import { BsFillPencilFill } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";
import { Crumb } from "./Crumb";

type Doctor = {
  name: string;
  crm: string;
  phoneNumber: string;
  speciality: string;
};

function ListDoctor() {
  const [listDoctor, setListDoctor] = useState<Array<Doctor>>([]);

  async function fetchData() {
    api.get<Array<Doctor>>("/api/v1/doctors").then((res) => {
      console.log(res.data);
      setListDoctor(res.data);
    });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <Crumb />
      <div className={styles.filterCreate}>
        <input
          className={styles.search}
          type="text"
          id="search-doctor"
          placeholder="Campo de busca"
        />
        <Link to="/doctor/createNewDoctor">
          <button className={styles.btnNew} id="new-doctor">
            Cadastrar novo médico
          </button>
        </Link>
      </div>
      <div className={styles.bodyMenu}>
        <table className={styles.table_list}>
          <tr>
            <th>Nome</th>
            <th>CRM</th>
            <th>Telefone</th>
            <th>Especialização</th>
            <th>Ações</th>
          </tr>
          {listDoctor &&
            listDoctor.map((doctor: Doctor) => {
              return (
                <tr>
                  <td>{doctor.name}</td>
                  <td>{doctor.crm}</td>
                  <td>{doctor.phoneNumber}</td>
                  <td>{doctor.speciality}</td>
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

export default ListDoctor;
