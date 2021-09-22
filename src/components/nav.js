import React, { Component } from 'react'
import reactredux from '../utils/reactredux.png'
import { Card, Button, Row, Container, Col, Nav } from 'react-bootstrap'
import { connect } from 'react-redux'

class NavBar extends Component {
    render() {
        return (
            <Container fluid>
                <Row className="justify-content-center pt-2 pl-2">
                    <Nav variant="pills">
                        <Nav.Item>
                            <Nav.Link href="/">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/newQuestion" >New Question</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/leaderboard">Leader Board</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link disabled>{`Hello, ${this.props.setLoggedUser}`}</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/login">Logout</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Row>
                <hr />
            </Container>
        )
    }
}

function mapStateToProps({ setLoggedUser }){
    return{
        setLoggedUser: setLoggedUser ? setLoggedUser : 'Please sign in'
    }
}

export default connect(mapStateToProps)(NavBar)