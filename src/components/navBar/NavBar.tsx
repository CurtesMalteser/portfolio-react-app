import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import DarkModeToggle from '../darkmode/DarkeModeToggle';


function PorfolioNavbar() {
    return (
        <Navbar expand="lg" bg="dark">
            <Container>
                <Navbar.Brand style={{color:'white'}} href="/">adb-dev</Navbar.Brand>
                <DarkModeToggle />
            </Container>
        </Navbar>
    );
}


export default PorfolioNavbar;