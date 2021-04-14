import { Route, Switch } from "react-router"
import { Company } from "../Components/CompanyReviews/Company"

export const Routes=()=>{
    return(
        <Switch>
            <Route exact path='/'>
                <Company/>
                {/* <h1>Ajmal</h1> */}

            </Route>
            <Route path='/companies/:id'>

            </Route>
        </Switch>
    )
}