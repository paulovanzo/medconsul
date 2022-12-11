import "../styles/listpatient.css";
import { useState, useEffect } from "react";
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import api from "../utils/api";

type TListAppointment = {
  data: string;
  local: string;
  especialista: string;
  avaliacao: string;
  acoes: string;
};

function ListAppointment() {
  const [isShown, setIsShown] = useState(true);
  const [appointment, setAppointment] = useState<Array<TListAppointment>>([]);

  async function fetchData() {
    api.get<Array<TListAppointment>>("/api/v1/appointment").then((res) => {
      console.log(res.data);
      setAppointment(res.data);
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
        <Link to="/"> Home {">"} </Link>
        <label> Horario </label>
      </div>
      <div className="filter-create">
        <input type="text" id="search-appointment" placeholder="Campo de busca" />
        <Link to="../appointment/createNewAppointment">
          <button id="new-appointment">Cadastrar novo agendamento</button>
        </Link>
      </div>
      <body className="body-menu">
        <div className="list">
          <table className="table_list">
            <tr>
              <th>Data</th>
              <th>Local</th>
              <th>Especialista</th>
              <th>Avaliação</th>
              <th>Ações</th>
            </tr>
            {appointment &&
              appointment.map((appointment: TListAppointment) => {
                return (
                  <tr>
                    <td>{appointment.data}</td>
                    <td>{appointment.local}</td>
                    <td>{appointment.especialista}</td>
                    <td>{appointment.avaliacao}</td>
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

export default ListAppointment;