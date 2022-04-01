import './App.css';
import routes from './config/routes'
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='content'>
        {routes}
        </div>
      <Footer />
    </div>
  );
}

export default App;
