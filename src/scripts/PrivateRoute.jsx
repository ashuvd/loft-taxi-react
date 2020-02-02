import React  from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsAuth } from '../store/modules/auth'

const PrivateRoute = ({component: Component, ...rest}) => {
  const isAuth = useSelector(getIsAuth);

  return <Route
    {...rest}
    render = {props =>
      isAuth ? <Component {...props} /> : <Redirect to="/" />
    }
  />
};

export default PrivateRoute;