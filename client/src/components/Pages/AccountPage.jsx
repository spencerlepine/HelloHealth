import React from 'react';
import useMainContext from '../../context/MainContext';
import UserAccountPage from './UserAccountPage';
import FarmAccountPage from './FarmAccountPage';
import ProductsPage from './ProductsPage';

export default function AccountPage() {
  const { userType } = useMainContext();

  const renderAccountPage = () => {
    if (userType === 'consumer') {
      return <UserAccountPage />;
    } if (userType === 'farm') {
      return <FarmAccountPage />;
    }
    return <ProductsPage />;
  };
  return (
    <>
      {renderAccountPage()}
    </>
  );
}
