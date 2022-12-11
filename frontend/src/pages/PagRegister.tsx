import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import styles from "../styles/pagregister.module.css";
import { Logo } from "../components/MainLogo" 
import api from "../utils/api";
import imgRegister from "../icons/img-register.png"
import { Context } from "../contexts/AuthContext";
import { FormEvent, useContext, useState } from "react";

function PagRegister() {
  const { handleLogin } = useContext(Context);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    await api
      .post("register", {
        username: username,
        password: password,
        name: name,
        email: email,
        phone: phone,
      })
      .then((response) => {
        const data = response.data;

        localStorage.setItem("token", data.token);
        localStorage.setItem("username", data.user.username);

        handleLogin(data);
      });
  }

  return (
    <div>
      <div className={styles.container}>
        <Logo/>
        <div className={styles.body}>
          <div className={styles.image}>
            <img src={imgRegister} />
          </div>
          <div className={styles.containerForm}>
            <div className={styles.form}>
              <Form onSubmit={(e) => handleSubmit(e)} className={styles.form}>
                <Form.Group className="mb-3" controlId="formRegister">
                  <Form.Label>Login: </Form.Label>
                  <Form.Control
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                    type="text"
                    placeholder="Digite seu login"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formSenha">
                  <Form.Label>Senha: </Form.Label>
                  <Form.Control
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    type="password"
                    placeholder="Digite sua senha"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formNome">
                  <Form.Label>Nome: </Form.Label>
                  <Form.Control
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    type="text"
                    placeholder="Digite seu nome"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email: </Form.Label>
                  <Form.Control
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    type="email"
                    placeholder="Digite seu email"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formTelefone">
                  <Form.Label>Telefone: </Form.Label>
                  <Form.Control
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                    type="number"
                    placeholder="Digite seu telefone"
                  />
                </Form.Group>
                <Button type="submit">Cadastrar</Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PagRegister;
