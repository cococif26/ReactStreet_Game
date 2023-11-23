import React from "react";
import { Card, Container, Row, Col, Image, Button } from "react-bootstrap";
import mineCraftImage from "../assets/trending/minecraft.jpg";
import farCryImage from "../assets/trending/farCry6.jpg";
import iotImage from "../assets/trending/lol.jpg";
import olliwoorldImage from "../assets/trending/olliworld.jpg";
import valorantImage from "../assets/trending/valorant.jpg";
import wowImage from "../assets/trending/wow.jpg";
import { FaArrowRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
const TrandingGame = () => {
    return (  
        <>
            <div>
                <Container>
                    <br/>
                    <h1 className="text-white text-center fw-bold" id="trending">Trending Game</h1>
                    <p className="text-center text-white">Trending games that are often played by gamer</p>
                    <Row className="mt-4">
                    {/* <Image /> */}
                        <Col md={4}>
                        <Card>
                            <Card.Img variant="top" src={mineCraftImage} alt="Minecraft Game" className="images rounded-2"/>
                            <Card.Body>
                                <div className="d-flex justify-content-between align-items-center flex-row">
                                <Card.Title className="fw-bold">Minecraft</Card.Title>
                                    <div className="d-flex justify-content-center align-items-center flex-row"> 
                                        <p className="mt-0 mx-0"><FaStar style={{ color: "yellow" }}/></p>
                                        <p className="mt-0 mx-0"><FaStar style={{ color: "yellow" }}/></p>
                                        <p className="mt-0 mx-0"><FaStar style={{ color: "yellow" }}/></p>
                                        <p className="mt-0 mx-0"><FaStar style={{ color: "yellow" }}/></p>
                                    </div>
                                </div>
                                <Card.Text>
                                This is a wider card with natural lead-in to additional content
                                </Card.Text>
                                <hr/>
                                <p className="list-group-item">Update last 3 Second ago</p>
                                <hr/>
                                <a className="fw-bold" style={{ cursor:"pointer", color: "navy", float: "right"}}>Try this game<FaArrowRight className="ms-2"/></a>
                            </Card.Body>
                        </Card>
                        </Col>
                        <Col md={4}>
                            <Card>
                                <Card.Img variant="top" src={farCryImage} alt="farcry Game" className="images"/>
                                <Card.Body>
                                    <div className="d-flex justify-content-between align-items-center flex-row">
                                    <Card.Title className="fw-bold">FarCry</Card.Title>
                                        <div className="d-flex justify-content-center align-items-center flex-row"> 
                                            <p className="mt-0 mx-0"><FaStar style={{ color: "yellow" }}/></p>
                                            <p className="mt-0 mx-0"><FaStar style={{ color: "yellow" }}/></p>
                                            <p className="mt-0 mx-0"><FaStar style={{ color: "yellow" }}/></p>
                                            <p className="mt-0 mx-0"><FaStar style={{ color: "yellow" }}/></p>
                                        </div>
                                    </div>
                                    <Card.Text>
                                    This is a wider card with natural lead-in to additional content
                                    </Card.Text>
                                    <hr/>
                                    <p className="list-group-item">Update last 3 Second ago</p>
                                    <hr/>
                                    <a className="fw-bold" style={{ cursor:"pointer", color: "navy", float: "right"}}>Try this game<FaArrowRight className="ms-2"/></a>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card>
                                <Card.Img variant="top" src={iotImage} alt="iot Game" className="images"/>
                                <Card.Body>
                                    <div className="d-flex justify-content-between align-items-center flex-row">
                                    <Card.Title className="fw-bold">League of Legends</Card.Title>
                                        <div className="d-flex justify-content-center align-items-center flex-row"> 
                                            <p className="mt-0 mx-0"><FaStar style={{ color: "yellow" }}/></p>
                                            <p className="mt-0 mx-0"><FaStar style={{ color: "yellow" }}/></p>
                                            <p className="mt-0 mx-0"><FaStar style={{ color: "yellow" }}/></p>
                                            <p className="mt-0 mx-0"><FaStar style={{ color: "yellow" }}/></p>
                                        </div>
                                    </div>
                                    <Card.Text>
                                    This is a wider card with natural lead-in to additional content
                                    </Card.Text>
                                    <hr/>
                                    <p className="list-group-item">Update last 3 Second ago</p>
                                    <hr/>
                                    <a className="fw-bold" style={{ cursor:"pointer", color: "navy", float: "right"}}>Try this game<FaArrowRight className="ms-2"/></a>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card className="mt-4">
                                <Card.Img variant="top" src={olliwoorldImage} alt="olliworld Game" className="images"/>
                                <Card.Body>
                                    <div className="d-flex justify-content-between align-items-center flex-row">
                                    <Card.Title className="fw-bold">Olli World</Card.Title>
                                        <div className="d-flex justify-content-center align-items-center flex-row"> 
                                            <p className="mt-0 mx-0"><FaStar style={{ color: "yellow" }}/></p>
                                            <p className="mt-0 mx-0"><FaStar style={{ color: "yellow" }}/></p>
                                            <p className="mt-0 mx-0"><FaStar style={{ color: "yellow" }}/></p>
                                            <p className="mt-0 mx-0"><FaStar style={{ color: "yellow" }}/></p>
                                        </div>
                                    </div>
                                    <Card.Text>
                                    This is a wider card with natural lead-in to additional content
                                    </Card.Text>
                                    <hr/>
                                    <p className="list-group-item">Update last 3 Second ago</p>
                                    <hr/>
                                    <a className="fw-bold" style={{ cursor:"pointer", color: "navy", float: "right"}}>Try this game<FaArrowRight className="ms-2"/></a>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card className="mt-4">
                                <Card.Img variant="top" src={valorantImage} alt="valorant Game" className="images"/>
                                <Card.Body>
                                    <div className="d-flex justify-content-between align-items-center flex-row">
                                    <Card.Title className="fw-bold">Valorant</Card.Title>
                                        <div className="d-flex justify-content-center align-items-center flex-row"> 
                                            <p className="mt-0 mx-0"><FaStar style={{ color: "yellow" }}/></p>
                                            <p className="mt-0 mx-0"><FaStar style={{ color: "yellow" }}/></p>
                                            <p className="mt-0 mx-0"><FaStar style={{ color: "yellow" }}/></p>
                                            <p className="mt-0 mx-0"><FaStar style={{ color: "yellow" }}/></p>
                                        </div>
                                    </div>
                                    <Card.Text>
                                    This is a wider card with natural lead-in to additional content
                                    </Card.Text>
                                    <hr/>
                                    <p className="list-group-item">Update last 3 Second ago</p>
                                    <hr/>
                                    <a className="fw-bold" style={{ cursor:"pointer", color: "navy", float: "right"}}>Try this game<FaArrowRight className="ms-2"/></a>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card className="mt-4 mb-4">
                                <Card.Img variant="top" src={wowImage} alt="wow Game" className="images"/>
                                <Card.Body>
                                    <div className="d-flex justify-content-between align-items-center flex-row">
                                    <Card.Title className="fw-bold">Valorant</Card.Title>
                                        <div className="d-flex justify-content-center align-items-center flex-row"> 
                                            <p className="mt-0 mx-0"><FaStar style={{ color: "yellow" }}/></p>
                                            <p className="mt-0 mx-0"><FaStar style={{ color: "yellow" }}/></p>
                                            <p className="mt-0 mx-0"><FaStar style={{ color: "yellow" }}/></p>
                                            <p className="mt-0 mx-0"><FaStar style={{ color: "yellow" }}/></p>
                                        </div>
                                    </div>
                                    <Card.Text>
                                    This is a wider card with natural lead-in to additional content
                                    </Card.Text>
                                    <hr/>
                                    <p className="list-group-item">Update last 3 Second ago</p>
                                    <hr/>
                                    <a className="fw-bold" style={{ cursor:"pointer", color: "navy", float: "right"}}>Try this game<FaArrowRight className="ms-2"/></a>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}
 
export default TrandingGame;