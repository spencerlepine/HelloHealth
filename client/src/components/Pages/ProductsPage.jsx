import React, { useState, useContext } from 'react';
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
  const style = { ul: { justifyContent: 'center' }, svg: { pointerEvents: 'none' } };
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  const numProds = 18;
  const pageCount = Math.floor(producsListDummyData.length / numProds);
  const [currentProductsList, setCurrentProductsList] = useState(
    producsListDummyData.slice(0, numProds),
  );
  const [page, setPage] = useState(1);

  let productStart = 0; let productEnd = numProds;
  const handlePageChange = (e) => {
    e.preventDefault();
    const pageSelected = Number(e.target.innerText);
    if (e.target.innerText) {
      setPage(pageSelected);
      productStart = (pageSelected - 1) * numProds;
      productEnd = productStart + numProds;
      setCurrentProductsList(producsListDummyData.slice(productStart, productEnd));
    } else {
      const arrowNav = e.target.querySelector('svg').getAttribute('data-testid');
      if (arrowNav === 'LastPageIcon') {
        setCurrentProductsList(producsListDummyData.slice(-numProds));
        setPage(pageCount);
      }
      if (arrowNav === 'FirstPageIcon') {
        setCurrentProductsList(producsListDummyData.slice(0, numProds));
        setPage(1);
      }
      if (arrowNav === 'NavigateNextIcon') {
        const nextPage = page + 1;
        setPage(nextPage);
        productStart = nextPage > pageCount ? pageCount : (nextPage - 1) * numProds;
        productEnd = productStart + numProds;
        setCurrentProductsList(producsListDummyData.slice(productStart, productEnd));
      }
      if (arrowNav === 'NavigateBeforeIcon') {
        const prevPage = page - 1;
        setPage(prevPage);
        productStart = prevPage > 0 ? (prevPage - 1) * numProds : 0;
        productEnd = productStart + numProds;
        setCurrentProductsList(producsListDummyData.slice(productStart, productEnd));
      }
    }
  };

  const renderProductList = (productList) => (
    productList.map((product) => (
      <ProductCardView key={product.id} product={product} />
    )));
  return (
    <Container maxWidth="xl">
      <h1>{`Products Page > ${page}`}</h1>
      <Grid container item justifyContent="flex-start" spacing={2}>
        {renderProductList(currentProductsList)}
      </Grid>
      <Box my={5} sx={style}>
        <Pagination
          count={pageCount}
          variant="outlined" color="primary" size={isSmallScreen ? 'small' : 'large'}
          showFirstButton showLastButton
          onChange={(e) => handlePageChange(e)}
        />
      </Box>
    </Container>
  );
}
