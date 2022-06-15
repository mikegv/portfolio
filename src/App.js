import './App.css';
import routes from './config/routes'
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Routes from './components/routes/Routes'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='content'>
        <Routes />
        </div>
      <Footer />
    </div>
  );
}

export default App;
