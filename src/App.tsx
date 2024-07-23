import './App.scss';
//import Header from './components/header/Header';
import InProgress from './components/in-progress/InProgress';
import PorfolioNavbar from './components/navBar/NavBar';

function App() {
  return (
    <div className="App">
      <PorfolioNavbar />
      {/* <Header /> */}
      <InProgress />
    </div>
  );
}

export default App;
