import { useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { HomeSection, ServicesSection, AboutSection, CareerSection, ContactSection } from './components/Index'
import PageController from './components/pageController'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '@fortawesome/fontawesome-free/css/all.css'


function App() {
  useEffect(() => {
    const pageController = new PageController();
    pageController.ready();
  }, []);

  return (
    <div className='body-content mt-5'>
      <Header />
      {/* Other components and content */}
      <main>
        <HomeSection />
        <ServicesSection />
        <AboutSection />
        <CareerSection />
        <ContactSection />
      </main>
      <Footer />
      {/* Other components and content */}
    </div>
  );
}
export default App
