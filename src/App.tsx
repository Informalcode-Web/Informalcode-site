import { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import PageController from './components/pageController';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.css';
import { HomeSection } from './components/Sections/HomeSection';
import { ServicesSection } from './components/Sections/ServiceSection';
import { AboutSection } from './components/Sections/AboutSection';
import { CareerSection } from './components/Sections/CareerSection';
import { ContactSection } from './components/Sections/ContactSection';
import UnderConstruction from './components/UnderConstruction';

function App() {
  useEffect(() => {
    const pageController = new PageController();
    pageController.ready();
  }, []);

  if (process.env.NODE_ENV === 'production') {
    return <UnderConstruction />;
  }
  return (
    <div className='body-content mt-5'>
      <Header />
      <main>
        <section id='home' className='section'>
          <HomeSection />
        </section>
        <section id='service' className='section'>
          <ServicesSection />
        </section>
        <section id='about' className='section'>
          <AboutSection />
        </section>
        <section id='career' className='section'>
          <CareerSection />
        </section>
        <section id='contact' className='section'>
          <ContactSection />
        </section>
      </main>
      <Footer />
    </div>
  );
}
export default App;
