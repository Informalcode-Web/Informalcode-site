import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const navbarStyles = {
  appBar: {
    background: 'none',
    boxShadow: 'none',
    paddingLeft: '4rem',
    paddingRight: '4rem',
  },
  toolbar: {
    justifyContent: 'space-between',
  },
  logo: {
    fontFamily: 'monospace',
    fontWeight: 700,
    color: 'black',
  },
  menuButton: {
    color: 'black',
    fontSize: 18,
    fontWeight: 600,
    textTransform: 'none',
  },
  contactButton: {
    background: 'black',
    color: 'white',
    borderRadius: 8,
    fontSize: 14,
    fontWeight: 700,
    padding: '8px 16px',
  },
};

const Navbar = () => {
  return (
    <AppBar position='static' style={navbarStyles.appBar}>
      <Toolbar style={navbarStyles.toolbar}>
        <Typography variant='h6' style={navbarStyles.logo}>
          Logo
        </Typography>

        <Button sx={navbarStyles.menuButton}>About</Button>
        <Button sx={navbarStyles.menuButton}>Services</Button>
        <Button sx={navbarStyles.menuButton}>Contact</Button>

        <Button variant='contained' style={navbarStyles.contactButton}>
          Get in Touch
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
