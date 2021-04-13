import React from 'react'
import { Route, Switch } from 'react-router'
import { CompanyReviewsPage } from './CompanyReviewsPage'
import { FindJobsPage } from './FindJobsPage'
import { FindSalariesPage } from './FindSalariesPage'
import { HiringPage } from './HiringPage'
import { Navbar } from './Navbar'
import { PostResumePage } from './PostResumePage'
import { SignInPage } from './SignInPage'

export const Routes = () => {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route path='/' exact>
                    <FindJobsPage />
                </Route>
                <Route path='/companies'>
                    <CompanyReviewsPage />
                </Route>
                <Route path='/career/salaries'>
                    <FindSalariesPage />
                </Route>
                <Route path='/p/hh78545'>
                    <PostResumePage />
                </Route>
                <Route path='/account/login'>
                    <SignInPage />
                </Route>
                <Route path='/hire'>
                    <HiringPage />
                </Route>
            </Switch>
        </div>
    )
}
