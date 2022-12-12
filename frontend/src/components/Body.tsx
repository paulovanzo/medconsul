import styles from "../styles/mainpage.module.css";
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";

function Body() {
  return (
    <div className={styles.containerMenu}>
      <div className={styles.crumb}>
        <AiFillHome />
        <label> Home </label>
      </div>
      <body className={styles.bodyMenu}>
        <div className={styles.menu}>
          <div className={styles.itemMenuPatient}>
            <div className={styles.iconItemMenu}></div>
            <div>
              <Link to="/patient">Paciente</Link>
            </div>
          </div>

          <div className={styles.itemMenuDoctor}>
            <div className={styles.iconItemMenu}></div>
            <div>
              <Link to="/doctor">Médico</Link>
            </div>
          </div>

          <div className={styles.itemMenuAppointment}>
            <div className={styles.iconItemMenu}></div>
            <div>
              <Link to="/appointment">Consulta</Link>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default Body;
