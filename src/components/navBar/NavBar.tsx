import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import DarkModeToggle from '../darkmode/DarkModeToggle';
import ROUTES from '../../constants/routes';
import { Link, useLocation } from 'react-router-dom';

const NavItem = ({ route, name }: { route: string, name: string }) => (
    <Nav.Item>
        <Nav.Link
            as={Link}
            to={route}
            eventKey={route}
            style={{ color: 'white' }}
        >{name}</Nav.Link>
    </Nav.Item>
);


const NavbarLinks = () => {
    const location = useLocation();

    return (
        <Navbar.Collapse id='navbar-nav'>
            <Nav className='me-auto'
                defaultActiveKey={ROUTES.HOME}
                activeKey={location.pathname}
                variant="underline"
            >
                <NavItem route={ROUTES.HOME} name='Home' />
                <NavItem route={ROUTES.ABOUT} name='About' />
                <NavItem route={ROUTES.RESUME} name='Resume' />
            </Nav>
        </Navbar.Collapse>
    );
}

const PorfolioNavbar = () => (
    <Navbar expand="lg" bg="dark">
        <Container>
            <Navbar.Brand as={Link} style={{ color: 'white' }} to={ROUTES.HOME}>adb-dev</Navbar.Brand>
            <div className="d-flex align-items-center">
                <DarkModeToggle />
                <Navbar.Toggle aria-controls='navbar-nav-toggle' />
            </div>
            <NavbarLinks />
        </Container>
    </Navbar>
);


export default PorfolioNavbar;