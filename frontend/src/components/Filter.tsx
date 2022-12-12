import { Crumb } from "./Crumb";
import Form from "react-bootstrap/Form";

import styles from "../styles/pagappointment.module.css";

function Filter() {
  return (
    <div className={styles.container}>
        <Crumb />
        <div className={styles.container}>
          <div className={styles.form}>
            <Form>
              <Form.Group className={`${styles.mb3} mb-3`} style={{ display: "flex" }}>
                <Form.Label className={styles.formLabel}>Filtre por dia:</Form.Label>
                <Form.Select className={styles.formSelect}>
                  <option>Domingo</option>
                  <option>Segunda</option>
                  <option>Terça</option>
                  <option>Quarta</option>
                  <option>Quinta</option>
                  <option>Sexta</option>
                  <option>Sabado</option>
                </Form.Select>
              </Form.Group>
            </Form>
          </div>
        </div>
    </div>
  );
}

export default Filter;
