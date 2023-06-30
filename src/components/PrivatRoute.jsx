import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isLoggedInSelector } from 'redux/auth/selectors';

/**
 * - If the route is restricted and the user is logged in, render a <Navigate> to redirectTo
 * - Otherwise render the component
 */
const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(isLoggedInSelector);

  return !isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

export default PrivateRoute;
