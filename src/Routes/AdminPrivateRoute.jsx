import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router'

export const AdminPrivateRoute = ({children, redirectPath='/account/admin/login', exact, path, push}) => {

    const isAdminAuth = useSelector(state=> state.authReducer.isAdminAuth)
    
    return (
        isAdminAuth ? (
            <Route path={path} exact>
                {children}
            </Route>
        ) : (
            <Redirect to={redirectPath} push />
        )
    )
}
