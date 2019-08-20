import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function AuthRoute(props) {
  const {isAuth, component: Component, ...routeProps} = props;
  if (!isAuth) {
    return(<Redirect to="/sign_in"/>)
  } else {
    return (<Route exact {...routeProps} component={Component}/>)

  }
}