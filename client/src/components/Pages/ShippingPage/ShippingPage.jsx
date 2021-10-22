import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import useAuth from '../../../context/AuthContext.jsx';

const ShippingPage = () => {
  const { currentUser, accountDetails } = useAuth();
  const [open, setOpen] = useState(false);
  const [newAddressClicked, setNewAddressClicked] = useState(false);
  const [selectBoxDates, setSelectBoxDates] = useState([]);
  const [expectedExpressDate, setExpectedExpressDate] = useState('');
  const [expectedStandardDate, setExpectedStandardDate] = useState('');
  const [chosenBoxDeliveryDate, setChosenBoxDeliveryDate] = useState('');
  const [chosenProductDeliveryDate, setChosenProductDeliveryDate] =
    useState('');
  const [userId, setUserId] = useState('');
  const [userInfo, setUserInfo] = useState({});
  const [firstName, setFirstName] = useState(currentUser.displayName);
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [email, setEmail] = useState('');
  const [deliveryInstructions, setDeliveryInstructions] = useState('N/A');
  const [noteForAllergies, setNoteForAllergies] = useState('');
  const [productsCost, setProductsCost] = useState(0);
  const [reccuringCost, setReccuringCost] = useState(0);
  const [shippingCost, setShippingCost] = useState(0);
  const [cartInfo, setCartInfo] = useState([]);
  const [todaysDate, setTodaysDate] = useState('');

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
      temp.push(item);
    }
    setCartInfo(temp);
  };

  const getProducts = (cart) => {
    const data = Object.keys(cart);
    if (data.length !== 0) {
      axios
        .get(
          `http://localhost:8001/product/CartInfo?cartArray=${JSON.stringify(
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
      setCartInfo([
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

  const postTransaction = () => {
    axios
      .post('http://localhost:8001/user/transaction', {
        id: Math.round(Math.random() * 888888),
        userId,
        cost: productsCost + reccuringCost + shippingCost,
        orderDate: todaysDate,
      })
      .then((response) => {
        console.log('Transaction Posted');
      })
      .catch((error) => console.error(error));
  };

  const handleOpen = () => {
    setOpen(true);
    postTransaction();
  };

  const renderSummary = () => {
    let productsPrice = 0;
    let recurringPrice = 0;
    for (let i = 0; i < cartInfo.length; i += 1) {
      if (
        cartInfo[i].productId === 9999
        || cartInfo[i].productId === 10000
        || cartInfo[i].productId === 10001
      ) {
        recurringPrice
          += cartInfo[i].productQuantity
          * Number(cartInfo[i].productPrice.substring(1));
      } else {
        productsPrice
          += cartInfo[i].productQuantity
          * Number(cartInfo[i].productPrice.substring(1));
      }
    }
    setProductsCost(productsPrice);
    setReccuringCost(recurringPrice);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleBoxDeliverySelect = (e) => {
    setChosenBoxDeliveryDate(e.target.value);
  };

  const handleProductDeliverySelect = (e) => {
    setChosenProductDeliveryDate(e.target.value);
  };

  const getSelectDates = () => {
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    const dates = [];
    for (let i = 0; i < 10; i += 1) {
      const selectShipDate = new Date();
      selectShipDate.setDate(selectShipDate.getDate() + i + 4);
      const humanReadableDate = selectShipDate.toLocaleDateString(
        'en-US',
        options,
      );
      dates.push(humanReadableDate);
    }
    setSelectBoxDates(dates);
  };

  const handleNewShipAddress = () => {
    setNewAddressClicked(!newAddressClicked);
  };

  const getExpressShipDate = () => {
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    const expressShipDate = new Date();
    expressShipDate.setDate(expressShipDate.getDate() + 2);

    const humanReadableDate = expressShipDate.toLocaleDateString(
      'en-US',
      options,
    );
    setExpectedExpressDate(humanReadableDate);
  };

  const getStandardShipDate = () => {
    const standardShipDate = new Date();
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    standardShipDate.setDate(standardShipDate.getDate() + 6);
    const humanReadableDate = standardShipDate.toLocaleDateString(
      'en-US',
      options,
    );
    setExpectedStandardDate(humanReadableDate);
  };

  const getDay = () => {
    const date = new Date();
    const [month, day, year] = [
      date.getMonth(),
      date.getDate(),
      date.getFullYear(),
    ];
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    setTodaysDate(date.toLocaleDateString(options));
    getExpressShipDate();
    getStandardShipDate();
  };

  const getShippingCost = () => {
    if (chosenProductDeliveryDate === expectedStandardDate) {
      setShippingCost(5.99);
    } else if (chosenProductDeliveryDate === expectedExpressDate) {
      setShippingCost(11.99);
    } else {
      setShippingCost(0);
    }
  };

  const getUserInfo = () => {
    console.log('currentUSER: ', currentUser);
    console.log('USER ID: ', currentUser.uid);
    const config = {
      method: 'get',
      url: `http://localhost:8001/user/account-details?userId=${currentUser.uid}`,
      headers: {},
    };

    axios(config)
      .then(({ data }) => {
        console.log('AXIOS RES DATA: ', data);
        setUserInfo(data);
        setUserId(data.id);
        setFirstName(data['first name']);
        setLastName(data['last name']);
        setAddress(data.Address);
        setCity(data.City);
        setState(data.State);
        setZipcode(data['Zip Code']);
        setEmail(data.email);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getDay();
    getSelectDates();
    getShippingCost();
    const cartItems = JSON.parse(window.sessionStorage.getItem('cart'));
    getProducts(cartItems);
    renderSummary();
  }, [
    cartInfo,
    productsCost,
    reccuringCost,
    shippingCost,
    chosenProductDeliveryDate,
  ]);

  useEffect(() => {
    renderSummary();
    getUserInfo();
    console.log('current', currentUser);
  }, []);

  const NewShippingAddress = () => {
    if (newAddressClicked) {
      return (
        <Container>
          <Grid
            container
            spacing={2}
            sx={{
              border: 1,
              borderRadius: '5px',
              // borderColor: '#d3d3d3',
              width: '100%',
              paddingBottom: '1em',
              marginTop: '1em',
              margin: 'auto',
            }}
          >
            <Grid item xs={6}>
              <label>First Name</label> <br />
              <input
                style={{ width: '90%' }}
                onChange={(e) => setFirstName(e.target.value)}
                type="text"
                value={firstName.split(' ')[0]}
              />
            </Grid>
            <Grid item xs={6}>
              <label>Last Name</label> <br />
              <input
                style={{ width: '75%' }}
                type="text"
                value={lastName.split(' ')[1]}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <label>Shipping Address</label> <br />
              <input
                style={{ width: '90%' }}
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </Grid>

            <Grid item xs={6}>
              <label>Zip Code</label> <br />
              <input
                style={{ width: '75%' }}
                type="text"
                value={zipcode}
                onChange={(e) => setZipcode(e.target.value)}
              />
            </Grid>

            <Grid item xs={6}>
              <label>City</label> <br />
              <input
                style={{ width: '90%' }}
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </Grid>

            <Grid item xs={6}>
              <label>State</label> <br />
              <select
                value={state}
                onChange={(e) => setState(e.target.value)}
                style={{ width: '77%' }}
              >
                <option value="AL">AL</option>
                <option value="AK">AK</option>
                <option value="AR">AR</option>
                <option value="AZ">AZ</option>
                <option value="CA">CA</option>
                <option value="CO">CO</option>
                <option value="CT">CT</option>
                <option value="DC">DC</option>
                <option value="DE">DE</option>
                <option value="FL">FL</option>
                <option value="GA">GA</option>
                <option value="HI">HI</option>
                <option value="IA">IA</option>
                <option value="ID">ID</option>
                <option value="IL">IL</option>
                <option value="IN">IN</option>
                <option value="KS">KS</option>
                <option value="KY">KY</option>
                <option value="LA">LA</option>
                <option value="MA">MA</option>
                <option value="MD">MD</option>
                <option value="ME">ME</option>
                <option value="MI">MI</option>
                <option value="MN">MN</option>
                <option value="MO">MO</option>
                <option value="MS">MS</option>
                <option value="MT">MT</option>
                <option value="NC">NC</option>
                <option value="NE">NE</option>
                <option value="NH">NH</option>
                <option value="NJ">NJ</option>
                <option value="NM">NM</option>
                <option value="NV">NV</option>
                <option value="NY">NY</option>
                <option value="ND">ND</option>
                <option value="OH">OH</option>
                <option value="OK">OK</option>
                <option value="OR">OR</option>
                <option value="PA">PA</option>
                <option value="RI">RI</option>
                <option value="SC">SC</option>
                <option value="SD">SD</option>
                <option value="TN">TN</option>
                <option value="TX">TX</option>
                <option value="UT">UT</option>
                <option value="VT">VT</option>
                <option value="VA">VA</option>
                <option value="WA">WA</option>
                <option value="WI">WI</option>
                <option value="WV">WV</option>
                <option value="WY">WY</option>
              </select>
            </Grid>
            <Grid item xs={6}>
              <label>Email</label> <br />
              <input
                type="text"
                value={email}
                style={{ width: '90%' }}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <label>Special Delivery Instructions</label> <br />
              <input
                type="text"
                placeholder="e.g. Leave at the front door"
                value={deliveryInstructions}
                onChange={(e) => setDeliveryInstructions(e.target.value)}
                style={{ width: '80%' }}
              />
            </Grid>
          </Grid>
        </Container>
      );
    }
    return null;
  };

  return (
    <Container>
      <h1>Delivery Information:</h1>

      <Grid
        container
        spacing={2}
        sx={{
          border: 1,
          borderRadius: '5px',
          // borderColor: '#d3d3d3',
          width: '100%',
          paddingBottom: '1em',
          marginTop: '1em',
          margin: 'auto',
        }}
      >
        <Grid item xs={12}>
          <h3 style={{ margin: '0' }}>Default Address</h3>
          <div>
            {firstName.split(' ')[0]} {lastName.split(' ')[1]}
          </div>
          <div>Email: {email}</div>
          &nbsp;
          <div>
            Shipping Address: <br />
            {address} <br />
            {city}, {state} &nbsp;
            {zipcode}
          </div>
        </Grid>
      </Grid>
      <Grid container>
        <Grid
          item
          xs={12}
          align="center"
          style={{ paddingTop: '0.4em', margin: 'auto' }}
        >
          {!newAddressClicked && (
            <Button
              variant="contained"
              onClick={handleNewShipAddress}
              sx={{ backgroundColor: '#264653' }}
            >
              SHIP TO DIFFERENT ADDRESS
            </Button>
          )}
        </Grid>

        <div>{NewShippingAddress()}</div>

        <Grid item style={{ paddingTop: '0.4em', margin: 'auto' }}>
          {newAddressClicked && (
            <Button
              variant="contained"
              onClick={handleNewShipAddress}
              sx={{ backgroundColor: '#264653' }}
            >
              Cancel
            </Button>
          )}
        </Grid>
      </Grid>

      <h1>Order Summary:</h1>
      <Grid
        container
        spacing={2}
        sx={{
          margin: 'auto',
          border: 1,
          borderRadius: '5px',
          width: '100%',
          paddingBottom: '10px',
        }}
      >
        <Grid item xs={12}>
          <h3 style={{ margin: '0' }}>Box Delivery Options:</h3>
          <select
            onChange={handleBoxDeliverySelect}
            value={chosenBoxDeliveryDate}
            style={{ width: '90%' }}
          >
            <option value="initial">-</option>
            {selectBoxDates.map((date, index) => (
              <option key={index} value={date}>
                {date}
              </option>
            ))}
          </select>
          {/* If an individual product is found in the cart, this needs to be rendered */}
          <h3 style={{ margin: '0', paddingTop: '0.2em' }}>
            Product Delivery Options:
          </h3>
          <select
            onChange={handleProductDeliverySelect}
            value={chosenProductDeliveryDate}
            style={{ width: '90%' }}
          >
            <option value="initial">-</option>
            <option value={expectedStandardDate}>
              Standard (Expected Delivery {expectedStandardDate})
            </option>
            <option value={expectedExpressDate}>
              Express (Expected Delivery {expectedExpressDate})
            </option>
          </select>
        </Grid>

        <Grid item align="start" xs={6}>
          <span>Reccuring Cost:</span>
        </Grid>
        <Grid item align="center" xs={6}>
          <span>${reccuringCost}</span>
        </Grid>
        <Grid item align="start" xs={6}>
          <span>Produce Cost:</span>
        </Grid>
        <Grid item align="center" xs={6}>
          <span>${productsCost}</span>
        </Grid>
        <Grid item align="start" xs={6}>
          <span>Shipping:</span>
        </Grid>
        <Grid item align="center" xs={6}>
          <span>${shippingCost}</span>
        </Grid>
        <Grid item align="center" borderBottom="1px solid black" xs={12}></Grid>
        <Grid item align="start" xs={6}>
          <span>Total Cost:</span>
        </Grid>
        <Grid item align="center" xs={6}>
          <span>
            ${(productsCost + reccuringCost + shippingCost).toFixed(2)}
          </span>
        </Grid>

        <Grid item xs={12} md={6}>
          <div>
            Shipping To: <br />
            {address} <br />
            {city}, {state} &nbsp;
            {zipcode} <br />
            Delivery Instructions: {deliveryInstructions}
          </div>
        </Grid>

        <Grid item xs={12} md={6}>
          <label>Allergies/Dietary Restrictions:</label>
          <textarea
            style={{ resize: 'none', width: '90%' }}
            rows="3"
            cols="50"
            value={noteForAllergies}
            onChange={(e) => setNoteForAllergies(e.target.value)}
          ></textarea>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item style={{ paddingTop: '0.4em', margin: 'auto' }}>
          <Button
            onClick={handleOpen}
            variant="contained"
            sx={{ backgroundColor: '#264653' }}
          >
            Complete Checkout
          </Button>
        </Grid>
      </Grid>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '70%',
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Transaction Completed
          </Typography>
          {chosenBoxDeliveryDate && (
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Expected Box Delivery: {chosenBoxDeliveryDate} <br />
            </Typography>
          )}

          {chosenProductDeliveryDate && (
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Expected Product Delivery: {chosenProductDeliveryDate} <br />
            </Typography>
          )}
        </Box>
      </Modal>
    </Container>
  );
};

export default ShippingPage;

// SHIPPING
// SELECT ADDRESS FROM ACCOUNT
// STREET ADDRESS
// ZIP CODE
// CITY/STATE
// NAME
// -- GET FROM DATABASE --

// INPUTS TO CREATE A NEW SHIP ADDRESS
// STREET ADDRESS
// ZIP CODE
// CITY/STATE
// NAME
// -- POST TO DATABASE --

// DELIVERY BOX
// DELIVERY OPTIONS
// SELECT A DAY MON–SAT OPTIONS?
// -- POST TO DATABASE --

// RECURRING
// SELECT WEEKLY/BIWEEKLY/MONTHLY
// -- POST TO DATABASE --

// DELIVERY INDIVIDUAL PRODUCTS
// SHIPPING OPTIONS -- WHAT TO DO WITH THIS DATA?
// STANDARD
// EXPRESS
// NEXT DAY
// SAVE WHAT TO DB?
// PRODUCT
// SHIP OPTION
// SHIP DATE?
// USER NAME
// USER ADDRESS
// ADD EMAIL NOTIFICATION IF WE HAVE TIME
