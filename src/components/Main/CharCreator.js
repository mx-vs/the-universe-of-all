import React from "react";
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
                    race={this.props.race}
                    setRace={this.props.setRace}
                />
            </main>
        )
    }
}

export default CharCreator;