import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Container, Col, Tabs, Tab } from 'react-bootstrap';

import Askcard from './askcard'

class Home extends Component {
    render() {
        return (
            <Container fluid>
                <Row className="justify-content-center">
                    <Col xs={8} >
                        <Tabs defaultActiveKey="unanswered" id="tab" className="mb-3">
                            <Tab eventKey="unanswered" title="Unanswered Questions">
                                {this.props.orderedUnansweredQuestionsIDs.map((questionID, index) => {
                                    return(
                                        <Askcard 
                                            key={questionID} 
                                            id={questionID}
                                            order={index} 
                                        />
                                    )
                                })}
                            </Tab>
                            <Tab eventKey="answered" title="Answered Questions">
                                {this.props.orderedAnsweredQuestionsIDs.map((questionID, index) => {
                                    return(
                                        <Askcard 
                                            key={questionID} 
                                            id={questionID}
                                            order={index} 
                                        />
                                    )
                                })}
                            </Tab>
                        </Tabs>
                    </Col>
                </Row>
            </Container>
        )
    }
}

function mapStateToProps({ questions, users, setLoggedUser }){
    const answeredQuestionsIDs = (users&&setLoggedUser) ? 
        Object.keys(users[setLoggedUser].answers) : []
    const unansweredQuestionsIDs = (users&&setLoggedUser&&questions) ? 
        Object.keys(questions).filter(id => !answeredQuestionsIDs.includes(id)) : []
    return{
        orderedAnsweredQuestionsIDs: answeredQuestionsIDs
            .sort((a,b) => questions[b].timestamp - questions[a].timestamp),
        orderedUnansweredQuestionsIDs: unansweredQuestionsIDs
            .sort((a,b) => questions[b].timestamp - questions[a].timestamp),
        questionIDs: Object.keys(questions)
            .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
    }
}

export default connect(mapStateToProps)(Home)