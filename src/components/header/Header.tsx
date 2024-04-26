import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import './Header.css';
import welcomePhoto from '../../assets/img/welcome.jpg';
import intro from '../../assets/strings/en/intro.json'

export function Header() {
    return (
        <Container className='header'>
            <Row>
                <Col sm='8'>
                    <h4>Hello, Welcome</h4>
                    <h1>I'm António Bastião</h1>
                    <h4>{intro.introduction}</h4>
                </Col>
                <Col sm='4' className='img-container'>
                    <Image className='img' src={welcomePhoto} rounded/>
                </Col>
            </Row>
        </Container>
    )
}

export default Header;