import React, { Component } from "react";
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { Container, Row, Col } from "react-grid-system";
import show from "./assets/show.jpg";
import Image from "react-bootstrap/Image";

export default function Login() {
  return (
    <Row>
      <Col xs={6}>
        <Image src={show} fluid />
      </Col>
      <Col xs={6}>
        <Container>
          <h1>A Trusted Better Account To Manage ID Card</h1>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
            <br />
            or
            <br />
            <Button variant="outline-primary">Register</Button>
          </Form>
        </Container>
      </Col>
    </Row>
  );
}
