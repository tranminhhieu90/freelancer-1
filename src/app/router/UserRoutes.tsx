import App from 'App';
import UserContact from 'components/user/contact';
import UserLogin from 'components/user/login';
import UserMyPage from 'components/user/mypage';
import UserNewAccount from 'components/user/newaccount';
import UserRecruiting from 'components/user/recruiting';
import Riyo from 'components/user/riyo';
import UserSearch from 'components/user/search';
import Tokutei from 'components/user/tokutei';
import UserList from 'components/user/list';
import UserPage from 'containters/userPage';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { BaseRoute } from '.';

const UserRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <BaseRoute roles={['user']} isLogin>
              <UserPage />
            </BaseRoute>
          }
        >
          <Route path="mypage" element={<UserMyPage />} />
          <Route path="contact" element={<UserContact />} />
          <Route path="recruiting" element={<UserRecruiting />} />
          <Route path="login" element={<UserLogin />} />
          <Route path="newaccount" element={<UserNewAccount />} />
          <Route path="search" element={<UserSearch />} />
          <Route path="tokutei" element={<Tokutei />} />
          <Route path="riyo" element={<Riyo />} />
          <Route path="list" element={<UserList />} />
        </Route>
      </Routes>
    </>
  );
};

export default UserRoutes;
