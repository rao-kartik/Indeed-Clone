import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { findJobsReducer } from "./Redux/FindJobs/findJobsReducer";
import { topPayingCompReducer } from "./Redux/TopPayingCompanies/reducer";
import { topPayingJobsReducer } from "./Redux/TopPayingJobs/reducer";
import { companyReducer } from "./Redux/company/reducer";
import { SignInReducer } from "./Redux/SignIn/signInReducer";

const rootReducer = combineReducers({
    topPayingJobs:topPayingJobsReducer,
    topPayingComp:topPayingCompReducer,
    findReducer : findJobsReducer,
    company: companyReducer,
    signInReducer: SignInReducer
});

const customMiddleware = (store) => (next) => (action) => {
  return typeof action === "function" ? action(store.dispatch) : next(action);
};

const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  createComposer(applyMiddleware(customMiddleware))
);
