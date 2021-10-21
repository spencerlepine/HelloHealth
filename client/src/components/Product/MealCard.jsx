import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import useStyles from './nutritionStyles';
import Nutrition from './Nutrition.jsx';
import NutritionModal from './NutritionModal.jsx';

export default function MealCard({
  handleClick,
  selectedSize,
  size,
  pepRec,
  price,
}) {
  const classes = useStyles();

  return (
    <>
      {console.log('size', size)}
      <Card sx={{ minWidth: 125 }} value={size}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://bostonorganics.grubmarket.com/assets/img/home/main-section-image.png"
            alt="produce"
          />
          <CardContent>
            <Grid container spacing={0}>
              <Grid
                item
                xs={6}
                className={`${classes.nutritionBottom} ${classes.nutritionRight}`}
              >
                <Typography
                  gutterBottom
                  variant="overline"
                  component="div"
                  textAlign="center"
                >
                  {size}
                </Typography>
              </Grid>
              <Grid item xs={6} className={classes.nutritionBottom}>
                <Typography
                  gutterBottom
                  variant="overline"
                  component="div"
                  textAlign="center"
                >
                  {pepRec} people
                </Typography>
              </Grid>
              {/* <Grid container xs={12} alignItems='center'>
                <Grid item>
              <Nutrition />
                </Grid> */}
              <Grid
                container
                // xs={12}
                justifyContent="center"
                alignItems="center"
              >
                <Grid item>
                  <NutritionModal />
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  className={classes.priceText}
                  variant="body2"
                  color="text.secondary"
                >
                  ${price}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Grid container spacing={0} direction="column" alignItems="center">
            {selectedSize === size ? (
              <Button
                onClick={() => handleClick(size)}
                size="large"
                color="primary"
              >
                Selected
              </Button>
            ) : (
              <Button
                onClick={() => handleClick(size)}
                size="large"
                color="primary"
              >
                Select This Plan
              </Button>
            )}
          </Grid>
        </CardActions>
      </Card>
    </>
  );
}

// 'body1'
// | 'body2'
// | 'button'
// | 'caption'
// | 'h1'
// | 'h2'
// | 'h3'
// | 'h4'
// | 'h5'
// | 'h6'
// | 'inherit'
// | 'overline'
// | 'subtitle1'
// | 'subtitle2'
// | string
