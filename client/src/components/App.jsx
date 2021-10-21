import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Switch, Route } from 'react-router-dom';

import Navigation from './Navigation.jsx';
import ProductsPage from './Pages/ProductsPage.jsx';
import BoxPage from './Pages/BoxPage.jsx';
import FarmsPage from './Pages/FarmsPage.jsx';
import CartPage from './Pages/CartPage.jsx';
import AccountPage from './Pages/AccountPage.jsx';
import LoginPage from './Pages/LoginPage/LoginPage.jsx';
import ProductViewPage from './Pages/ProductViewPage.jsx';
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

  // test endpoint and server connection
  useEffect(() => {
    axios
      .get('http://localhost:8001/hello')
      .then((result) => {
        console.log(result);
      })
      .catch((err) => console.error(err));
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
    </Switch>
  );

  return (
    <>
      <nav>
        <Navigation />
      </nav>
      <section className="content">
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
    </>
  );
}
