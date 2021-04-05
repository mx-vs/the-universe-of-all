import React from "react";
import styles from "./CharCreator.module.css";
import RealmSelect from "./RealmSelect";
import RaceSelect from "./RaceSelect";

const CharCreator = () => {
    return (
        <main className={styles.charCreatorMain}>
            <h2>Character Creator</h2>
            <RealmSelect />
            <RaceSelect />
        </main>
    )
}

export default CharCreator;