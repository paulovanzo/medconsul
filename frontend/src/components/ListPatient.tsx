import "../styles/listpatient.css";
import { useState, useEffect } from "react";
import "../styles/pagpatient.css";
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import api from "../utils/api";

type Patient = {
  name: string;
  cpf: string;
  phoneNumber: string;
  birthday: Date;
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
    <div className="container-list">
      <div className="crumb">
        <AiFillHome />
        <Link to="/">Home {">"} </Link>
        <label> Paciente</label>
      </div>
      <div className="filter-create">
        <input type="text" id="search-patient" placeholder="Campo de busca" />
        <Link to="../patient/createNewPatient">
          <button id="new-patient">Cadastrar novo paciente</button>
        </Link>
      </div>
      <body className="body-menu">
        <div className="list">
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
                    <td>
                      <div
                        className="menu_tooltip"
                        onClick={handleClick}
                        style={{ display: isShown ? "block" : "none" }}
                      >
                        :
                        <div className="menu_tooltip_options">
                          <p>editar</p>
                          <hr />
                          <p>deletar</p>
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })}
          </table>
        </div>
      </body>
    </div>
  );
}