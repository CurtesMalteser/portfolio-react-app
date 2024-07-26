import './App.scss';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import ROUTES from '../constants/routes';
import Header from '../components/header/Header';
import InProgress from '../components/in-progress/InProgress';
import UnderConstruction from '../components/construction/UnderConstruction';
import HomeOutlet from '../features/home/HomeOutlet';
import { Nav } from 'react-bootstrap';

const router = createBrowserRouter([{
  path: ROUTES.HOME,
  element: <HomeOutlet />,
  errorElement: (
    <InProgress >
      <h1>404 Not Found</h1>
      <Nav.Link href={ROUTES.HOME}>Go Home</Nav.Link>
    </InProgress>
  ),
  children: [
    { path: ROUTES.HOME, element: <Header /> },
    { path: ROUTES.ABOUT, element: <InProgress ><UnderConstruction /></InProgress> },
    { path: ROUTES.RESUME, element: <InProgress ><UnderConstruction /></InProgress> },
  ],
}]);

const App = (): React.ReactElement => <RouterProvider router={router} />


export default App;
