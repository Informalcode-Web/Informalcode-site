import Navbar from './common/navbar';
import Contact from './sections/component/Contact';
import Promotion from './sections/component/Promotion';
import Footer from './common/footer';
import Services from './sections/component/Services';
import Aboutus from './sections/component/Aboutus';

import HeroSection from './sections/component/heroSection';

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Services />
      <Aboutus />
      <Promotion />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
