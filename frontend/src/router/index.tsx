import {Switch,Route, useHistory} from "react-router-dom"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Register from "../pages/Register"
import Transactions from "../pages/Transactions"

const RoutesPage = () => {
    const url = useHistory()
    if(localStorage.getItem("token")){
        url.push("/transactions")
    }
    return(
        <Switch>
            <Route path={"/"} exact>
                <Home/>
            </Route>
            <Route path="/login" exact>
                <Login/>
            </Route>
            <Route path="/register" exact>
                <Register/>
            </Route>
            <Route path="/transactions" exact>
                <Transactions/>
            </Route>
        </Switch>
    )
}

export default RoutesPage