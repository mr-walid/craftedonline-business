import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import UpperNav from './components/upperNav';
import Projects from './components/Projects';
import Services from './components/Services';
import About from './components/About';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <UpperNav />
        <Navbar />
        <Routes>
          <Route
            path='/home'
            element={<Hero />}
          />
          <Route
            path='/projects'
            element={<Projects />}
          />
          <Route
            path='/services'
            element={<Services />}
          />
          <Route
            path='/about'
            element={<About />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
