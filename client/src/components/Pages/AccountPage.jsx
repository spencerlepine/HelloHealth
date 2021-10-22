import React from 'react';
import useMainContext from '../../context/MainContext.jsx';
import useAuth from '../../context/AuthContext.jsx';
import UserAccountPage from './UserAccountPage/UserAccountPage.jsx';
import FarmAccountPage from './FarmView/FarmAccountPage.jsx';
import FarmAdminPage from './FarmView/FarmAdminPage.jsx';
import ProductsPage from './ProductsPage.jsx';

export default function AccountPage() {
  const { userType, showFarms } = useMainContext();
  const { logoutUser, currentUser } = useAuth();

  const renderAccountPage = () => {
    if (userType === 'customer') {
      return <UserAccountPage />;
    }
    if (userType === 'farmer') {
      return <FarmAdminPage id={currentUser.uid} setSelected={showFarms} />;
    }
    return <ProductsPage />;
  };
  return <>{renderAccountPage()}</>;
}
