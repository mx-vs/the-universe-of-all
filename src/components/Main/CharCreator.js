import React from "react";
import { Route } from "react-router-dom";
import styles from "./CharCreator.module.css";
import RealmSelect from "./RealmSelect";
import RaceSelect from "./RaceSelect";
import CharDetails from "./CharDetails";

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
                <Route exact path="/character-details"> {/* This path doesn't work */}
                    <CharDetails />
                </Route>
            </main>
        )
    }
}

export default CharCreator;