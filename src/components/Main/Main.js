import React from "react";
import { Switch, Route } from "react-router-dom";
import { } from "./Main.module.css";
import Home from "./Home";
import CharCreator from "./CharCreator";

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
                    <Route exact path="/adventures">
                        
                    </Route>
                    <Route exact path="/characters">
                        
                    </Route>
                </Switch>
            </main>
        )
    }
}

export default Main;