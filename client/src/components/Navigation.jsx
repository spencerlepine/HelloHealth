import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import useStyles from './styles';
import useMainContext from '../context/MainContext';

function Navigation() {
  const classes = useStyles();
  const { setPage } = useMainContext();

  const handlePageChange = (e) => {
    setPage(e.target.name);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className={classes.navbar} position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            HelloHealth (Sample Navbar)
          </Typography>
          <Button onClick={handlePageChange} name="box" variant="contained">
            Box
          </Button>
          <Button onClick={handlePageChange} name="farms" variant="contained">
            Farms
          </Button>
          <Button onClick={handlePageChange} name="account" variant="contained">
            Account
          </Button>
          <Button onClick={handlePageChange} name="cart">
            <ShoppingCartIcon />
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navigation;
