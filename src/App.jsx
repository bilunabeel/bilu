import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Footer from './pages/home/sections/Footer';
import Nav from './pages/home/sections/Nav';
import ServicesPage from './pages/ServicesPage';
import Home from './pages/home/Home';

function App () {
  return (
    <Router>

      <Nav className="z-20 relative" />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>

      <Footer />

    </Router>
  );
}

export default App;
