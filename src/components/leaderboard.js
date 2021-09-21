import React, { Component } from 'react'
import { Card, Row, Container, Col } from 'react-bootstrap';
import { connect } from 'react-redux'

class Leaderboard extends Component {
    render() {
        return (
            <Container fluid>
                <Row className="justify-content-center">
                    <Col xs={6} >
                        <Card className="p-1">
                            {this.props.usersArray.map((user,index) => {
                                return(
                                    <Container key={user.id}>
                                        <Row>
                                            <Col className="cardsplitter p-2" xs={3}>
                                                <Card>
                                                    <Card.Header>{index+1}</Card.Header>
                                                    <Card.Img src={user.avatarURL} />
                                                </Card>
                                            </Col>
                                            <Col className="cardsplitter p-2" xs={6}>
                                                <Card>
                                                    <Card.Title>{user.name}</Card.Title>
                                                    <Card.Text>{`Answered Questions ${Object.keys(user.answers).length}`}</Card.Text>
                                                    <Card.Text>{`Created Questions ${user.questions.length}`}</Card.Text>
                                                </Card>
                                            </Col>
                                            <Col className="cardsplitter p-2" xs={3}>
                                                <Card>
                                                    <Card.Header>Score</Card.Header>
                                                    <Card.Text>{parseInt(user.questions.length) + parseInt(Object.keys(user.answers).length)}</Card.Text>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </Container>
                                )
                            })}
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}

function mapStateToProps({ users }){
    return{
        usersArray: Object.values(users).sort((a, b) => {
            return (b.questions.length + Object.keys(b.answers).length) - 
                (a.questions.length + Object.keys(a.answers).length)
        })
    }
}

export default connect(mapStateToProps)(Leaderboard)