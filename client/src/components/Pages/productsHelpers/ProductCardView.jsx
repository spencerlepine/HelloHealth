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

import { PRODUCT } from '../../../config/pageRoutes';

export default function ProductCardView({ product }) {
  const { id } = product;
  const productName = product.product_name;
  const productDescription = product.product_description;
  const productCost = product.product_cost;
  const productImage = product.product_image;
  const productInventory = product.product_inventory;
  const productRating = product.product_rating;

  const { setCurrentProduct } = useMainContext();

  const handleClick = () => {
    setCurrentProduct(product);
  };

  return (
    <Grid xl={2} lg={3} md={4} sm={6} xs={12} item>
      <Card sx={{ a: { textDecoration: 'none', color: 'black' } }}>
        <CardMedia
          component="img"
          height="140"
          image={productImage}
          alt={productName}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <Link onClick={handleClick} to={`${PRODUCT}${id}`}>
              {productName}
            </Link>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <span>{productDescription}</span>
            <span>{productCost}</span>
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: 'flex-end' }}>
          <Button size="small" variant="outlined" color="success">
            Add to Cart
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
