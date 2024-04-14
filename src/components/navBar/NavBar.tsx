import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import DarkModeToggle from '../darkmode/DarkeModeToggle';


function PorfolioNavbar() {
    return (
        <Navbar>
            <Container>
                <Navbar.Brand href="/">adb-dev</Navbar.Brand>
                <DarkModeToggle />
            </Container>
        </Navbar>
    );
}


export default PorfolioNavbar;