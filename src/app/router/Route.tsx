import React, { ReactElement } from 'react';
import { Navigate } from 'react-router';

type Props = {
  children: ReactElement;
  roles?: string[];
  isLogin?: boolean;
};
export const BaseRoute = (props: Props) => {
  const { children, roles, isLogin } = props;
  let isAuthenticated = true;
  const user = {
    role: 'admin',
  };
  // if (!isAuthenticated && isLogin) {
  //   return <Navigate to="/login" />;
  // } else {
  //   if (!roles?.includes(user.role)) {
  //     return <Navigate to="/forbidden" />;
  //   }
  // }
  return children;
};
