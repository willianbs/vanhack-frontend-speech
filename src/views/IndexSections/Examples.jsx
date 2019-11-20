import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

class Examples extends React.Component {
  render() {
    return (
      <div className="section section-defaults" data-background-color="black">
        <img alt="..." className="path" src={require("assets/img/path1.png")} />
        <div className="space-50" />
        <Container className="text-center">Hi</Container>
      </div>
    );
  }
}

export default Examples;
