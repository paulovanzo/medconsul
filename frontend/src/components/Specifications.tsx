//import "../styles/appointment.css";
import { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import api from "../utils/api";

type Especialidade = {
    name: string;
};

type Unidade = {
    name: string;
};

function Specifications() {
  const [isShown, setIsShown] = useState(true);
  const [especialidade, setEspecialidade] = useState<Array<Especialidade>>([]);
  const [unidade, setUnidade] = useState<Array<Unidade>>([]);

  async function fetchData() {
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
    <div className="container-form">
        <div className='form-specifications'> 
            <Form className='form'>
              <Form.Group className="mb-3">
                    <Form.Label>Tipo de estabelecimento</Form.Label>
                    <Form.Text>
                      Qual é o tipo de estabelecimento que você procura?
                    </Form.Text>
                    <Form.Select aria-label="Insira aqui o tipo de estabelecimento">
                        <option>Insira aqui o tipo de estabelecimento</option>
                        <option>Estabelecimento</option>
                        <option>Estabelecimento</option>
                        <option>Estabelecimento</option>
                        <option>Estabelecimento</option>
                        <option>Estabelecimento</option>
                        <option>Estabelecimento</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Especialidade</Form.Label>
                    <Form.Text>
                      Qual é a especialidade ou exame (procedimento) que você procura?
                    </Form.Text>
                    <Form.Select aria-label="Insira aqui a especialidade">
                        <option>Insira aqui a especialidade</option>
                        <option>Especialidade</option>
                        <option>Especialidade</option>
                        <option>Especialidade</option>
                        <option>Especialidade</option>
                        <option>Especialidade</option>
                        <option>Especialidade</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Unidade de atendimento</Form.Label>
                    <Form.Text>
                      Em qual unidade de atendimento deseja realizar a consulta?
                    </Form.Text>
                    <Form.Select aria-label="Insira aqui a unidade">
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