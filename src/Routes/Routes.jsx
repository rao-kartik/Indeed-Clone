import { Route, Switch } from "react-router"
import { CompanySearch } from "../Components/CompanySearch"

export const Routes=()=>{
    return(
        <Switch>
            <Route path='/'>
                <CompanySearch/>
            </Route>
        </Switch>
    )
}