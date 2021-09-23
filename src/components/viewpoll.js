import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Button, Row, Container, Col, Form } from 'react-bootstrap';

import { storeQuestion } from '../actions/questions'

class Viewpoll extends Component {
    submitQuestionAnswer = (e) => {
        const firstChoiceChecked = this.props.setLoggedUser ?
            e.target.parentNode.childNodes[0].childNodes[0].childNodes[0].checked : "checked"
        const secondChoiceChecked = this.props.setLoggedUser ? 
            e.target.parentNode.childNodes[0].childNodes[1].childNodes[0].checked : "checked"
        if(firstChoiceChecked === true){
            this.props.dispatch(storeQuestion("optionOne"))
            this.props.history.push("/results")
        } else if(secondChoiceChecked === true){
            this.props.dispatch(storeQuestion("optionTwo"))
            this.props.history.push("/results")
        }
    }
    render() {
        return (
            <Container fluid>
                <Row className="justify-content-center">
                    <Col xs={6} >
                        <Card>
                            <Card.Header>
                                <h3>{`${this.props.askingPerson} asks:`}</h3>
                            </Card.Header>
                            <Card.Body>
                                <Container>
                                    <Row>
                                        <Col className="cardsplitter" xs={4}>
                                            <Card>
                                                <Card.Img src={this.props.avatar} />
                                            </Card>
                                        </Col>
                                        <Col className="cardsplitter" xs={8}>
                                            <Card>
                                                <Card.Title>Would you rather</Card.Title>
                                                <Form>
                                                    <div key={`default`} className="mb-3">
                                                        <Form.Check 
                                                            name="checker"
                                                            type="radio"
                                                            id='default1'
                                                            label={`${this.props.optionOne}`}
                                                        />

                                                        <Form.Check
                                                            name="checker"
                                                            type="radio"
                                                            id='default2'
                                                            label={`${this.props.optionTwo}`}
                                                        />
                                                    </div>
                                                    <Button 
                                                        className="w-100" 
                                                        variant="success" 
                                                        onClick={this.submitQuestionAnswer}
                                                    >
                                                        Submit
                                                    </Button>
                                                </Form>
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

function mapStateToProps({ users, questions, setLoggedUser, storeId }){
    return{
        askingPerson: (users&&questions&&storeId) ? users[questions[storeId].author].name : 'Asking person',
        avatar: (users&&questions&&storeId) ? users[questions[storeId].author].avatarURL : "Avatar",
        optionOne: (questions&&storeId) ? questions[storeId].optionOne.text : "option one",
        optionTwo: (questions&&storeId) ? questions[storeId].optionTwo.text : "option two",
        setLoggedUser: setLoggedUser ? setLoggedUser : "user"
    }
}

export default connect(mapStateToProps)(Viewpoll)