import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Card, Row, Container, Col, Button } from 'react-bootstrap';

import { storeId } from '../actions/storeId'

class Askcard extends Component {
    viewPoll = (e) => {
        this.props.dispatch(storeId(this.props.id))
        this.props.history.push(`/questions/${this.props.id}`)
    }
    render() {
        return (
            <Card>
                <Card.Header>{`${this.props.askingPerson} asks:`}</Card.Header>
                <Container>
                    <Row id={this.props.id}>
                        <Col className="cardsplitter" xs={4}>
                            <Card>
                                <Card.Img src={this.props.avatar} />
                            </Card>
                        </Col>
                        <Col className="cardsplitter" xs={8}>
                            <Card>
                                <Card.Title>Would you rather</Card.Title>
                                <Card.Text>{`${this.props.optOne} or`}</Card.Text>
                                <Card.Text>{`${this.props.optTwo}`}</Card.Text>
                                <Button 
                                    className="w-100" 
                                    variant="btn btn-outline-success" 
                                    onClick={this.viewPoll}
                                >View Poll
                                </Button>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Card>
        )
    }
}

function mapStateToProps({ users, questions }, { id, order }){
    return{
        askingPerson: (users&&questions&&id) ? users[questions[id].author].name : "askingPerson",
        avatar: (users&&questions&&id) ? users[questions[id].author].avatarURL : "Avatar",
        optOne: (questions&&id) ? questions[id].optionOne.text : "optOne",
        optTwo: (questions&&id) ? questions[id].optionTwo.text : "optTwo",
        order,
        id
    }
}

export default connect(mapStateToProps)(withRouter(Askcard))