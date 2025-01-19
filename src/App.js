import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import UpperNav from './components/upperNav';

function App() {

  return (
    <div className="App">
      <UpperNav/>
      <Navbar/>
      <Hero />
    </div>
  );
}

export default App;
