import '../styles/paglogin.css'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function PagLogin() {
    return (
        <div className='body-login'>
            <div className='container-login'>
                <div className='heade'>
                    <label id='logo-frist-name'>Med</label>
                    <label id='logo-lest-name'>consul</label>
                </div>
                <div className='body'>
                    <div className='image-login'>
                        <img src="frontend\src\icons\img-login.png" />
                    </div>
                    <div className='container-form-login'>
                        <div className='form-login'>
                            <Form className='form'>
                                <Form.Group className="mb-3" controlId="formLogin">
                                    <Form.Label>Login: </Form.Label>
                                    <Form.Control type="text" placeholder="Digite seu login" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formSenha">
                                    <Form.Label>Senha: </Form.Label>
                                    <Form.Control type="password" placeholder="Digite sua senha" />
                                </Form.Group>
                                <Button type="submit">Entrar</Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PagLogin