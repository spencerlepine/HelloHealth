import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
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
import FarmAdminProductCard from '../../Product/FarmAdminProductCard.jsx';
import useMainContext from '../../../context/MainContext.jsx';
import FarmEdit from './FarmEdit.jsx';
import AddProduct from './AddProduct.jsx';
import useAuth from '../../../context/AuthContext.jsx';
import config from '../../../config/config';

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

export default function FarmAdminPage({ setSelected, id }) {
  const [edit, setEdit] = useState(false);
  const { userType, setUserType } = useMainContext();
  const classes = useStyles();
  const [info, setInfo] = useState({ products: [] });
  const { banner, products, about, rating, name, video } = info;

  const { logoutUser, currentUser } = useAuth();

  const getFarmDetail = () => {
    axios
      .get(`${config.SERVER_URL}/farmers/one-farm/${id}`)
      .then(({ data }) => setInfo(data))
      .catch((err) => console.log(err));
  };

  const handleEdit = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  // const handleLogoutClick = () => {
  //   const history = useHistory();
  //   logoutUser();
  //   history.push('/');
  // };

  // eslint-disable-next-line consistent-return
  const handleLogout = () => {
    if (userType === 'farmer' && currentUser) {
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
            {userType === 'farmer' && currentUser ? (
              <FarmEdit info={info} />
            ) : (
              <></>
            )}
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
        <FarmAdminProductCard product={product} key={index} />
      ))}
      {userType === 'farmer' && currentUser && (
        <Box sx={{ m: 3, float: 'right' }}>
          <Button
            variant="contained"
            onClick={() => {
              logoutUser();
            }}
          >
            Log Out
          </Button>
        </Box>
      )}
      {userType === 'farmer' && currentUser ? <AddProduct /> : <></>}
    </>
  );
}
