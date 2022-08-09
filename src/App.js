import './App.css';
import routes from './config/routes'
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Routes from './components/routes/Routes'
import NavMobile from './components/NavMobile/NavMobile';

function App() {
  return (
    <div className="App">
      <Navbar />
      <NavMobile />
      <div className='content'>
        <Routes />
        </div>
      <Footer />
    </div>
  );
}

export default App;
