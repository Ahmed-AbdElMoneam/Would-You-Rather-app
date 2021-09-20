import React, { Component } from 'react'
import { Card, Button, Row, Container, Col, Form } from 'react-bootstrap';

class Newquestion extends Component {
    render() {
        return (
            <Container fluid>
                <Row className="justify-content-center">
                    <Col xs={6} >
                        <Card className="">
                            <Card.Title className="text-center mt-3"><h2>Create New Question</h2></Card.Title>
                            <hr />
                            <Card.Body>
                                <Card.Text>Complete the question:</Card.Text>
                                <Card.Title><b>Would you rather...</b></Card.Title>
                                <br />
                                <Form className="text-center">
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Control type="text" placeholder="Enter option one text here" />
                                    </Form.Group>
                                    <b >OR</b>
                                    <Form.Group className="mb-3 mt-3" controlId="formBasicPassword">
                                        <Form.Control type="text" placeholder="Enter option two text here" />
                                    </Form.Group>
                                    <Button variant="success" className="w-100" type="submit">Submit</Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Newquestion