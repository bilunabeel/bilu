import React from 'react';
import Hero from './sections/Hero';
import SkillBar from '../../components/SkillBar';
import Services from './sections/Services';
import Portfolios from './sections/Portfolios';
import Testimonials from './sections/Testimonials';


const Home = () => {
  return (
    <div>
      <Hero />
      <div className="max-lg:hidden">
        <SkillBar />
      </div>
      <Services />
      <Portfolios />
      <Testimonials />
    </div>
  );
};

export default Home;
