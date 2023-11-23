import { Container, Row, Col, Button} from "react-bootstrap";
import { MdGamepad } from "react-icons/md";
const Intro = () => {
    return ( 
            <div className="intro">
                <Container className="text-white text-center d-flex justify-content-center align-items-center">
                    <Row>
                        <Col>
                            <h1 className="fw-bold">SOUND OF THE STROM</h1>
                            <p>Challenge apponets head-on in close quaters with your sword</p>
                            <div className="introButton mt-3 text-center">
                                <Button variant="light" className="btn-md">Play Now<MdGamepad className="ms-2"/></Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
     );
}
 
export default Intro;