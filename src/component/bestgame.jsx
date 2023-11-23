import React from "react";
import { Card, Container, Row, Col, Image } from "react-bootstrap";
import backbloodImage from "../assets/best/back4blood.jpg";
import CrysisImage from "../assets/best/crysis3.jpg";
import evilImage from "../assets/best/residentEvil2.jpg";
import walkingdiedImage from "../assets/best/theWalkingDead.jpg";
import thiefImage from "../assets/best/thief.jpg";
import untildownImage from "../assets/best/untilDawn.jpg";
const BestGame = () => {
    return (  
        <>
            <div>
                <Container>
                    <br/>
                    <h1 className="text-white text-center mb-3" id="best">BEST GAMES</h1>
                    <Row>
                        <Col md={4}>
                            <Card className="gameImage">
                                <Image src={backbloodImage} alt="Back blood Game" className="images"/>
                                <div className="bg-dark">
                                    <div className="p-2 m-1 text-white">
                                        <Card.Title className="text-center">A</Card.Title>
                                        <Card.Text className="text-left">
                                            This is a wider card with natural lead-in to additional content
                                        </Card.Text>
                                        <Card.Text className="text-left">
                                            Last update 3 mins ago
                                        </Card.Text>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card className="gameImage">
                                <Image src={CrysisImage} alt="crysis Game" className="images"/>
                                <div className="bg-dark">
                                    <div className="p-2 m-1 text-white">
                                        <Card.Title className="text-center">B</Card.Title>
                                        <Card.Text className="text-left">
                                            This is a wider card with natural lead-in to additional content
                                        </Card.Text>
                                        <Card.Text className="text-left">
                                            Last update 3 mins ago
                                        </Card.Text>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card className="gameImage">
                                <Image src={evilImage} alt="Resident Evil Game" className="images"/>
                                <div className="bg-dark">
                                    <div className="p-2 m-1 text-white">
                                        <Card.Title className="text-center">C</Card.Title>
                                        <Card.Text className="text-left">
                                            This is a wider card with natural lead-in to additional content
                                        </Card.Text>
                                        <Card.Text className="text-left">
                                            Last update 3 mins ago
                                        </Card.Text>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card className="gameImage">
                                <Image src={walkingdiedImage} alt="The Walking died Game" className="images"/>
                                <div className="bg-dark">
                                    <div className="p-2 m-1 text-white">
                                        <Card.Title className="text-center">D</Card.Title>
                                        <Card.Text className="text-left">
                                            This is a wider card with natural lead-in to additional content
                                        </Card.Text>
                                        <Card.Text className="text-left">
                                            Last update 3 mins ago
                                        </Card.Text>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card className="gameImage">
                                <Image src={thiefImage} alt="Thief Game" className="images"/>
                                <div className="bg-dark">
                                    <div className="p-2 m-1 text-white">
                                        <Card.Title className="text-center">E</Card.Title>
                                        <Card.Text className="text-left">
                                            This is a wider card with natural lead-in to additional content
                                        </Card.Text>
                                        <Card.Text className="text-left">
                                            Last update 3 mins ago
                                        </Card.Text>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card className="gameImage mb-3">
                                <Image src={untildownImage} alt="Until Down Game" className="images"/>
                                <div className="bg-dark">
                                    <div className="p-2 m-1 text-white">
                                        <Card.Title className="text-center">F</Card.Title>
                                        <Card.Text className="text-left">
                                            This is a wider card with natural lead-in to additional content
                                        </Card.Text>
                                        <Card.Text className="text-left">
                                            Last update 3 mins ago
                                        </Card.Text>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}
 
export default BestGame;