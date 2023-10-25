
import SkillBar from './components/SkillBar'
import Footer from './sections/Footer'
import Hero from './sections/Hero'
import Nav from './sections/Nav'
import Portfolios from './sections/Portfolios'
import Services from './sections/Services'
import Testimonials from './sections/Testimonials'


function App() {

  return (
    <>
    <Nav className='z-20 relative' />
    <Hero/>
    <div className='max-lg:hidden'>

    <SkillBar />
    </div>
    <Services/>
    <Portfolios/>
    <Testimonials/>
    <Footer/>
    </>
  )
}

export default App
