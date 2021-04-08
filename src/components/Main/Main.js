import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import { } from "./Main.module.css";
import Home from "./Home";
import CharCreator from "./CharCreator";
import CharDetails from "./CharDetails";
import Adventures from "./Adventures";
import Register from "./UserAccess/Register"
import Login from "./UserAccess/Login"

const Main = (props) => {
    const [race, setRace] = useState("");

    return (
        <main>
            <Switch>
                <Route exact path="/">
                    <Home
                        userEmail={props.userEmail}
                    />
                </Route>

                <Route exact path="/character-creator">
                    <CharCreator
                        setRace={setRace}
                    />
                </Route>

                <Route exact path="/character-details">
                    <CharDetails
                        race={race}
                    />
                </Route>

                <Route exact path="/adventures">
                    <Adventures />
                </Route>

                <Route exact path="/register">
                    <Register
                        userEmail={props.userEmail}
                        setUserEmail={props.setUserEmail}
                    />
                </Route>

                <Route exact path="/login">
                    <Login
                        userEmail={props.userEmail}
                        setUserEmail={props.setUserEmail}
                    />
                </Route>
            </Switch>
        </main>
    )
}


export default Main;