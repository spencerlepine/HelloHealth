import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import useMainContext from '../../../context/MainContext.jsx';
import AddToCart from '../AddToCart.jsx';

import { PRODUCT } from '../../../config/pageRoutes';

export default function ProductCardView({ product }) {
  const { id } = product;
  const productName = product.product_name;
  const productDescription = product.product_description;
  const productCost = product.product_cost;
  const productImage = product.product_image;
  const productInventory = product.product_inventory;
  const productRating = product.product_rating;

  const { setCurrentProduct, addProductToCart } = useMainContext();

  const handleClick = () => {
    setCurrentProduct(product);
  };

  return (
    <Grid xl={2} lg={3} md={4} sm={6} xs={12} item>
      <Card
        sx={{
          a: {
            textDecoration: 'none',
            color: '#264653',
            '&:hover': {
              color: '#F4A261',
            },
          },
        }}
      >
        <CardMedia
          component="img"
          height="140"
          image={productImage}
          alt={productName}
        />
        <CardContent sx={{ backgroundColor: '#eee' }}>
          <Typography gutterBottom variant="h5" component="div">
            <Link onClick={handleClick} to={`${PRODUCT}${id}`}>
              {productName}
            </Link>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <span style={{ fontSize: '1.17em', fontWeight: 'bold' }}>
              {productCost}
            </span>
            <br />
            <span>{productDescription}</span>
          </Typography>
        </CardContent>
        <CardActions
          sx={{ justifyContent: 'center', pb: 3, backgroundColor: '#eee' }}
        >
          <AddToCart id={id} quantity={1} />
        </CardActions>
      </Card>
    </Grid>
  );
}
