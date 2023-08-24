import { Button, AppBar, Toolbar, Typography } from '@mui/material';
import Navbar from './common/navbar';
import Contact from './sections/component/Contact';
import Promotion from './sections/component/Promotion';
import Footer from './common/footer';

function App() {
  return (
    <>
      <Navbar />
      <Promotion />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
