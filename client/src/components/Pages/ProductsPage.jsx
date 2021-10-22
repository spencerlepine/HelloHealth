import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import producsListDummyData from './productsHelpers/productsSampleData.json';
import ProductCardView from './productsHelpers/ProductCardView.jsx';

export default function ProductsPage() {
  const style = {
    ul: { justifyContent: 'center' },
    svg: { pointerEvents: 'none' },
  };
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);
  const [currentProductsList, setCurrentProductsList] = useState([]);

  const numProds = 18;
  useEffect(() => {
    axios
      .get('http://localhost:8001/product/total')
      .then((results) => {
        setTotalProducts(Number(results.data[0].count));
        setPageCount(Math.floor(Number(results.data[0].count) / numProds) + 1);
      })
      .catch((err) => {
        console.error(err);
      });
    axios
      .get(`http://localhost:8001/product/list?start=1&end=${numProds}`)
      .then((results) => {
        setCurrentProductsList(results.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  let productStart = 1;
  let productEnd = numProds;
  const handlePageChange = (e) => {
    e.preventDefault();
    const pageSelected = Number(e.target.innerText);
    if (pageSelected) {
      setPage(pageSelected);
      productStart = (pageSelected - 1) * numProds + 1;
      productEnd = productStart + numProds - 1;
    } else {
      const arrowNav = e.target
        .querySelector('svg')
        .getAttribute('data-testid');
      if (arrowNav === 'LastPageIcon') {
        productStart = (pageCount - 1) * numProds + 1;
        productEnd = totalProducts;
        setPage(pageCount);
      }
      if (arrowNav === 'FirstPageIcon') {
        productStart = 1;
        productEnd = numProds;
        setPage(1);
      }
      if (arrowNav === 'NavigateNextIcon') {
        const nextPage = page + 1;
        setPage(nextPage);
        productStart = nextPage > pageCount
          ? (pageCount - 1) * numProds + 1
          : (nextPage - 1) * numProds + 1;
        productEnd = nextPage > pageCount ? totalProducts : productStart + numProds - 1;
      }
      if (arrowNav === 'NavigateBeforeIcon') {
        const prevPage = page - 1;
        setPage(prevPage);
        productStart = prevPage > 0 ? (prevPage - 1) * numProds + 1 : 1;
        productEnd = productStart + numProds - 1;
      }
    }
    axios
      .get(
        `http://localhost:8001/product/list?start=${productStart}&end=${productEnd}`,
      )
      .then((results) => {
        console.log(results.data);
        setCurrentProductsList(results.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const renderProductList = (productList) => productList.map((product) => (
      <ProductCardView key={product.id} product={product} />
  ));
  return (
    <Container maxWidth="xl">
      <h1>{`Products Page > ${page}`}</h1>
      <Grid container item justifyContent="flex-start" spacing={2}>
        {renderProductList(currentProductsList)}
      </Grid>
      <Box my={5} sx={style}>
        <Pagination
          count={pageCount}
          variant="outlined"
          color="primary"
          size={isSmallScreen ? 'small' : 'large'}
          showFirstButton
          showLastButton
          onChange={(e) => handlePageChange(e)}
        />
      </Box>
    </Container>
  );
}
