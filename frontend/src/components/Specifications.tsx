//import "../styles/appointment.css";
import { useState, useEffect } from "react";
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import api from "../utils/api";
import Form from "react-bootstrap/Form";

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
                    <Form.Label>Escolha uma especialidade:</Form.Label>
                    <Form.Select>
                        <option>Especialidade</option>
                        <option>Especialidade</option>
                        <option>Especialidade</option>
                        <option>Especialidade</option>
                        <option>Especialidade</option>
                        <option>Especialidade</option>
                        <option>Especialidade</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Escolha uma unidade:</Form.Label>
                    <Form.Select>
                        <option>Unidade</option>
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