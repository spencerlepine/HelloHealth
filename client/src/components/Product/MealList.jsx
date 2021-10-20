import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import MealCard from './MealCard.jsx';

const MealList = () => {
  const [selectedSize, setSelectedSize] = useState(null);

  const handleClick = (boxSize) => {
    if (selectedSize === boxSize) {
      setSelectedSize(null);
    } else {
      setSelectedSize(boxSize);
    }
  };

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
      <Grid
        container
        spacing={3}
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
      >
        {sizes.map((size, index) => (
          <Grid item xs={12} sm={4} md={4} key={index} align="center">
            <MealCard
              size={size.size}
              pepRec={size.pepRec}
              price={size.price}
              handleClick={handleClick}
              selectedSize={selectedSize}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default MealList;
