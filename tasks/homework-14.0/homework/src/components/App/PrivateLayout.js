import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const DefaultLayout = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={matchProps => {
            if (localStorage.getItem('UserToken') != 'false') {
                const apiUrl = "https://api-fore-homework-13.herokuapp.com";
                const data = {
                    token: localStorage.getItem('UserToken')
                }
                fetch(apiUrl+'/api/api_keys/token', {
                    method: 'post',
                    mode: 'cors',
                    headers: {
                        'Access-Control-Allow-Origin':'*',
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                    .then(response => response.json())
                    .then(response => {
                        if (response.object === false) {
                            localStorage.setItem('UserToken', 'false');
                            window.location.reload();
                        }
                    })
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