import React from 'react';
import Menu from '../../components/menu';
import Rodape from '../../components/rodape';
import { Carousel, Jumbotron, Button, Container, Row, Col } from 'react-bootstrap';

const Home = () => {
    return(
        <div>
            <Menu/>
    <Carousel>
        <Carousel.item>
            <img
            className="d-block w-100"
            src="https://br.freepik.com/fotos-vetores-gratis/paisagem-a-noite"
            alt="First slide"
            /> 
        </Carousel.item>
    </Carousel>

        <Jumbotron className="text-center">
            <h1>Diversos eventos em um único local </h1>
            <p>Encontre eventos nos mais diversos segmentos de forma rápida</p>
            <p><Button variant ="primary" href="/login">Login</Button><Button variant="warning" href="/cadastrar">Cadastrar</Button> </p>
        </Jumbotron>
        <Container>
        <Row>
                    <Col>
                         <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://cio.com.br/wp-content/uploads/2019/08/8-tecnologias-que-vao-impactar-negocios-em-2020.jpg" />
                            <Card.Body>
                                <Card.Title>Tecnologia</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem laboriosam nulla deserunt delectus eveniet ipsa officia blanditiis error qui quod! Illum deserunt dicta aperiam libero animi impedit nam facilis debitis.
                                </Card.Text>
                                <Button variant="primary">Ir!</Button>
                            </Card.Body>
                        </Card> 
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://www.matematica.pt/images/faq/educacao.png" />
                            <Card.Body>
                                <Card.Title>Educação</Card.Title>
                                <Card.Text>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem laboriosam nulla deserunt delectus eveniet ipsa officia blanditiis error qui quod! Illum deserunt dicta aperiam libero animi impedit nam facilis debitis.
                                </Card.Text>
                                <Button variant="primary">Ir!</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://www.setting.com.br/wp-content/uploads/2019/02/inovacao-radical-e-inovacao-incremental_.jpg.jpg" />
                            <Card.Body>
                                <Card.Title>Inovação</Card.Title>
                                <Card.Text>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem laboriosam nulla deserunt delectus eveniet ipsa officia blanditiis error qui quod! Illum deserunt dicta aperiam libero animi impedit nam facilis debitis.
                                </Card.Text>
                                <Button variant="primary">Ir!</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
        </Container>

            <Rodape/>
        </div>
    )
}

export default Home;