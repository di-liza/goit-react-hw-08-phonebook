import React, { useEffect, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { ThemeProvider } from '@emotion/react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Layout, PrivateRoute, PublicRoute } from 'components';
import { fetchrefresh } from 'redux/auth/operation';
import { isRefreshingSelector } from 'redux/auth/selectors';
import { theme } from 'constants';

const Contacts = lazy(() => import('pages/Contacts'));
const Home = lazy(() => import('pages/Home'));
const Login = lazy(() => import('pages/Login'));
const Register = lazy(() => import('pages/Register'));

function App() {
  const isRefreshing = useSelector(isRefreshingSelector);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchrefresh());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      {!isRefreshing && (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="contacts"
              element={
                <PrivateRoute redirectTo="/login" component={<Contacts />} />
              }
            />
            <Route
              path="register"
              element={
                <PublicRoute redirectTo="/contacts" component={<Register />} />
              }
            />
            <Route
              path="login"
              element={
                <PublicRoute redirectTo="/contacts" component={<Login />} />
              }
            />
          </Route>
        </Routes>
      )}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </ThemeProvider>
  );
}

export default App;
