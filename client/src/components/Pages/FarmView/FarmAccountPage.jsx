import React, { useState, useContext, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import StarRatings from 'react-star-ratings';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ReactPlayer from 'react-player';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import IconButton from '@mui/material/IconButton';
import useStyles from './FarmAccountStyles';
import FarmProductCard from '../../Product/FarmProductCard.jsx';
import useMainContext from '../../../context/MainContext.jsx';
import FarmEdit from './FarmEdit.jsx';
import AddProduct from './AddProduct.jsx';
import useAuth from '../../../context/AuthContext.jsx';

const farmInfo = {
  id: 11,
  user_id: 'mdegnen0',
  email: 'mdegnen0@admin.ch',
  name: 'Marcus Degnen',
  description:
    "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  profile_image:
    'https://images.unsplash.com/photo-1507103011901-e954d6ec0988?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
  farm_rating: 4,
  video_link:
    'https://www.youtube.com/watch?v=0q0TXV8PyNY&ab_channel=ExploreFarmLife',
  products: [
    {
      id: 1,
      product_name: 'Shrimp - 16/20, Iqf, Shell On',
      product_description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
      product_cost: 24,
      product_inventory: 9,
      product_image:
        'https://images.unsplash.com/photo-1601314002592-b8734bca6604?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1636&q=80',
      product_rating: 2,
      farm_id: 11,
    },
    {
      id: 4,
      product_name: 'Lid - Translucent, 3.5 And 6 Oz',
      product_description:
        'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
      product_cost: 23.81,
      product_inventory: 4,
      product_image:
        'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80',
      product_rating: 4,
      farm_id: 11,
    },
  ],
};

const container = {
  position: 'relative',
  textAlign: 'center',
  color: 'white',
};

const centered = {
  position: 'absolute',
  fontSize: '5vw',
  color: 'black',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

const text = {
  paddingTop: '20px',
  paddingBottom: '20px',
};

const initialState = {
  products: farmInfo.products,
  banner: farmInfo.profile_image,
  about: farmInfo.description,
  rating: farmInfo.farm_rating,
  name: farmInfo.name,
  video: farmInfo.video_link,
};

export default function FarmAccountPage({ setSelected, id }) {
  const [edit, setEdit] = useState(false);
  const { userType, setUserType } = useMainContext();
  const classes = useStyles();
  const [info, setInfo] = useState({ products: [] });
  const { banner, products, about, rating, name, video } = info;

  const { logoutUser } = useAuth();

  const getFarmDetail = () => {
    axios
      .get(`http://localhost:8001/farmers/one-farm/${id}`)
      .then(({ data }) => setInfo(data))
      .catch((err) => console.log(err));
  };

  const handleEdit = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  // eslint-disable-next-line consistent-return
  const handleLogout = () => {
    if (userType === 'farmer') {
      return (
        <Grid item xs={4} style={container}>
          <Button onClick={() => logoutUser()}>Log Out</Button>
        </Grid>
      );
    }
  };

  useEffect(() => {
    getFarmDetail();
  }, []);

  return (
    <>
      <Box sx={{ x: 2, float: 'right' }}></Box>
      <Grid container>
        <Grid item xs={4} style={container}>
          <Button startIcon={<ArrowBackIcon />} onClick={() => setSelected()}>
            Go Back
          </Button>
        </Grid>
        <Grid item xs={4} style={container}></Grid>
        {handleLogout()}
        <Grid item xs={12} style={container}>
          <img
            className={classes.banner}
            style={{
              width: '1200px',
              height: '200px',
              objectFit: 'cover',
              maxWidth: '70vw',
              filter: 'grayscale(100%)',
              opacity: '30%',
            }}
            src={info.profile_image}
          />
          <div style={container}>
            <StarRatings
              rating={info.farm_rating}
              starRatedColor={'#5065A8'}
              numberOfStars={5}
              starDimension={'30px'}
            />
          </div>
          <div style={centered}>
            <Typography variant="h2">{info.name}</Typography>
          </div>
        </Grid>
        <Grid item xs={2} style={container}></Grid>
        <Grid item style={text}></Grid>
        <Grid style={text}>
          <div>
            <Typography>
              <b>About</b> {info.name}
            </Typography>
          </div>
          <div style={text}>
            <Typography>{info.description}</Typography>
            {userType === 'farmer' ? <FarmEdit info={info} /> : <></>}
          </div>
        </Grid>
      </Grid>
      <Grid display="flex" justifyContent="center">
        <ReactPlayer style={{ objectFit: 'cover' }} url={info.video_link} />
      </Grid>
      <Typography style={text} variant="h4">
        Browse Products
      </Typography>
      {info.products.map((product, index) => (
        <FarmProductCard product={product} key={index} />
      ))}
      {userType === 'farmer' && (
        <Box sx={{ m: 3, float: 'right' }}>
          <Button variant="contained" onClick={() => logoutUser()}>
            Log Out
          </Button>
        </Box>
      )}
      {userType === 'farmer' ? <AddProduct /> : <></>}
    </>
  );
}
