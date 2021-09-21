import React, { Component } from 'react'
import { Row, Container, Col, Tabs, Tab } from 'react-bootstrap';
import Askcard from './askcard'
import { connect } from 'react-redux'

class Home extends Component {
    render() {
        return (
            <Container fluid>
                <Row className="justify-content-center">
                    <Col xs={8} >
                        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
                            <Tab eventKey="home" title="unanswered">
                                <Askcard/>
                            </Tab>
                            <Tab eventKey="profile" title="answered">
                                {this.props.questionIDs.map(questionID => {
                                    return(
                                        <Askcard 
                                            key={questionID} 
                                            id={questionID} />
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

function mapStateToProps({ questions, users }){
    return{
        questionIDs: Object.keys(questions)
            .sort((a,b) => questions[b].timestamp - questions[a].timestamp),
        questions,
        users
    }
}

export default connect(mapStateToProps)(Home)