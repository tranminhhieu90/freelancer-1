import Forbidden from 'containters/fobiden';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BaseRoute } from '.';
import AdminRoutes from './AdminRoutes';
import UserRoutes from './UserRoutes';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<UserRoutes />} />
        <Route path="/admin/*" element={<AdminRoutes />} />
        <Route path="/forbidden" element={<Forbidden />} />
      </Routes>
    </BrowserRouter>
  );
};
