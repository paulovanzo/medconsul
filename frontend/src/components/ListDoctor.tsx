import "../styles/listpatient.css";
import { useEffect, useState } from "react";
import "../styles/pagpatient.css";
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import api from "../utils/api";

type Doctor = {
  name: string;
  crm: string;
  phoneNumber: string;
  speciality: string;
};

function ListDoctor() {
  const [isShown, setIsShown] = useState(true);
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

  const handleClick = () => {
    setIsShown(!isShown);
  };

  return (
    <div className="container-list">
      <div className="crumb">
        <AiFillHome />
        <Link to="/">Home {">"} </Link>
        <label>Médico</label>
      </div>
      <div className="filter-create">
        <input type="text" id="search-doctor" placeholder="Campo de busca" />
        <Link to="/doctor/createNewDoctor">
          <button id="new-doctor">Cadastrar novo médico</button>
        </Link>
      </div>
      <body className="body-menu">
        <div className="list">
          <table className="table_list">
            <tr>
              <th>Nome</th>
              <th>CRM</th>
              <th>Telefone</th>
              <th>Especialidade</th>
            </tr>
            {listDoctor &&
              listDoctor.map((doctor: Doctor) => {
                return (
                  <tr>
                    <td>{doctor.name}</td>
                    <td>{doctor.crm}</td>
                    <td>{doctor.phoneNumber}</td>
                    <td>
                      {doctor.speciality}
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

export default ListDoctor;
