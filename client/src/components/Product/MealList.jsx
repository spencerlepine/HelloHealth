import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import MealCard from './MealCard.jsx';

const MealList = () => {
  // const [sizes, setSizes] = useState([]);

  const sizes = [
    {
      size: 'small',
      price: 69.99,
      pepRec: 2,
    },
    {
      size: 'medium',
      price: 109.99,
      pepRec: 4,
    },
    {
      size: 'large',
      price: 160.99,
      pepRec: 6,
    },
  ];

  return (
    <>
      <Grid container spacing={0}>
        {sizes.map((size, index) => (
          <Grid item xs={4} key={index}>
            <MealCard
              size={size.size}
              pepRec={size.pepRec}
              price={size.price}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default MealList;
