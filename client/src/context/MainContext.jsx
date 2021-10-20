import React, { useState, useContext } from 'react';
import config from '../config/config';

export const MainContext = React.createContext();

export const MainProvider = ({ children }) => {
  // add state here
  const [page, setPage] = useState('home');
  const [userType, setUserType] = useState('customer');
  const [currentProduct, setCurrentProduct] = useState({});

  return (
    <MainContext.Provider
      value={{
        // copy state to here
        page,
        setPage,
        userType,
        setUserType,
        currentProduct,
        setCurrentProduct,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

const useMainContext = () => useContext(MainContext);

export default useMainContext;
