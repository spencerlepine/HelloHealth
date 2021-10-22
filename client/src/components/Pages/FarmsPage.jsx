import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import axios from 'axios';
import FarmAccountPage from './FarmView/FarmAccountPage.jsx';
import FarmCard from './FarmView/FarmCard.jsx';
import useMainContext from '../../context/MainContext.jsx';
import config from '../../config/config';

export default function FarmsPage() {
  const [farms, setFarms] = useState([]);
  const [renderedItems, setRenderedItems] = useState([]);
  const [allFarms, setAllFarms] = useState(true);
  const [page, setPage] = useState(1);
  // const [selected, setSelected] = useState(null);
  const { selected, setSelected, showFarms } = useMainContext();

  const cardClick = (id) => {
    setAllFarms(false);
    setSelected(id);
  };

  // const showFarms = () => {
  //   setSelected(null);
  // };

  const getFarms = (pageSelected) => {
    axios
      .get(`${config.SERVER_URL}/farmers/farms`)
      .then(({ data }) => {
        setFarms(data);
        const items = pageSelected * 6;
        setRenderedItems(data.slice(items - 6, items));
      })
      .then(() => {})
      .catch((err) => {
        console.error(err);
      });
  };

  const handlePageChange = (e) => {
    e.preventDefault();
    const pageSelected = Number(e.target.innerText);
    if (e.target.innerText) {
      setPage(pageSelected);
    } else {
      const arrowNav = e.target.getAttribute('data-testid');
      if (arrowNav === 'NavigateNextIcon') {
        setPage((prevPage) => prevPage + 1);
      }
      if (arrowNav === 'NavigateBeforeIcon') {
        setPage((prevPage) => prevPage - 1);
      }
    }
  };

  useEffect(() => {
    getFarms(page);
  }, [page]);

  const renderCondition = () => {
    if (!selected) {
      return (
        <Container>
          <Grid
            container
            align="center"
            alignItems="center"
            justifyContent="center"
          >
            <Typography
              variant="h3"
              style={{ marginTop: '25px', marginBottom: '25px' }}
            >
              HelloHealth Farmers
            </Typography>
          </Grid>
          <Grid
            container
            align="center"
            alignItems="center"
            justifyContent="center"
          >
            {renderedItems.map((farm) => (
              <FarmCard cardClick={cardClick} key={farm.id} farm={farm} />
            ))}
          </Grid>
          <Grid
            container
            align="center"
            alignItems="center"
            justifyContent="center"
          >
            <Stack spacing={2} align="center">
              <Pagination
                count={Math.floor(farms.length / 6) + 1}
                onChange={handlePageChange}
                sx={{
                  '[aria-current]': {
                    backgroundColor: '#E76F51 !important',
                    color: 'white',
                  },
                }}
              />
            </Stack>
          </Grid>
        </Container>
      );
    }
    return <FarmAccountPage setSelected={showFarms} id={selected} />;
  };

  return <>{renderCondition()}</>;
}

// {farms.map((farm) => (
//   <Grid item xs={4}>
//     <Typography variant="h4">Farm Title Here</Typography>
//       <img style={{ objectFit: 'cover', width: '20vw', height: '20vh' }} src={image.here}></img>
//     <Typography>{}</Typography>
//   </Grid>
//   ))}
