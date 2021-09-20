import React, { Component } from 'react'
import reactredux from '../utils/reactredux.png'
import { Card, Row, Container, Col, ProgressBar } from 'react-bootstrap';

class Results extends Component {
    render() {
        return (
            <Container fluid>
                <Row className="justify-content-center">
                    <Col xs={6} >
                        <Card>
                            <Card.Header>
                                <h3>Asked by Tyler Mc</h3>
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
                                                <Card.Title>Results:</Card.Title>
                                                <Card.Text>
                                                    <Card>
                                                        <Card.Title>Would you rather be a developer front?</Card.Title>
                                                        <Card.Text>
                                                            <ProgressBar now={60} label="60%"/>
                                                            1 out of 2 votes
                                                        </Card.Text>
                                                    </Card>
                                                    <Card>
                                                        <Card.Title>Would you rather be a developer back?</Card.Title>
                                                        <Card.Text>
                                                            <ProgressBar now={60} label="60%"/>
                                                            1 out of 2 votes
                                                        </Card.Text>
                                                    </Card>
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

export default Results