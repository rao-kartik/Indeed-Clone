import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router';

export const PrivateRoute = ({children, redirectPath='/account/register', path}) => {

    const isAuth = useSelector(state=> state.authReducer.isAuth);
    
    return (
        isAuth ? (
            <Route path= {path} exact>
                {children}
            </Route>
        ) : (
            <Redirect to={redirectPath} push />
        )
    )
}
