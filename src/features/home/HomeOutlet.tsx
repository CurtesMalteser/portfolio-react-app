
import { Outlet } from 'react-router-dom';
import PorfolioNavbar from '../../components/navBar/NavBar';

function HomeOutlet() {
    return (
        <>
            <PorfolioNavbar />
            <Outlet />
        </>
    );
}

export default HomeOutlet;