import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import ToDo from "../pages/ToDo";

export default function() {
    return (
        <>
            <Switch>
                <Route path="/todo">
                    <ToDo />
                </Route>
                <Route path="/" exact>
                    <Home />
                </Route>
            </Switch>
        </>
    );
}