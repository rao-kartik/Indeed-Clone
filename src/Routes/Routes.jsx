import { Route, Switch } from "react-router"
import { Company } from "../Components/Company"

export const Routes=()=>{
    return(
        <Switch>
            <Route path='/'>
                <Company/>
            </Route>
        </Switch>
    )
}