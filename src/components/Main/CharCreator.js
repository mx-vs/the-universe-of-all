import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import styles from "./CharCreator.module.css";
import RealmSelect from "./RealmSelect";
import RaceSelect from "./RaceSelect";

class CharCreator extends React.Component {
    state = {
        realmSelected: "none"
    }

    handleRealmSelect = realm => {
        this.setState({
            realmSelected: realm
        });
    }

    render() {
        return (
            <main className={styles.charCreatorMain}>

                <h2>Character Creator</h2>
                <RealmSelect
                    handleRealmSelectProps={this.handleRealmSelect}
                />
                <RaceSelect
                    realmSelected={this.state.realmSelected}
                />
            </main>
        )
    }
}

export default CharCreator;