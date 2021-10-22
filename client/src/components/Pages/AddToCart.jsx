import React from 'react';
import { Button } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function AddToCart({ id, quantity }) {
  // need to create document.cookie.cart to store cart information
  // document.cookie.cart need information include
  // {productID, productImage, productName, productPrice}, productQuantity
  const addItem = () => {
    /* const cart = {
      123: {id: 123, productQuantity: 1},
      124: {id: 124, productQuantity: 2},
    } */
    // if (window.sessionStorage.getItem('cart') === null) {
    //   window.sessionStorage.setItem('cart', JSON.stringify({}));
    // }

    const cart = JSON.parse(window.sessionStorage.getItem('cart'));

    const itemsKey = Object.keys(cart);
    if (itemsKey.includes(String(id))) {
      cart[id].productQuantity += quantity;
    } else {
      cart[id] = { id, productQuantity: quantity };
    }

    const temp = JSON.stringify(cart);

    window.sessionStorage.setItem('cart', temp);
  };

  return (
    <Button
      size="small"
      variant="contained"
      style={{
        color: '#FFF',
        backgroundColor: '#2A9D8F',
      }}
      startIcon={<AddShoppingCartIcon />}
      onClick={(e) => addItem()}
    >
      Add to Cart
    </Button>
  );
}
