import React, { Component } from 'react'
import { Card, Row, Container, Col } from 'react-bootstrap';
import reactredux from '../utils/reactredux.png'

class Leaderboard extends Component {
    render() {
        return (
            <Container fluid>
                <Row className="justify-content-center">
                    <Col xs={6} >
                        <Card className="p-2">
                            <Container>
                                <Row>
                                    <Col className="cardsplitter" xs={3}>
                                        <Card>
                                            <Card.Header>1</Card.Header>
                                            <Card.Img src={reactredux} />
                                        </Card>
                                    </Col>
                                    <Col className="cardsplitter" xs={6}>
                                        <Card>
                                            <Card.Title>Srah Edo</Card.Title>
                                            <Card.Text>Answered Questions 3</Card.Text>
                                            <Card.Text>Created Questions 2</Card.Text>
                                        </Card>
                                    </Col>
                                    <Col className="cardsplitter" xs={3}>
                                        <Card>
                                            <Card.Header>Score</Card.Header>
                                            <Card.Text>10</Card.Text>
                                        </Card>
                                    </Col>
                                </Row>
                            </Container>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Leaderboard