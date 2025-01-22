import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import UpperNav from './components/upperNav';
import Projects from './components/Projects';
import Services from './components/Services';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <UpperNav />
        <Navbar />
        <Routes>
          <Route
            path='/'
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
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
