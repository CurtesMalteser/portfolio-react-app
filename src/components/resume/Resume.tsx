import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

export default function Resume() {
    return (
        <Container className='resume'>
            <Row>
                <Col sm='8'>
                    <h4>Resume</h4>
                    <h1>António Bastião</h1>
                    <h4>Software Engineer</h4>
                </Col>
            </Row>
        </Container>
    )
}
