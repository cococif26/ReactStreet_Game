import React from "react";
import { Container, Nav, Navbar, Image } from "react-bootstrap";
import logoImage from "../assets/bg/Logo.png";

const NavigationBar = () => {
    return ( 
        <>
            <div>
                <Navbar variant="dark">
                    <Container>
                        <Navbar.Brand href="/" className="fw-bold"><Image src={logoImage} style={{ width: "96px" }}/>GameHolic</Navbar.Brand>
                        <Nav className="nav-underline">
                            <Nav.Link href="#trending" className=" fw-semi-bold">Tranding</Nav.Link>
                            <Nav.Link href="#best" className=" fw-semi-bold">Best</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        </>
     );
}
 
export default NavigationBar;