import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Button, Row, Container, Col, Form } from 'react-bootstrap'

import { saveQuestion } from '../actions/questions'

class Newquestion extends Component {
    state = {
        optOneVal: '',
        optTwoVal: ''
    }
    submitQuestion = (e) => {
        e.preventDefault()
        const question = {
            optionOneText: this.state.optOneVal, 
            optionTwoText: this.state.optTwoVal, 
            author: this.props.setLoggedUser
        }
        this.props.dispatch(saveQuestion(question))
        this.props.history.push("/questions")
    }
    handleChange1 = (e) => {
        this.setState({
            optOneVal: e.target.value
        })
    }
    handleChange2 = (e) => {
        this.setState({
            optTwoVal: e.target.value
        })
    }
    render() {
        return (
            <Container fluid>
                <Row className="justify-content-center">
                    <Col xs={6} >
                        <Card>
                            <Card.Title className="text-center mt-3"><h2>Create New Question</h2></Card.Title>
                            <hr />
                            <Card.Body>
                                <Card.Text>Complete the question:</Card.Text>
                                <Card.Title><b>Would you rather...</b></Card.Title>
                                <br />
                                <Form className="text-center">
                                    <Form.Group className="mb-3" controlId="choiceOne">
                                        <Form.Control 
                                            type="text" 
                                            value={this.state.optOneVal} 
                                            onChange={this.handleChange1} 
                                            placeholder="Enter option one text here" />
                                    </Form.Group>
                                    <b>OR</b>
                                    <Form.Group className="mb-3 mt-3" controlId="choiceTwo">
                                        <Form.Control 
                                            type="text" 
                                            value={this.state.optTwoVal} 
                                            onChange={this.handleChange2} 
                                            placeholder="Enter option two text here" />
                                    </Form.Group>
                                    <Button 
                                        variant="success" 
                                        className="w-100"
                                        type="submit" 
                                        onClick={this.submitQuestion}
                                    >Submit
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}

function mapStateToProps({ setLoggedUser }){
    return{
        setLoggedUser: setLoggedUser ? setLoggedUser : "user"
    }
}

export default connect(mapStateToProps)(Newquestion)