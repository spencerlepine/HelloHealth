import axios from 'axios';
import React, { useState, useEffect } from 'react';
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
    {
      name: 'carrots',
      quantity: 5,
      description: 'Beautiful california carrots',
    },
    {
      name: 'peppers',
      quantity: 5,
      description: 'Grown in the heart of Silicon Valley',
    },
    {
      name: 'tomatoes',
      quantity: 5,
      description: 'Vine ripen tomatoes fresh from the garden',
    },
    {
      name: 'onions',
      quantity: 1,
      description: 'The sweetest onions in America.',
    },
    {
      name: 'steak',
      quantity: 5,
      description: 'Happy Cows equals delicious meat!',
    },
  ]);
  const [boxOptions, setBoxOptions] = useState([]);
  const [selectedSizePlan, setSelectedSizePlan] = useState('Small');
  const [selectedProductId, setSelectedProductId] = useState('');
  const [boxListSize, setBoxSizeList] = useState(null);

  const classes = useStyles();

  const getBoxes = () => {
    const config = {
      method: 'get',
      url: 'http://localhost:8001/boxes/getBoxes',
      headers: {},
    };

    axios(config)
      .then((response) => {
        setBoxOptions(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getBoxItems = (selectedSize) => {
    if (selectedSize === '') {
      setBoxSizeList('Small');
      return;
    }

    const params = { size: selectedSize };

    axios
      .get('http://localhost:8001/boxes/getItemsList', { params })
      .then((response) => {
        setBoxSizeList(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getBoxes();
    getBoxItems(selectedSizePlan);
  }, [selectedSizePlan]);

  const handleSizeChange = (size) => {
    if (size === null) {
      setSelectedSizePlan('Small');
    } else if (size === 'Small') {
      setSelectedSizePlan(size);
      setSelectedProductId(9999);
    } else if (size === 'Medium') {
      setSelectedSizePlan(size);
      setSelectedProductId(10000);
    } else if (size === 'Large') {
      setSelectedSizePlan(size);
      setSelectedProductId(10001);
    }
  };

  if (boxListSize !== null) {
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
          <h1 style={{ paddingLeft: '0.65em' }}>This Week's Box</h1>
          <p style={{ paddingLeft: '1em' }}>
            {boxOptions.length > 0 && boxOptions[0].product_description}
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
                {boxListSize.map((item, index) => (
                  <ListItem key={index} component="div" disablePadding>
                    <ListItemButton divider={true}>
                      <Grid container alignItems="center">
                        {boxListSize ? (
                          <>
                            <Grid item xs={6}>
                              <ListItemText
                                primary={`${boxListSize[index].product_name}`}
                                // secondary={`${boxListSize[index].product_description}`}
                              />
                            </Grid>

                            <Grid item xs={6}>
                              <ListItemText
                                primary={`Quantity: ${boxListSize[index].product_quantity}`}
                                align="end"
                              />
                            </Grid>
                          </>
                        ) : null}
                      </Grid>
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
          <MealList
            boxOptions={boxOptions}
            handleSizeChange={handleSizeChange}
          />
          <Grid container>
            <Grid item xs={12} align="center" paddingTop="1rem">
              <AddToCart id={selectedProductId} quantity={1} />
            </Grid>
          </Grid>
        </Box>
      </>
    );
  }
  return null;
}
