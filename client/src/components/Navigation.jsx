import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import useStyles from './styles';
import useMainContext from '../context/MainContext.jsx';
import useAuth from '../context/AuthContext.jsx';

import {
  ACCOUNT,
  HOME,
  BOX,
  FARMS,
  CART,
} from '../config/pageRoutes';

function Navigation() {
  const classes = useStyles();
  const { setPage } = useMainContext();
  const { currentUser } = useAuth();

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
          <Link to={HOME}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              HelloHealth (Sample Navbar)
            </Typography>
          </Link>
          <Link to={BOX}>
            <Button name="box" variant="contained">
              Box
            </Button>
          </Link>
          <Link to={FARMS}>
            <Button name="farms" variant="contained">
              Farms
            </Button>
          </Link>
          {
            currentUser ? (
              <Link to={ACCOUNT}>
                <Button name="farms" variant="contained">
                  Account
                </Button>
              </Link>
            ) : (
              <Link to={ACCOUNT}>
                <Button name="farms" variant="contained">
                  Log In
                </Button>
              </Link>
            )
          }
          <Link to={CART}>
            <Button onClick={handlePageChange} name="cart">
              <ShoppingCartIcon />
            </Button>
          </Link>
        </Toolbar >
      </AppBar >
    </Box >
  );
}

export default Navigation;
