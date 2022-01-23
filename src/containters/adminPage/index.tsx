import Sidebar from 'components/admin/sidebar/Sidebar';
import TopNav from 'components/admin/topnav/TopNav';
import React from 'react';
import { Outlet } from 'react-router-dom';
import './admin-page.scss';
const AdminPage = () => {
  return (
    <>
      <Sidebar />
      <div className="main">
        <div className="main__content">
          <TopNav />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AdminPage;
