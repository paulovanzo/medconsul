import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import styles from  "../styles/paglogin.module.css";
import api from "../utils/api";
import imgLogin from "../icons/img-login.png";
import { Context } from "../contexts/AuthContext";
import { FormEvent, useContext, useState } from "react";
import { Logo } from "../components/MainLogo";

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
    <div>
      <div className={styles.container}>
        <Logo/>
        <div className={styles.body}>
          <div className={styles.image}>
            <img src={imgLogin} />
          </div>
          <div className={styles.containerForm}>
            <div className={styles.form}>
              <Form onSubmit={(e) => handleSubmit(e)} className={styles.form}>
                <Form.Group className={styles.mb_3} controlId="formLogin">
                  <Form.Label className={styles.form_label}>Login: </Form.Label>
                  <Form.Control className={styles.form_control}
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                    type="username"
                    placeholder="Digite seu login"
                  />
                </Form.Group>
                <Form.Group className={styles.mb_3} controlId="formSenha">
                  <Form.Label className={styles.form_label}>Senha: </Form.Label>
                  <Form.Control className={styles.form_control}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    type="password"
                    placeholder="Digite sua senha"
                  />
                </Form.Group>
                <Button className={styles.btn_primary} type="submit">Entrar</Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PagLogin;
