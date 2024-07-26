import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import DarkModeToggle from '../darkmode/DarkModeToggle';
import ROUTES from '../../constants/routes';


function PorfolioNavbar() {
    return (
        <Navbar expand="lg" bg="dark">
            <Container>
                <Navbar.Brand style={{color:'white'}} href={ROUTES.HOME}>adb-dev</Navbar.Brand>
                <div  className="d-flex align-items-center">
                    <DarkModeToggle />
                    <Navbar.Toggle aria-controls='navbar-nav-toggle' />
                </div>
                <Navbar.Collapse id='navbar-nav'>
                    <Nav className='me-auto'>
                        <Nav.Link style={{color:'white'}} href={ROUTES.HOME}>Home</Nav.Link>
                        <Nav.Link style={{color:'white'}} href={ROUTES.ABOUT}>About</Nav.Link>
                        <Nav.Link style={{color:'white'}} href={ROUTES.RESUME}>Resume</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}


export default PorfolioNavbar;