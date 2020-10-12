import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Carousel from "react-bootstrap/Carousel";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import styled, { keyframes } from "styled-components";
import {
  bounce,
  fadeIn,
  fadeInDown,
  flash,
  flipInX,
  headShake,
  jello,
  pulse,
  rollIn,
  rotateInDownLeft,
  rotateInDownRight,
  rubberBand,
  shake,
  slideInDown,
  swing,
  tada,
  wobble,
  zoomIn,
} from "react-animations";
const data = require("../../components/Data/data.json");
const Animate = [
  bounce,
  fadeIn,
  fadeInDown,
  flash,
  flipInX,
  headShake,
  jello,
  pulse,
  rollIn,
  rotateInDownLeft,
  rotateInDownRight,
  rubberBand,
  shake,
  slideInDown,
  swing,
  tada,
  wobble,
  zoomIn,
];

class Home extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: null,
    };
  }

  handleClose() {
    this.setState({ show: null });
  }

  handleShow(id) {
    this.setState({ show: id });
  }

  render() {
    return (
      <>
        <Col className="mx-auto" sm={4}>
          <Carousel style={{ width: "23rem", height: "25rem" }}>
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-100"
                src={"../images/leather.png"}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img
                className="d-block w-100"
                src={"../images/AF1.png"}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={"../images/burberrybp.png"}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </Col>

        <Row className="mx-auto">
          <Col sm={12}>
            <CardDeck>
              {data.featured.map((item) => {
                let randomIndex = Math.floor(Math.random() * Animate.length);
                let AnimateDiv = styled.div`
                  animation: 2s ${keyframes`${Animate[randomIndex]}`};
                `;
                return (
                  <AnimateDiv key={item.id}>
                    <Card
                      style={{ width: "15rem", height: "25rem" }}
                      onClick={() => this.handleShow(item.id)}
                    >
                      <Card.Img variant="top" src={`../images/${item.image}`} />
                      <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Title>{item.price}</Card.Title>
                      </Card.Body>
                    </Card>
                    <Modal
                      show={this.state.show === item.id}
                      onHide={() => this.handleClose(item.id)}
                    >
                      <Modal.Header closeButton>
                        <Modal.Title>
                          {" "}
                          <img
                            src={`../images/${item.image}`}
                            alt={item.name}
                          />
                        </Modal.Title>
                        <Modal.Title>{item.name}</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>{item.description}</Modal.Body>
                      <Modal.Body style={{ fontWeight: "bold" }}>
                        {item.price}
                      </Modal.Body>
                      <Modal.Footer>
                        <Button
                          variant="secondary"
                          onClick={() => this.handleClose(item.id)}
                        >
                          Close
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </AnimateDiv>
                );
              })}
            </CardDeck>
          </Col>
        </Row>
      </>
    );
  }
}

export default Home;
