import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const DefaultLayout = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={matchProps => {

            if (localStorage.getItem('User') === 'true') {
                return (
                    <Component {...matchProps} />
                );
            }
            else {
                return (
                    <Redirect to="/login" />
                );
            }
        }} />
    )
};

export default DefaultLayout;