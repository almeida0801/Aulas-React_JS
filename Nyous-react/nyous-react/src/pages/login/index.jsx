import React, { useState } from 'react';
import Menu from '../../components/menu';
import Rodape from '../../components/rodape';
import { Container, Form, Button } from 'react-bootstrap';
import './index.css';


const Login = () => { 

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');


    return(
        <div>
            <Menu/>

            <Container>
                <Form className='form-signin'>
                            <div className="textCenter">

                            </div>
                            <br/>
                            <small>Informe os dados abaixo</small>
                            <hr/>

                            <Form.Group controlId='formBasicEmail'>

                                <Form.Label> Email </Form.Label>
                                <Form.Control type='email'value={email} placeholder='Informe seu email' required></Form.Control>

                            </Form.Group>

                            <Form.Group controlId='formBasicPassword'>

                                <Form.Label> Senha </Form.Label>
                                <Form.Control type='password'value={senha} placeholder='Informe sua senha' required ></Form.Control>

                            </Form.Group>

                            <Button style={{ marginBottom : '20px'}} variant='primary' type='submit'>
                                Enviar                            
                            </Button>
                            <br/>

                            <a href= '/cadastrar'>Não tenho conta</a>

                        </Form>
            </Container>

            <Rodape/>
        </div>
    )
}


export default Login;