import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { findJobsReducer } from "./Redux/FindJobs/findJobsReducer";
import { topPayingCompReducer } from "./Redux/TopPayingCompanies/reducer";
import { topPayingJobsReducer } from "./Redux/TopPayingJobs/reducer";
import { companyReducer } from "./Redux/company/reducer";
import { AuthReducer } from "./Redux/Auth/authReducer";
import { companyInfoReducer } from "./Redux/CompanyInfo/reducer";
import { jobsByCategoryReducer } from "./Redux/JobsByCategory/reducer";
import { reviewsReducer } from "./Redux/Reviews/reviewsReducer";
import { ReviewSearchReducer } from "./Redux/ReviewSearch/ReviewSearchReducer";
import { findCompanyReducer } from "./Redux/FindCompanyId/findCompanyReducer";
import { AdminReducer } from './Redux/Admin/adminReducer';
import { jobsByIdReducer } from "./Redux/FindJobById/reducer";

const rootReducer = combineReducers({
  topPayingJobs: topPayingJobsReducer,
  topPayingComp: topPayingCompReducer,
  findReducer: findJobsReducer,
  company: companyReducer,
  authReducer: AuthReducer,
  categoryJobs: jobsByCategoryReducer,
  companyInfo: companyInfoReducer,
  reviewsReducer: reviewsReducer,
  ReviewSearchReducer: ReviewSearchReducer,
  findCompanyReducer:findCompanyReducer,
  adminReducer: AdminReducer,
  jobsByIdReducer: jobsByIdReducer
});

const customMiddleware = (store) => (next) => (action) => {
  return typeof action === "function" ? action(store.dispatch) : next(action);
};

const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  createComposer(applyMiddleware(customMiddleware))
);
