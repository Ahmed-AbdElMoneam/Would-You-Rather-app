import React, { Component } from 'react'
import { connect } from 'react-redux'
import reactredux from '../utils/reactredux.png'
import { Card, Button, Row, Container, Col, Form } from 'react-bootstrap';

class Sign extends Component {
    render() {
        //console.log("dvhbjvfv is ", this.props.usersN)
        return (
            <Container fluid>
                <Row className="justify-content-center">
                    <Col xs={6} >
                        <Card className="text-center">
                            <Card.Header>
                                <h3>Welcome to would you rather app!</h3>
                                <h4 className="lead">Please Sign in to continue</h4>
                            </Card.Header>
                            <Card.Body>
                                <Card.Img className="w-50 reactreduximg" src={reactredux} />
                                <Card.Title className="text-success">Sign in</Card.Title>
                                <Form>
                                    <Form.Select aria-label="Default select example">
                                        {this.props.userArray.map((user)=> {
                                            console.log(this.props.userArray)
                                            return(
                                                <option key={user.id} value={user.id}>{user.name}</option>
                                            )
                                        })}
                                    </Form.Select>
                                    <br />
                                    <Button className="w-100" size="lg" variant="success">Sign in</Button>
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