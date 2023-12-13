import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import Footer from './pages/home/sections/Footer';
import Nav from './pages/home/sections/Nav';
import ServicesPage from './pages/service page/ServicesPage';
import Home from './pages/home/Home';

function App () {
  return (
    <Router>

      <Nav className="z-20 relative" />

      <Routes>

        <Route path="/bilu" element={<Home />} />
        <Route path="/bilu/services" element={<ServicesPage />} />
        <Route path="/" element={<Navigate to="/bilu/"/>} when={!location.pathname.startsWith("/bilu/")}   />

      </Routes>

      <Footer />

    </Router>
  );
}

export default App;
