import React, { Component } from 'react'
import { Row, Container, Col, Tabs, Tab } from 'react-bootstrap';
import Askcard from './askcard'

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
                                <Askcard/>
                            </Tab>
                        </Tabs>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Home