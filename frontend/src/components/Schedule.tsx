import styles from "../styles/list.module.css";
import { useState, useEffect } from "react";
import api from "../utils/api";

type TSchedule = {
  domingo: string;
  segunda: string;
  terca: string;
  quarta: string;
  quinta: string;
  sexta: string;
  sabado: string;
};

function Schedule() {
  const [isShown, setIsShown] = useState(true);
  const [schedule, setSchedule] = useState<Array<TSchedule>>([]);

  async function fetchData() {
    api.get<Array<TSchedule>>("/api/v1/schedule").then((res) => {
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
    <div className={styles.container}>
      <div className={styles.filterCreate}>
        <input
          className={styles.search}
          type="text"
          id="search-schedule"
          placeholder="Campo de busca"
        />
      </div>
      <div className="list">
        <table className={styles.table_list}>
          <tr>
            <th>Domingo</th>
            <th>Segunda</th>
            <th>Terça</th>
            <th>Quarta</th>
            <th>Quinta</th>
            <th>Sexta</th>
            <th>Sabado</th>
          </tr>
          {schedule &&
            schedule.map((schedule: TSchedule) => {
              return (
                <tr>
                  <td>{schedule.domingo}</td>
                  <td>{schedule.segunda}</td>
                  <td>{schedule.terca}</td>
                  <td>{schedule.quarta}</td>
                  <td>{schedule.quinta}</td>
                  <td>{schedule.sexta}</td>
                  <td>{schedule.sabado}</td>
                </tr>
              );
            })}
        </table>
      </div>
    </div>
  );
}

export default Schedule;
