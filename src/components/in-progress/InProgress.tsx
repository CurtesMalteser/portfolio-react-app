import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import InProgressSVG from './InProgressSVG';
import './InProgress.css';

function InProgress({ children }: { children: React.ReactNode }) {
    return (
        <Container style={{ height: '100vh' }} className='in-progress-container'>
            <Row className="align-items-center" style={{ height: '100%' }}>
                <Col sm='auto' className='img-container'>
                    <div className="in-progress">
                        <div className="anim-container">
                            <InProgressSVG ellipseClassName="ellipse-1" circleClassName="ellipse-1-motion" />
                            <InProgressSVG ellipseClassName="ellipse-2" circleClassName="ellipse-2-motion" />
                            <InProgressSVG ellipseClassName="ellipse-3" circleClassName="ellipse-3-motion" />
                        </div>
                    </div>
                </Col>
                <Col sm='6'>{children}</Col>
            </Row>
        </Container>
    );
}

export default InProgress;