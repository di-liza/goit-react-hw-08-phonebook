import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { isLoggedInSelector } from 'redux/auth/selectors';

function PublicRoute({ component: Component, redirectTo = '/' }) {
  const isLoggedIn = useSelector(isLoggedInSelector);

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
}

export default PublicRoute;
