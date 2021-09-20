import React, { Component } from 'react'
import reactredux from '../utils/reactredux.png'
import { Card, Button, Row, Container, Col, Form } from 'react-bootstrap';

class Viewpoll extends Component {
    render() {
        return (
            <Container fluid>
                <Row className="justify-content-center">
                    <Col xs={6} >
                        <Card>
                            <Card.Header>
                                <h3>Tyler Mc asks:</h3>
                            </Card.Header>
                            <Card.Body>
                                <Container>
                                    <Row>
                                        <Col className="cardsplitter" xs={4}>
                                            <Card>
                                                <Card.Img src={reactredux} />
                                            </Card>
                                        </Col>
                                        <Col className="cardsplitter" xs={8}>
                                            <Card>
                                                <Card.Title>Would you rather</Card.Title>
                                                <Card.Text>
                                                    <Form>
                                                        <div key={`defaul`} className="mb-3">
                                                            <Form.Check 
                                                                name="go"
                                                                type="radio"
                                                                id='default'
                                                                label='be a front end'
                                                            />

                                                            <Form.Check
                                                                name="go"
                                                                type="radio"
                                                                id='default radio'
                                                                label='be a back end'
                                                            />
                                                        </div>
                                                        <Button className="w-100" variant="success">
                                                            Submit
                                                        </Button>
                                                    </Form>
                                                </Card.Text>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Container>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Viewpoll