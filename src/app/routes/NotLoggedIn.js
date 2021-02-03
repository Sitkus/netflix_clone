import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

function PrivateRoute({ children, ...properties }) {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return <Route {...properties}>{isLoggedIn ? <Redirect to="/" /> : children}</Route>;
}

export default PrivateRoute;