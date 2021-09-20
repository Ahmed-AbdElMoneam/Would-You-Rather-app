import React, { Component } from 'react'
import { Card, Row, Container, Col, Button } from 'react-bootstrap';
import reactredux from '../utils/reactredux.png'

class Askcard extends Component {
    render() {
        return (
            
                        <Card>
                            <Card.Header>Sarah Edo asks:</Card.Header>
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
                                            <Card.Text>..be a </Card.Text>
                                            <Button className="w-100" variant="btn btn-outline-success">
                                                View Poll
                                            </Button>
                                        </Card>
                                    </Col>
                                </Row>
                            </Container>
                        </Card>
        )
    }
}

export default Askcard