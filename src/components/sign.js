import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Button, Row, Container, Col, Form } from 'react-bootstrap'

import reactredux from '../utils/reactredux.png'
import { setLoggedUser } from '../actions/loggedInUser'

class Sign extends Component {
    state = {
        user: ''
    }
    sign = (e) =>{
        e.preventDefault()
        if(this.state.user){
            this.props.dispatch(setLoggedUser(this.state.user))
            this.props.history.push(`/questions`)
            localStorage.setItem("auth", true)
        }else{
            alert("Please Select a User")
        }
    }
    handleChange = (e) =>{
        this.setState({ user: e.target.value })
    }
    render() {
        localStorage.setItem("auth", false)
        return (
            <Container fluid >
                <Row className="justify-content-center">
                    <Col xs={6}>
                        <Card className="text-center">
                            <Card.Header>
                                <h3>Welcome to would you rather app!</h3>
                                <h4 className="lead">Please Sign in to continue</h4>
                            </Card.Header>
                            <Card.Body>
                                <Card.Img className="w-50" src={reactredux} />
                                <Card.Title className="text-success">Sign in</Card.Title>
                                <Form>
                                    <Form.Select 
                                        aria-label="Default select example" 
                                        value={this.state.user} 
                                        onChange={this.handleChange}
                                    >
                                        <option key="None" value="None">Please Select a user</option>
                                        {this.props.userArray.map((user)=> {
                                            return(
                                                <option key={user.id} value={user.id}>{user.name}</option>
                                            )
                                        })}
                                    </Form.Select>
                                    <br />
                                    <Button 
                                        className="w-100" 
                                        size="lg" 
                                        variant="success" 
                                        onClick={this.sign}
                                    >Sign in
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

function mapStateToProps({ users }){
    return{
        userArray: Object.values(users)
    }
}

export default connect(mapStateToProps)(Sign)