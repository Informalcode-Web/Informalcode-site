import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Menu,
  MenuItem,
  Hidden,
} from '@mui/material';

function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div style={{ width: '100%' }}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6'>Logo</Typography>
          <Hidden mdUp>
            <IconButton
              edge='start'
              color='inherit'
              aria-label='menu'
              onClick={handleClick}
            >
              DropDown
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>About</MenuItem>
              <MenuItem onClick={handleClose}>Service</MenuItem>
              <MenuItem onClick={handleClose}>Contact</MenuItem>
            </Menu>
          </Hidden>
          <Hidden smDown>
            <Button color='inherit'>About</Button>
            <Button color='inherit'>Service</Button>
            <Button color='inherit'>Contact</Button>
            <Button color='primary'>Get in Touch</Button>
          </Hidden>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
