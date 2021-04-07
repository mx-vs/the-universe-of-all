import React from "react";
import { Switch, Route } from "react-router-dom";
import { } from "./Main.module.css";
import Home from "./Home";
import CharCreator from "./CharCreator";
import CharDetails from "./CharDetails";
import Adventures from "./Adventures";
import UserAccess from "./UserAccess/UserAccess"

class Main extends React.Component {
    render() {
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

                    <Route exact path="/user-access">
                        <UserAccess />
                    </Route>
                </Switch>
            </main>
        )
    }
}

export default Main;