import "../styles/schedule.css";
import { useState, useEffect } from "react";
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import api from "../utils/api";

type Schedule = {
  schedule: string;
  item1: string;
  item2: string;
  item3: string;
  item4: string;
  item5: string;
  item6: string;
};

export default function Schedule() {
  const [isShown, setIsShown] = useState(true);
  const [schedule, setSchedule] = useState<Array<Schedule>>([]);

  async function fetchData() {
    api.get<Array<Schedule>>("/api/v1/schedule").then((res) => {
      console.log(res.data);
      setSchedule(res.data);
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
        <input type="text" id="search-schedule" placeholder="Campo de busca" />
        <Link to="../appointment/createNewSchedule">
          <button id="new-schedule">Cadastrar novo agendamento</button>
        </Link>
      </div>
      <body className="body-menu">
        <div className="list">
          <table className="table_list">
            <tr>
              <th>Horario</th>
              <th>Item 1</th>
              <th>Item 2</th>
              <th>Item 3</th>
              <th>Item 4</th>
              <th>Item 5</th>
              <th>Item 6</th>
            </tr>
            {schedule &&
              schedule.map((schedule: Schedule) => {
                return (
                  <tr>
                    <td>{schedule.schedule}</td>
                    <td>{schedule.item1}</td>
                    <td>{schedule.item2}</td>
                    <td>{schedule.item3}</td>
                    <td>{schedule.item4}</td>
                    <td>{schedule.item5}</td>
                    <td>{schedule.item6}</td>
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