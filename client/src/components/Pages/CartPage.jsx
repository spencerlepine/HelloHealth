import React, { useState, useEffect } from 'react';
import { Button, Grid, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';
import useMainContext from '../../context/MainContext.jsx';
import { ACCOUNT, HOME, BOX, FARMS, CART } from '../../config/pageRoutes';

export default function CartPage() {
  const [click, setClick] = useState(true);
  const { setPage } = useMainContext();

  function getProduct(cart) {
    const data = Object.keys(cart);
    // axios
    //   .get('/', data)
    //   .then((res) => {
    //     console.log('data pull from database');
    //   })
    //   .catch((err) => {
    //     console.error(`error when try to pull data ${err}`);
    //   });
  }

  const handlePageChange = (e) => {
    setPage(e.target.name);
  };

  useEffect(() => {
    const cart = JSON.parse(window.sessionStorage.getItem('cart'));
    // const itemsID = Object.keys(cart);
    getProduct(cart);
    console.log(cart);
  }, [click]);

  const dummyDatas = [
    {
      productId: 123,
      productImage:
        'https://i.kym-cdn.com/photos/images/newsfeed/001/879/958/fb1.gif',
      productName: 'JamCat',
      productQuantity: 1,
      productPrice: 14.99,
    },
    {
      productId: 124,
      productImage:
        'https://www.cnet.com/a/img/S8WsucQh6wWeUG1yrQi66jKNtto=/940x0/2020/09/22/ad4bd31b-cf8c-46f5-aa70-231df9acc041/longcat.jpg',
      productName: 'LongCat',
      productQuantity: 2,
      productPrice: 24.99,
    },
  ];

  const removeItem = (id) => {
    const cart = JSON.parse(window.sessionStorage.getItem('cart'));
    delete cart[id];
    window.sessionStorage.setItem('cart', temp);
    setClick(!click);
  };

  const changePage = (page) => {
    // change the state to the page want to go
    // need input props
  };

  const renderSummary = () => {
    let totalPrice = 0;
    let itemCount = 0;
    for (let i = 0; i < dummyDatas.length; i += 1) {
      totalPrice += dummyDatas[i].productQuantity * dummyDatas[i].productPrice;
      itemCount += dummyDatas[i].productQuantity;
    }
    return (
      <Grid
        container
        spacing={3}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs>
          <p>{`${itemCount} items`}</p>
        </Grid>
        <Grid item xs={6}></Grid>
        <Grid item xs>
          <p>{`Total: $${totalPrice}`}</p>
        </Grid>
      </Grid>
    );
  };

  const renderItems = () =>
    dummyDatas.map((data, index) => (
      <Grid
        container
        spacing={3}
        direction="row"
        justifyContent="center"
        alignItems="center"
        key={index}
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
            <p>{`$${data.productPrice}`}</p>
            <Button
              variant="outlined"
              value={data.id}
              onClick={(e) => removeItem(Number(e.target.value))}
            >
              Remove
            </Button>
          </Stack>
        </Grid>
      </Grid>
    ));

  return (
    <>
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
        >
          <Grid item xs>
            <Link to={HOME}>
              <Button variant="outlined" onClick={handlePageChange} name="home">
                Browse Products
              </Button>
            </Link>
          </Grid>
          <Grid item xs={6}></Grid>
          <Grid item xs>
            <Link to={BOX}>
              <Button variant="outlined" onClick={handlePageChange} name="box">
                More Boxes
              </Button>
            </Link>
          </Grid>
        </Grid>
        {renderItems()}
      </Stack>
    </>
  );
}

/*
sample grid for new item
        <Grid container spacing={3} direction="row" justifyContent="center" alignItems="center">
          <Grid item xs>
          <img
            style={{ maxWidth: 150, maxHeight: 150 }}
            src='https://www.cnet.com/a/img/S8WsucQh6wWeUG1yrQi66jKNtto=/940x0/2020/09/22/ad4bd31b-cf8c-46f5-aa70-231df9acc041/longcat.jpg'></img>
          </Grid>
          <Grid item xs>
            <Stack>
              <p>LongCat</p>
              <p>Quantity x2</p>
            </Stack>
          </Grid>
          <Grid item xs>
            <Stack>
              <p>$24.99</p>
              <Button variant="outlined">Remove</Button>
            </Stack>
          </Grid>
        </Grid>
*/
