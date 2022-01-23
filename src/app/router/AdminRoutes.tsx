import AdminPage from 'containters/adminPage';
import Users from 'pages/admin/user/List';
import Blank from 'pages/Blank';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { BaseRoute } from '.';
const AdminRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <BaseRoute roles={['admin']} isLogin>
            <AdminPage />
          </BaseRoute>
        }
      >
        <Route index element={<Blank />} />
        <Route path="products" element={<Blank />} />
        <Route path="users" element={<Users />} />
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
