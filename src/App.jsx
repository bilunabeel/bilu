import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import SkillBar from './components/SkillBar';
import Footer from './sections/Footer';
import Hero from './sections/Hero';
import Nav from './sections/Nav';
import Portfolios from './sections/Portfolios';
import Services from './sections/Services';
import Testimonials from './sections/Testimonials';

function App () {
  return (
    <Router>
      <Nav className="z-20 relative" />

        <Hero />
       
        <Services />
        <Portfolios />
        <Testimonials /> 

      <Footer />
    </Router>
  );
}

export default App;
