import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import UpperNav from './components/upperNav';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';

function App() {

  return (
    <div className="App">
      <UpperNav/>
      <Navbar/>
      <Hero />
      <About />
      <Projects />
      <Services />
    </div>
  );
}

export default App;
