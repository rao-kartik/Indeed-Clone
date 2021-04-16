import React from 'react'
import { Route, Switch } from 'react-router'
import { CompanyInfo } from '../Components/Find Salaries/CompanyInfo'
import { CompanyReviewsPage } from './CompanyReviewsPage'
import { FindJobsPage } from './FindJobsPage'
import { FindSalariesPage } from './FindSalariesPage'
import { HiringPage } from './HiringPage'
import { Navbar } from './Navbar'
import { PostResumePage } from './PostResumePage'
import { RegisterPage } from './RegisterPage'
import { SignInPage } from './SignInPage'
import {AddReview} from './AddReview'
import { AddSurvey } from './AddSurvey'
import { CompanySearch } from './CompanySearch'
import { AdminPage } from './AdminPage'
import { AdminLogin } from '../Components/Admin/AdminLogin'
import { Admin } from '../Components/Admin/Admin'
import { AdminJobs } from '../Components/Admin/AdminJobs'
import { AdminRecruiters } from '../Components/Admin/AdminRecruiters'
import { AdminPostJob } from '../Components/Admin/AdminPostJob'
import { AdminPostRecruiter } from '../Components/Admin/AdminPostRecruiter'
import { AdminPrivateRoute } from './AdminPrivateRoute'
import { useSelector } from 'react-redux'
import { AdminNavbar } from '../Components/Admin/AdminNavbar'

export const Routes = () => {

    const isAdminAuth = useSelector(state=>state.authReducer.isAdminAuth);
    
    return (
        <div>
            {
                isAdminAuth ? <AdminNavbar /> : <Navbar />
            }
            <Switch>
                <Route path='/' exact>
                    <FindJobsPage />
                </Route>

                <Route path='/companies' exact>
                    <CompanyReviewsPage />
                </Route>

                <Route path='/companies/review/:id' exact>
                    <AddReview/>
                </Route>

                <Route path='/companies/review/survey/:id' exact>
                    <AddSurvey/>
                </Route>

                <Route path='/companies/search/:id' exact>
                    <CompanySearch/>
                </Route>

                <Route path='/career/salaries' exact>
                    <FindSalariesPage />
                </Route>

                <Route path='/career/salaries/:id' >
                    <CompanyInfo />
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

                <Route path='/account/admin/login' exact>
                    <AdminLogin />
                </Route>

                <AdminPrivateRoute path='/account/admin' exact>
                    <Admin />
                </AdminPrivateRoute>

                <AdminPrivateRoute path='/account/admin/recruiter'>
                    <AdminRecruiters />
                </AdminPrivateRoute>

                <AdminPrivateRoute path='/account/admin/jobs'>
                    <AdminJobs />
                </AdminPrivateRoute>

                <AdminPrivateRoute path='/account/admin/addJobs'>
                    <AdminPostJob />
                </AdminPrivateRoute>

                <AdminPrivateRoute path='/account/admin/addrecruiter' >
                    <AdminPostRecruiter />
                </AdminPrivateRoute>

                <Route>
                    Error 404: Page Not Found!
                </Route>
            </Switch>
        </div>
    )
}