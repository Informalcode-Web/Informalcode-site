import { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import PageController from './components/pageController';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.css';
import { HomeSection } from './components/Sections/homeSection';
import { ServicesSection } from './components/Sections/serviceSection';
import { AboutSection } from './components/Sections/aboutSection';
import { CareerSection } from './components/Sections/careerSection';
import { ContactSection } from './components/Sections/contactSection';

function App() {
  useEffect(() => {
    const pageController = new PageController();
    pageController.ready();
  }, []);
  if (process.env.NODE_ENV === 'production') {
    return (
      <h1>
        Currently, the page is under construction. Please check back later.
      </h1>
    );
  }
  return (
    <div className='body-content mt-5'>
      <Header />
      <main>
        <section id='home'>
          <HomeSection />
        </section>
        <section id='service'>
          <ServicesSection />
        </section>
        <section id='about'>
          <AboutSection />
        </section>
        <section id='career'>
          <CareerSection />
        </section>
        <section id='contact'>
          <ContactSection />
        </section>
      </main>
      <Footer />
    </div>
  );
}
export default App;
