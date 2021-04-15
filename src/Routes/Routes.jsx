import React from 'react'
import { Route, Switch } from 'react-router'
import { CompanyReviewsPage } from './CompanyReviewsPage'
import { FindJobsPage } from './FindJobsPage'
import { FindSalariesPage } from './FindSalariesPage'
import { HiringPage } from './HiringPage'
import { Navbar } from './Navbar'
import { PostResumePage } from './PostResumePage'
import { RegisterPage } from './RegisterPage'
import { SignInPage } from './SignInPage'
import {AddReview} from './AddReview'

export const Routes = () => {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route path='/' exact>
                    <FindJobsPage />
                </Route>
                <Route path='/companies' exact>
                    <CompanyReviewsPage />
                </Route>
                <Route path='/companies/review/:compname' exact>
                    <AddReview/>
                </Route>
                <Route path='/career/salaries' exact>
                    <FindSalariesPage />
                </Route>
                <Route path='/p/hh78545' exact>
                    <PostResumePage />
                </Route>
                <Route path='/account/login' exact>
                    <SignInPage />
                </Route>
                <Route path='/hire' exact>
                    <HiringPage />
                </Route>
                <Route path='/account/register' exact>
                    <RegisterPage />
                </Route>
                <Route>
                    Error 404: Page Not Found!
                </Route>
            </Switch>
        </div>
    )
}