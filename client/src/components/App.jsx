import React, { useEffect } from 'react';
import axios from 'axios';
import { Switch, Route } from 'react-router-dom';
import Navigation from './Navigation.jsx';
import ProductsPage from './Pages/ProductsPage.jsx';
import BoxPage from './Pages/BoxPage.jsx';
import FarmsPage from './Pages/FarmsPage.jsx';
import CartPage from './Pages/CartPage.jsx';
import AccountPage from './Pages/AccountPage.jsx';
// import useAuth from '../context/AuthContext.jsx';
import useMainContext from '../context/MainContext.jsx';
import * as routeConstants from '../config/pageRoutes';

export default function App() {
  const { page } = useMainContext();
  console.log(page);

  // test endpoint and server connection
  useEffect(() => {
    axios.get('http://localhost:8001/hello')
      .then((result) => {
        console.log(result);
      })
      .catch((err) => console.error(err));
  }, []);

  const renderPage = () => (
    <Switch>
      <Route path={routeConstants.HOME} exact>
        <ProductsPage />
      </Route>
      <Route path={routeConstants.BOX}>
        <BoxPage />
      </Route>
      <Route path={routeConstants.FARMS}>
        <FarmsPage />
      </Route>
      <Route path={routeConstants.CART}>
        <CartPage />
      </Route>
      <Route path={routeConstants.ACCOUNT}>
        <AccountPage />
      </Route>
    </Switch>
  );

  return (
    <>
      <nav><Navigation /></nav>
      <section>{renderPage()}</section>
    </>
  );
}
