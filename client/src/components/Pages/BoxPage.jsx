import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import MealList from '../Product/MealList.jsx';
import Nutrition from '../Product/Nutrition.jsx';
import useStyles from '../Product/nutritionStyles';
import AddToCart from './AddToCart.jsx';

export default function BoxPage() {
  const [boxList, setBoxList] = useState([
    { name: 'carrots', quantity: 5, description: 'lorum in ' },
    { name: 'peppers', quantity: 5, description: 'lorum ipsom somethin ' },
    { name: 'tomatoes', quantity: 5, description: 'lorum ipsom somethin ' },
    { name: 'onions', quantity: 1, description: 'lorum ipsom somethin ' },
    { name: 'steak', quantity: 5, description: 'lorum ipsom somethin ' },
    { name: 'carrots', quantity: 5, description: 'lorum ipsom somethin ' },
    { name: 'peppers', quantity: 5, description: 'lorum ipsom somethin ' },
    { name: 'tomatoes', quantity: 5, description: 'lorum ipsom somethin ' },
    { name: 'onions', quantity: 1, description: 'lorum ipsom somethin ' },
    { name: 'steak', quantity: 5, description: 'lorum ipsom somethin ' },
  ]);
  const classes = useStyles();

  function renderRow(props) {
    const { index, style } = props;

    return (
      <>
        <ListItem style={style} key={index} component="div" disablePadding>
          <ListItemButton divider={true}>
            <ListItemText
              primary={`${boxList[index].name}`}
              secondary={`${boxList[index].description}`}
            />
            <ListItemText
              primary={`Quantity: ${boxList[index].quantity}`}
              align="end"
            />
          </ListItemButton>
        </ListItem>
      </>
    );
  }

  return (
    <>
      <Box
        sx={{
          width: '100%',
          height: '100%',
          maxWidth: '80%',
          bgcolor: 'background.paper',
          border: '1px solid #D3D3D3',
          margin: 'auto',
          marginTop: '1em',
          boxSizing: 'border-box',
          boxShadow: 3,
        }}
      >
        <h1 style={{ paddingLeft: '0.65em' }}>Box Name:</h1>
        <p style={{ paddingLeft: '1em' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <List
          sx={{
            width: '100%',
            maxWidth: 5000,
            bgcolor: 'background.paper',
            position: 'relative',
            overflow: 'auto',
            maxHeight: 300,
            '& ul': { padding: 0 },
          }}
          subheader={<li />}
        >
          <li>
            <ul>
              {boxList.map((item, index) => (
                <ListItem key={index} component="div" disablePadding>
                  <ListItemButton divider={true}>
                    <ListItemText
                      primary={`${boxList[index].name}`}
                      secondary={`${boxList[index].description}`}
                    />
                    <ListItemText
                      primary={`Quantity: ${boxList[index].quantity}`}
                      align="end"
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </ul>
          </li>
        </List>
      </Box>
      <Box
        sx={{
          width: '100%',
          height: '100%',
          maxWidth: '80%',
          bgcolor: 'background.paper',
          margin: 'auto',
          boxSizing: 'border-box',
        }}
      >
        <h1>Select a plan:</h1>
        <MealList />
        <Grid container>
          <Grid item xs={12} align="center" paddingTop="1rem">
            {/* need to get the product id to add to cart */}
            <AddToCart id={1} quantity={1} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
