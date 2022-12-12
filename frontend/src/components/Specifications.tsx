import styles from "../styles/pagappointment.module.css";
import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import api from "../utils/api";

type Estabelecimento = {
  name: string;
};

type Especialidade = {
  name: string;
};

type Unidade = {
  name: string;
};

function Specifications() {
  const [isShown, setIsShown] = useState(true);
  const [estabelecimento, setEstabelecimento] = useState<Array<Estabelecimento>>([]);
  const [especialidade, setEspecialidade] = useState<Array<Especialidade>>([]);
  const [unidade, setUnidade] = useState<Array<Unidade>>([]);

  async function fetchData() {
    api.get<Array<Estabelecimento>>("/api/v1/estabelecimento").then((res) => {
      console.log(res.data);
      setEstabelecimento(res.data);
    });
    api.get<Array<Especialidade>>("/api/v1/especialidade").then((res) => {
      console.log(res.data);
      setEspecialidade(res.data);
    });
    api.get<Array<Unidade>>("/api/v1/unidade").then((res) => {
      console.log(res.data);
      setUnidade(res.data);
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
      <div className={styles.form}>
        <Form>
          <Form.Group className={`${styles.mb3} mb-3`} style={{ display: "grid" }} controlId="formEstabelecimento">
            <Form.Label className={styles.formLabel}>Tipo de estabelecimento</Form.Label>
            <Form.Text className={styles.formText}>
              Qual é o tipo de estabelecimento que você procura?
            </Form.Text>
            <Form.Select className={styles.formSelect}>
              <option>Insira aqui o tipo de estabelecimento</option>
              <option>Estabelecimento</option>
              <option>Estabelecimento</option>
              <option>Estabelecimento</option>
              <option>Estabelecimento</option>
              <option>Estabelecimento</option>
              <option>Estabelecimento</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className={`${styles.mb3} mb-3`} style={{ display: "grid" }} controlId="formEspecialidade">
            <Form.Label className={styles.formLabel}>Especialidade</Form.Label>
            <Form.Text className={styles.formText}>
              Qual é a especialidade ou exame (procedimento) que você procura?
            </Form.Text>
            <Form.Select className={styles.formSelect}>
              <option>Insira aqui a especialidade</option>
              <option>Especialidade</option>
              <option>Especialidade</option>
              <option>Especialidade</option>
              <option>Especialidade</option>
              <option>Especialidade</option>
              <option>Especialidade</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className={`${styles.mb3} mb-3`} style={{ display: "grid" }} controlId="formEspecialidade">
            <Form.Label className={styles.formLabel}>Unidade de atendimento</Form.Label>
            <Form.Text className={styles.formText}>
              Em qual unidade de atendimento deseja realizar a consulta?
            </Form.Text>
            <Form.Select className={styles.formSelect}>
              <option>Insira aqui a unidade</option>
              <option>Unidade</option>
              <option>Unidade</option>
              <option>Unidade</option>
              <option>Unidade</option>
              <option>Unidade</option>
              <option>Unidade</option>
            </Form.Select>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
}

export default Specifications;
