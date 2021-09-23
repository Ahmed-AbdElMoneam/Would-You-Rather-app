import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Row, Container, Col, ProgressBar } from 'react-bootstrap'

class Results extends Component {
    render() {
        return (
            <Container fluid>
                <Row className="justify-content-center">
                    <Col xs={6} >
                        <Card>
                            <Card.Header>
                                <h3>{`Asked by ${this.props.askingPerson}`}</h3>
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
                                                <div>
                                                    <Card.Title>Results:</Card.Title>
                                                    <Card>
                                                        <Card.Title>{`Would you rather ${this.props.optionOne}?`}</Card.Title>
                                                        <ProgressBar now={`${this.props.optOnePercent}`} label={`${this.props.optOnePercent}%`}/>
                                                        {`${this.props.optOneVotes} out of ${this.props.totalVotes} votes`}
                                                    </Card>
                                                    <Card>
                                                        <Card.Title>{`Would you rather ${this.props.optionTwo}?`}</Card.Title>
                                                        <ProgressBar now={`${this.props.optTwoPercent}`} label={`${this.props.optTwoPercent}%`}/>
                                                        {`${this.props.optTwoVotes} out of ${this.props.totalVotes} votes`}
                                                    </Card>
                                                </div>
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
    const optOneVotes = (questions&&storeId) ? questions[storeId].optionOne.votes.length : "1"
    const optTwoVotes = (questions&&storeId) ? questions[storeId].optionTwo.votes.length : "1"
    const totalVotes = optOneVotes + optTwoVotes
    return{
        askingPerson: (users&&questions&&storeId) ? users[questions[storeId].author].name : 'Asking person',
        avatar: (users&&questions&&storeId) ? users[questions[storeId].author].avatarURL : "Avatar",
        optionOne: (questions&&storeId) ? questions[storeId].optionOne.text : "option one",
        optionTwo: (questions&&storeId) ? questions[storeId].optionTwo.text : "option two",
        optOneVotes,
        optTwoVotes,
        totalVotes,
        optOnePercent: ((optOneVotes/totalVotes)*100).toFixed(2),
        optTwoPercent: ((optTwoVotes/totalVotes)*100).toFixed(2)
    }
}

export default connect(mapStateToProps)(Results)