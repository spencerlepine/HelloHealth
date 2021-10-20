import React from 'react';
import useMainContext from '../../context/MainContext.jsx';
import UserAccountPage from './UserAccountPage/UserAccountPage.jsx';
import FarmAccountPage from './FarmView/FarmAccountPage.jsx';
import ProductsPage from './ProductsPage.jsx';

export default function AccountPage() {
  const { userType } = useMainContext();

  const renderAccountPage = () => {
    if (userType === 'consumer') {
      return <UserAccountPage />;
    }
    if (userType === 'farm') {
      return <FarmAccountPage />;
    }
    return <ProductsPage />;
  };
  return <>{renderAccountPage()}</>;
}
