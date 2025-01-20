import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import UpperNav from './components/upperNav';
import About from './components/About';

function App() {

  return (
    <div className="App">
      <UpperNav/>
      <Navbar/>
      <Hero />
      <About />
    </div>
  );
}

export default App;
