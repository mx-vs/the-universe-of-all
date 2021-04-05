import React from "react";
import { } from "./Main.module.css";
import Home from "./Home";
import CharCreator from "./CharCreator";

class Main extends React.Component {
    render() {
        return (
            <main>
                <CharCreator />
            </main>
        )
    }
}

export default Main;