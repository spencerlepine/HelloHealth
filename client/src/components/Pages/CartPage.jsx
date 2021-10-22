import React, { useState, useEffect } from 'react';
import { Button, Grid, Stack } from '@mui/material';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import axios from 'axios';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import useMainContext from '../../context/MainContext.jsx';
import {
  ACCOUNT,
  HOME,
  BOX,
  FARMS,
  CART,
  CHECKOUT,
} from '../../config/pageRoutes';
import ShippingPage from './ShippingPage/ShippingPage.jsx';
import config from '../../config/config';

export default function CartPage() {
  const [click, setClick] = useState(true);
  const { setPage } = useMainContext();
  const [dummyDatas, setDummyDatas] = useState([
    {
      productId: 0,
      productImage: '',
      productName: '',
      productQuantity: 0,
      productPrice: '',
    },
  ]);

  const dataParsing = (data, cart) => {
    const temp = [];
    console.log(cart);
    for (let i = 0; i < data.length; i += 1) {
      const item = {};
      item.productId = data[i].id;
      item.productImage = data[i].product_image;
      item.productName = data[i].product_name;
      item.productPrice = data[i].product_cost;
      item.productQuantity = cart[data[i].id].productQuantity;
      // item.productQuantity = 3;
      temp.push(item);
    }
    console.log(temp);
    setDummyDatas(temp);
  };

  const getProduct = (cart) => {
    const data = Object.keys(cart);
    if (data.length !== 0) {
      axios
        .get(
          `${config.SERVER_URL}/product/CartInfo?cartArray=${JSON.stringify(
            data,
          )}`,
        )
        .then((res) => {
          console.log('data pull from database');
          dataParsing(res.data, cart);
        })
        .catch((err) => {
          console.error(`error when try to pull data ${err}`);
        });
    } else {
      setDummyDatas([
        {
          productId: 0,
          productImage: '',
          productName: '',
          productQuantity: 0,
          productPrice: '',
        },
      ]);
    }
  };

  const handlePageChange = (e) => {
    setPage(e.target.name);
  };

  useEffect(() => {
    const cart = JSON.parse(window.sessionStorage.getItem('cart'));

    getProduct(cart);
  }, [click]);

  const removeItem = (id) => {
    console.log(id);
    const cart = JSON.parse(window.sessionStorage.getItem('cart'));
    delete cart[id];
    window.sessionStorage.setItem('cart', JSON.stringify(cart));
    setClick(!click);
  };

  const renderSummary = () => {
    let totalPrice = 0;
    let itemCount = 0;
    for (let i = 0; i < dummyDatas.length; i += 1) {
      totalPrice
        += dummyDatas[i].productQuantity
        * Number(dummyDatas[i].productPrice.substring(1));

      itemCount += dummyDatas[i].productQuantity;
    }
    return (
      <Grid
        container
        spacing={3}
        direction="row"
        justifyContent="center"
        alignItems="center"
        style={{ backgroundColor: '#eee', margin: '0px' }}
      >
        <Grid item xs>
          <p>{`${itemCount} items`}</p>
        </Grid>
        <Grid item xs={6}></Grid>
        <Grid item xs>
          <p>{`Total: $${totalPrice.toFixed(2)}`}</p>
        </Grid>
      </Grid>
    );
  };

  const renderItems = () => dummyDatas.map((data, index) => (
      <Grid
        container
        spacing={3}
        direction="row"
        justifyContent="center"
        alignItems="center"
        key={index}
        style={{
          borderBottom: '1px solid black',
          padding: '20px',
          marginTop: '0px',
          backgroundColor: index % 2 === 0 ? 'transparent' : '#eee',
        }}
      >
        <Grid item xs>
          <img
            style={{ maxWidth: 150, maxHeight: 150 }}
            src={data.productImage}
          ></img>
        </Grid>
        <Grid item xs>
          <Stack>
            <p>{data.productName}</p>
            <p>{`Quantity x${data.productQuantity}`}</p>
          </Stack>
        </Grid>
        <Grid item xs>
          <Stack>
            <p align="center">{data.productPrice}</p>
            <Button
              variant="contained"
              value={data.productId}
              onClick={(e) => removeItem(Number(e.target.value))}
            >
              Remove
            </Button>
          </Stack>
        </Grid>
      </Grid>
  ));

  const styles = {
    a: {
      textDecoration: 'none',
    },
    button: {
      backgroundColor: '#264653',
      p: 2,
      color: '#FFF',
      borderRadius: '4px',
      '&:hover': {
        backgroundColor: '#f4a261',
      },
    },
  };

  return (
    <Container sx={styles}>
      <Stack
        spacing={2}
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          container
          spacing={3}
          direction="row"
          justifyContent="center"
          alignItems="center"
          style={{ borderBottom: '1px solid black', margin: 0 }}
        >
          <Grid item xs>
            <p>Cart page</p>
          </Grid>
          <Grid item xs={6}></Grid>
          <Grid item xs>
            <p>Cart</p>
          </Grid>
        </Grid>
        {renderSummary()}
        <Grid
          container
          spacing={3}
          direction="row"
          justifyContent="center"
          alignItems="center"
          style={{
            borderBottom: '1px solid black',
            paddingBottom: '25px',
            backgroundColor: '#eee',
            margin: '0',
          }}
        >
          <Grid item xs>
            <Link to={HOME}>
              <Button
                variant="contained"
                onClick={handlePageChange}
                name="home"
              >
                Browse Products
              </Button>
            </Link>
          </Grid>
          <Grid item xs={6}></Grid>
          <Grid item xs>
            <Link to={BOX}>
              <Button variant="contained" onClick={handlePageChange} name="box">
                More Boxes
              </Button>
            </Link>
          </Grid>
        </Grid>
        {renderItems()}
        <Link to={CHECKOUT}>
          <button name="checkout" onClick={handlePageChange}>
            GO TO CHECKOUT
          </button>
        </Link>
      </Stack>
    </Container>
  );
}

/*

real dummy data
{
  id: 123,
  product_image:
    'https://i.kym-cdn.com/photos/images/newsfeed/001/879/958/fb1.gif',
  product_name: 'JamCat',
  product_cost: '$14.99',
  product_inventory: 345,
  product_rating: 4,
  product_desription: 'this is a description',
  farm_id: 1,
  reviews_count: 20,
},

*/
