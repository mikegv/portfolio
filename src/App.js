import './App.css';
import routes from './config/routes'
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      {routes}
    </div>
  );
}

export default App;
