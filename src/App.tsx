import Navbar from './common/navbar';
import Contact from './sections/component/Contact';
import Promotion from './sections/component/Promotion';
import Footer from './common/footer';
import Services from './sections/component/Services';

function App() {
  return (
    <>
      <Navbar />
      <Services />
      <Promotion /> 
      <Contact />
      <Footer />
    </>
  );
}

export default App;
