import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import MealCard from './MealCard.jsx';

const MealList = ({ boxOptions, handleSizeChange }) => {
  const [selectedSize, setSelectedSize] = useState(null);

  const handleClick = (boxSize) => {
    if (selectedSize === boxSize) {
      setSelectedSize(null);
      handleSizeChange(null);
    } else {
      setSelectedSize(boxSize);
      handleSizeChange(boxSize);
    }
  };

  const sizes = [
    {
      size: 'Small',
      price: 69.99,
      pepRec: 2,
    },
    {
      size: 'Medium',
      price: 89.99,
      pepRec: 4,
    },
    {
      size: 'Large',
      price: 109.99,
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
