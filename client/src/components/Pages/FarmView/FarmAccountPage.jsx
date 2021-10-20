import React, { useState, useContext } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import StarRatings from 'react-star-ratings';
import ReactPlayer from 'react-player';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import IconButton from '@mui/material/IconButton';
import useStyles from './FarmAccountStyles';
import FarmProductCard from '../../Product/FarmProductCard.jsx';
import useMainContext from '../../../context/MainContext.jsx';
import FarmEdit from './FarmEdit.jsx';

const farmInfo = {
  id: 11,
  user_id: 'mdegnen0',
  email: 'mdegnen0@admin.ch',
  name: 'Marcus Degnen',
  description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  profile_image: 'https://images.unsplash.com/photo-1507103011901-e954d6ec0988?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
  farm_rating: 4,
  video_link: 'https://www.youtube.com/watch?v=0q0TXV8PyNY&ab_channel=ExploreFarmLife',
  products: [{
    id: 1,
    product_name: 'Shrimp - 16/20, Iqf, Shell On',
    product_description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.',
    product_cost: 24,
    product_inventory: 9,
    product_image: 'https://images.unsplash.com/photo-1601314002592-b8734bca6604?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1636&q=80',
    product_rating: 2,
    farm_id: 11,
  }, {
    id: 4,
    product_name: 'Lid - Translucent, 3.5 And 6 Oz',
    product_description: 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
    product_cost: 23.81,
    product_inventory: 4,
    product_image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80',
    product_rating: 4,
    farm_id: 11,
  }],
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
  padding: '10px',
};

const initialState = {
  products: farmInfo.products,
  banner: farmInfo.profile_image,
  about: farmInfo.description,
  rating: farmInfo.farm_rating,
  name: farmInfo.name,
  video: farmInfo.video_link,
};

export default function FarmAccountPage() {
  const [edit, setEdit] = useState(false);
  const { userType, setUserType } = useMainContext();
  // const [farmer, setFarmer] = useState(true);
  const classes = useStyles();
  // const [products, setProducts] = useState(farmInfo.products);
  const [info, setInfo] = useState(initialState);
  const {
    banner, products, about, rating, name, video,
  } = info;

  const handleEdit = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Grid>
        <Grid item xs={12} style={container}>
          <img className={classes.banner} style={{
            width: '1200px', height: '200px', objectFit: 'cover', maxWidth: '70vw', filter: 'grayscale(100%)', opacity: '30%',
          }} src={banner} />
          <div style={centered}><Typography variant="h2">{farmInfo.name}</Typography></div>
        </Grid>
        <Grid style={text}>
          <div style={container}>
          <StarRatings
            rating={rating}
            starRatedColor={'#5065A8'}
            numberOfStars={5}
            starDimension={'30px'}
            />
          </div>
        </Grid>
        <Grid style={text}>
          <div>
            <Typography>
                <b>About</b> {name}
            </Typography>
          </div>
          <div style={text}>
            <Typography>
                {about}
            </Typography>
            {userType === 'farmer' ? <FarmEdit info={farmInfo.description} /> : <></>}
          </div>
        </Grid>
      </Grid>
      <Grid display="flex" justifyContent="center">
        <ReactPlayer style={{ objectFit: 'cover' }} url={video}/>
      </Grid>
        <Typography style={text} variant="h4">Browse Products</Typography>
      {products.map((product, index) => (
        <FarmProductCard product={product} key={index} />
      ))}
    </>
  );
}
