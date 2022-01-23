import React from 'react';
import './userPage.scss';
import UserHeader from 'components/user/header/userHeader';
import { Outlet } from 'react-router-dom';
const UserPage = () => {
  return (
    <div className="fixed-background">
      <UserHeader />
      <Outlet />
    </div>
  );
};

export default UserPage;
