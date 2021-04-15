import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { findJobsReducer } from "./Redux/FindJobs/findJobsReducer";
import { topPayingCompReducer } from "./Redux/TopPayingCompanies/reducer";
import { topPayingJobsReducer } from "./Redux/TopPayingJobs/reducer";
import { companyReducer } from "./Redux/company/reducer";
import { AuthReducer } from "./Redux/Auth/authReducer";
import { comapanyInfoReducer } from "./Redux/CompanyInfo/reducer";
import { jobsByCategoryReducer } from "./Redux/JobsByCategory/reducer";

const rootReducer = combineReducers({
  topPayingJobs: topPayingJobsReducer,
  topPayingComp: topPayingCompReducer,
  findReducer: findJobsReducer,
  company: companyReducer,
  authReducer: AuthReducer,
  categoryJobs: jobsByCategoryReducer,
  companyInfo: comapanyInfoReducer,
});

const customMiddleware = (store) => (next) => (action) => {
  return typeof action === "function" ? action(store.dispatch) : next(action);
};

const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  createComposer(applyMiddleware(customMiddleware))
);
