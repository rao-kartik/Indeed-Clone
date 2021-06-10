import React from 'react';
import { Route, Switch } from 'react-router';
import { CompanyInfo } from '../Components/Find Salaries/CompanyInfo';
import { CompanyReviewsPage } from './CompanyReviewsPage';
import { FindJobsPage } from './FindJobsPage';
import { HiringPage } from './HiringPage';
import { Navbar } from './Navbar';
import { PostResumePage } from './PostResumePage';
import { RegisterPage } from './RegisterPage';
import { SignInPage } from './SignInPage';
import { AddReview } from './AddReview';
import { AddSurvey } from './AddSurvey';
import { CompanySearch } from './CompanySearch';
import { AdminLogin } from '../Components/Admin/AdminLogin';
import { AdminJobs } from '../Components/Admin/AdminJobs';
import { AdminRecruiters } from '../Components/Admin/AdminRecruiters';
import { AdminPostJob } from '../Components/Admin/AdminPostJob';
import { AdminPostRecruiter } from '../Components/Admin/AdminPostRecruiter';
import { AdminPrivateRoute } from './AdminPrivateRoute';
import { useSelector } from 'react-redux';
import { AdminNavbar } from '../Components/Admin/AdminNavbar';
import { ApplyJobForm } from './ApplyJobForm';
import { PrivateRoute } from './PrivateRoute';
import { AdminReviewPage } from '../Components/Admin/AdminReviewPage';
import { AppliedJobs } from '../Components/Applied Jobs/AppliedJobs';
import { MyReviews } from '../Components/My Reviews/MyReviews';
import { EmailPreferences } from '../Components/Email Preferences/EmailPreferences';
import { PageNotFound } from './PageNotFound';
import { Salaries } from '../Components/Find Salaries/Salaries';

export const Routes = () => {

    const isAdminAuth = useSelector(state => state.authReducer.isAdminAuth);

    return (
        <div>
            {
                isAdminAuth ? <AdminNavbar /> : <Navbar />
            }
            <Switch>
                <Route path='/' exact>
                    <FindJobsPage />
                </Route>
                <Route path='/form/questions/:id' exact>
                    <ApplyJobForm />
                </Route>
                <Route path='/companies' exact>
                    <CompanyReviewsPage />
                </Route>

                <Route path='/companies/review/:id' exact>
                    <AddReview />
                </Route>

                <Route path='/companies/review/survey/:id' exact>
                    <AddSurvey />
                </Route>

                <Route path='/companies/search/:id' exact>
                    <CompanySearch />
                </Route>

                <Route path='/career/salaries' exact>
                    <Salaries />
                </Route>

                <Route path='/career/salaries/:id' >
                    <CompanyInfo />
                </Route>

                <PrivateRoute path='/p/hh78545' exact>
                    <PostResumePage />
                </PrivateRoute>

                <PrivateRoute path='/preferences' exact>
                    <EmailPreferences />
                </PrivateRoute>

                <Route path='/account/login' exact>
                    <SignInPage />
                </Route>

                <Route path='/hire' exact>
                    <HiringPage />
                </Route>

                <Route path='/account/register' exact>
                    <RegisterPage />
                </Route>

                <Route path='/appliedjobs'>
                    <AppliedJobs />
                </Route>

                <Route path='/myreviews'>
                    <MyReviews />
                </Route>

                <Route path='/account/admin/login' exact>
                    <AdminLogin />
                </Route>

                <AdminPrivateRoute path='/account/admin/recruiter'>
                    <AdminRecruiters />
                </AdminPrivateRoute>

                <AdminPrivateRoute path='/account/admin/jobs'>
                    <AdminJobs />
                </AdminPrivateRoute>

                <AdminPrivateRoute path='/account/admin/addJobs'>
                    <AdminPostJob />
                </AdminPrivateRoute>

                <AdminPrivateRoute path='/account/admin/addrecruiter'>
                    <AdminPostRecruiter />
                </AdminPrivateRoute>

                <AdminPrivateRoute path='/account/admin/pageReviews'>
                    <AdminReviewPage />
                </AdminPrivateRoute>

                <Route>
                    <PageNotFound />
                </Route>
            </Switch>
        </div>
    )
}