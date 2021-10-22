import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Switch, Route } from 'react-router-dom';
import useStyles from './styles';
import Navigation from './Navigation.jsx';
import ProductsPage from './Pages/ProductsPage.jsx';
import BoxPage from './Pages/BoxPage.jsx';
import FarmsPage from './Pages/FarmsPage.jsx';
import CartPage from './Pages/CartPage.jsx';
import AccountPage from './Pages/AccountPage.jsx';
import LoginPage from './Pages/LoginPage/LoginPage.jsx';
import ProductViewPage from './Pages/ProductViewPage.jsx';
import ShippingPage from './Pages/ShippingPage/ShippingPage.jsx';
import Chat from './Chat/Chat.jsx';
import useMainContext from '../context/MainContext.jsx';
import useAuth from '../context/AuthContext.jsx';
import * as routeConstants from '../config/pageRoutes';
import LandingModal from './Pages/LandingModal.jsx';
import Footer from './Footer.jsx';

export default function App() {
  const { page } = useMainContext();
  const { currentUser } = useAuth();
  const [showModal, setShowModal] = useState(true);

  const classes = useStyles();
  // test endpoint and server connection
  useEffect(() => {
    if (window.sessionStorage.getItem('cart') === null) {
      window.sessionStorage.setItem('cart', JSON.stringify({}));
    }
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
        {currentUser ? <AccountPage /> : <LoginPage />}
      </Route>
      <Route path={`${routeConstants.PRODUCT}`}>
        <ProductViewPage />
      </Route>
      <Route path={`${routeConstants.CHECKOUT}`}>
        <ShippingPage />
      </Route>
    </Switch>
  );

  return (
    <div className={classes.global}>
      <nav>
        <Navigation />
      </nav>
      <section className="content" style={{ minHeight: '80vh' }}>
        <LandingModal showModal={showModal} setShowModal={setShowModal} />
        {renderPage()}
      </section>
      {currentUser ? (
        <section>
          <Chat />
        </section>
      ) : (
        ''
      )}
      <Footer />
    </div>
  );
}
