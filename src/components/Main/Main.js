import React from "react";
import { Switch, Route } from "react-router-dom";
import { } from "./Main.module.css";
import Home from "./Home";
import CharCreator from "./CharCreator";
import CharDetails from "./CharDetails";
import Adventures from "./Adventures";
import Register from "./UserAccess/Register"
import Login from "./UserAccess/Login"

const Main = (props) => {
    return (
        <main>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>

                <Route exact path="/character-creator">
                    <CharCreator />
                </Route>

                <Route exact path="/character-details">
                    <CharDetails />
                </Route>

                <Route exact path="/adventures">
                    <Adventures />
                </Route>

                <Route exact path="/register">
                    <Register />
                </Route>

                <Route exact path="/login">
                    <Login
                        //setLoginStatus={props.setLoginStatus}
                        //userSignedIn={props.userSignedIn}
                        userEmail={props.userEmail}
                        setUserEmail={props.setUserEmail}
                    />
                </Route>
            </Switch>
        </main>
    )
}


export default Main;