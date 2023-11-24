import React from "react";
import { Card, Container, Row, Col,} from "react-bootstrap";
import backbloodImage from "../assets/best/back4blood.jpg";
import CrysisImage from "../assets/best/crysis3.jpg";
import evilImage from "../assets/best/residentEvil2.jpg";

const BestGame = () => {
  return (
    <>
      <div>
        <Container>
          <br />
          <h1 className="text-white text-center mb-3" id="best">
            Best Game
          </h1>
          <p className="text-center text-white">Top games that are often played by gamers</p>
          <Row className="d-flex justify-content-center">
            <Col sm={4} className="p-2 g-col-6">
              <Card style={{ width: "20rem" }}>
                <Card.Img variant="top" src={backbloodImage} alt="Back blood Game" className="images" />
                <Card.Body>
                  <Card.Title className="fw-bold text-center">BackBoold4</Card.Title>
                  <Card.Text className="text-center">Top games that are often played by gamers</Card.Text>
                  <hr />
                  <div className="d-flex justify-content-between align-items-center flex-row">
                    <h4 className="fw-semi-bold">Top 78%</h4>
                    <h5 className="text-secondary">#BestGame</h5>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={4} className="p-2 g-col-6">
              <Card style={{ width: "20rem" }}>
                <Card.Img variant="top" src={CrysisImage} alt="crysis Game" className="images"/>
                <Card.Body>
                  <Card.Title className="fw-bold text-center">Crysis3</Card.Title>
                  <Card.Text className="text-center">Top games that are often played by gamers</Card.Text>
                  <hr />
                  <div className="d-flex justify-content-between align-items-center flex-row">
                    <h4 className="fw-semi-bold">Top 85%</h4>
                    <h5 className="text-secondary">#BestGame</h5>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={4} className="p-2 g-col-6">
            <Card style={{ width: "20rem" }}>
                <Card.Img variant="top" src={evilImage} alt="Resident Evil Game" className="images" />
                <Card.Body >
                  <Card.Title className="fw-bold text-center">Resident Evil 2</Card.Title>
                  <Card.Text className="text-center">Top games that are often played by gamers</Card.Text>
                  <hr />
                  <div className="d-flex justify-content-between align-items-center flex-row">
                    <h4 className="fw-semi-bold">Top 95%</h4>
                    <h5 className="text-secondary">#BestGame</h5>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default BestGame;
