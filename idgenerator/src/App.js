import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Login from "./Login";
import show from "./assets/show.jpg";
import Image from "react-bootstrap/Image";

export default class App extends Component {
  render() {
    return (
      <Row>
        <Col xs={6}>
          <Image src={show} fluid />
        </Col>
        <Col xs={6}>
          <Container>
            <h1>A Trusted Better Account To Manage ID Card</h1>
            <Login />
          </Container>
        </Col>
      </Row>
    );
  }
}
