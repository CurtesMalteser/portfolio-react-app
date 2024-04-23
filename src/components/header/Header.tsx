import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import logo from '../../assets/img/logo512.png';

export function Header() {
    return (
        <Container className="header" style={{
            width: "80%",
            height: "70vh",
            padding: "15vh auto"

        }}>
            <Row>
                <Col sm='8'>
                    <h4>Hello, Welcome</h4>
                    <h1>I'm António Bastião</h1>
                    <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </h4>
                </Col>
                <Col sm='4'>
                    <Image src={logo} rounded/>
                </Col>
            </Row>
        </Container>
    )
}

export default Header;