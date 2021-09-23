import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Row, Container, Nav } from 'react-bootstrap'

import { setLoggedUser } from '../actions/loggedInUser'

class NavBar extends Component {
    handleLog = () =>{
        this.props.dispatch(setLoggedUser(''))
    }
    render() {
        return (
            <Container fluid>
                <Row className="justify-content-center">
                    <Nav variant="pills" className="justify-content-center">
                        <Nav.Item className="navLinks">
                            <Link to="/questions">Home</Link>
                        </Nav.Item>
                        <Nav.Item className="navLinks">
                            <Link to="/add">New Question</Link>
                        </Nav.Item>
                        <Nav.Item className="navLinks">
                            <Link to="/leaderboard">Leader Board</Link>
                        </Nav.Item>
                        <Nav.Item id="btnHelloOut" className="navLinks">
                            <button disabled id="btnHello">{`Hello ${this.props.userName}`}</button>
                        </Nav.Item>
                        <Nav.Item className="navLinks">
                            <Link to="/" onClick={this.handleLog}>Logout/Login</Link>
                        </Nav.Item>
                    </Nav>
                </Row>
                <hr />
            </Container>
        )
    }
}

function mapStateToProps({ users, setLoggedUser }){
    return{
        userName: setLoggedUser ? users[setLoggedUser].name : ''
    }
}

export default connect(mapStateToProps)(NavBar)