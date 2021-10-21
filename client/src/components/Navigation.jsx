import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import useStyles from './styles';
import useMainContext from '../context/MainContext.jsx';
import useAuth from '../context/AuthContext.jsx';
import logo from './HelloHealth.svg';

import {
  ACCOUNT, HOME, BOX, FARMS, CART,
} from '../config/pageRoutes';

function Navigation() {
  const classes = useStyles();
  const { setPage } = useMainContext();
  const { currentUser } = useAuth();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handlePageChange = (e) => {
    setPage(e.target.name);
  };

  const btnStyle = {
    a: { textDecoration: 'none' },
    float: 'right',
    button: { ml: 1 },
    display: isSmallScreen ? 'none' : 'block',
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className={classes.navbar} position="static">
        <Toolbar sx={{ justifyContent: isSmallScreen ? 'space-between' : '' }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            id="basic-button"
            aria-controls="basic-menu"
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            sx={{ display: isSmallScreen ? 'block' : 'none' }}
          >
            <MenuIcon color="white" />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
            sx={{ a: { textDecoration: 'none', color: 'black' } }}
          >
            <MenuItem>
              <Link to={BOX}>Box</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to={FARMS}>Farms</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to={ACCOUNT}>Account</Link>
            </MenuItem>
          </Menu>

          <Box
            sx={{
              flexGrow: isSmallScreen ? 0 : 1,
              img: { filter: 'invert(1)' },
            }}
          >
            <Link to={HOME}>
              <img alt="HelloHealth" src={logo} width={250} />
            </Link>
          </Box>
          <Box sx={btnStyle}>
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
            {currentUser ? (
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
            )}
            <Link to={CART}>
              <Button onClick={handlePageChange} name="cart">
                <ShoppingCartIcon />
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navigation;
