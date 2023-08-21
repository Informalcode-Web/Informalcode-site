import { Button, AppBar, Toolbar, Typography } from '@mui/material';
import Navbar from './common/navbar';

function App() {
  return (
    <>
      <Navbar />
      <Typography
        style={{
          fontFamily: 'epilogue',
          fontSize: '60px',
          fontStyle: 'normal',
          fontWeight: 700,
          lineHeight: '72px',
          letterSpacing: '-2.4px',
          color:
            'linear-gradient(180deg, rgba(0, 0, 0, 0.70) 0%, #000 53.74%, rgba(0, 0, 0, 0.70) 100%)',
          backgroundClip: 'text',
        }}
      >
        Developing top-notch technology to support your business expansion
      </Typography>
      <div>
        <AppBar position='static'>
          <Toolbar>
            <Typography variant='h6'>My Material-UI App</Typography>
          </Toolbar>
        </AppBar>
        <div style={{ padding: '16px' }}>
          <Button variant='contained' color='primary'>
            Primary Button
          </Button>
          <Button variant='contained' color='secondary'>
            Secondary Button
          </Button>
        </div>
      </div>
    </>
  );
}

export default App;
