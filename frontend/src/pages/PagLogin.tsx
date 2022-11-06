import "../styles/paglogin.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import api from "../utils/api";
import imgLogin from "../icons/img-login.png";
import { Context } from "../contexts/AuthContext";
import { FormEvent, useContext, useState } from "react";

function PagLogin() {
  const { handleLogin } = useContext(Context);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    await api
      .post("/login", {
        username: username,
        password: password,
      })
      .then((response) => {
        const data = response.data;
        localStorage.setItem("username", data.username);
        localStorage.setItem("name", data.name);

        handleLogin(data);
      });
  }

  return (
    <div className="body-login">
      <div className="container-login">
        <div className="heade">
          <label id="logo-frist-name">Med</label>
          <label id="logo-lest-name">consul</label>
        </div>
        <div className="body">
          <div className="image-login">
            <img src={imgLogin} />
          </div>
          <div className="container-form-login">
            <div className="form-login">
              <Form onSubmit={(e) => handleSubmit(e)} className="form">
                <Form.Group className="mb-3" controlId="formLogin">
                  <Form.Label>Login: </Form.Label>
                  <Form.Control
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                    type="username"
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
                <Button type="submit">Entrar</Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PagLogin;
