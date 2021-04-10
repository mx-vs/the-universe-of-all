import React from "react";
import { useHistory } from 'react-router-dom';
import styles from "./ButtonCreateChar.module.css"

const ButtonCreateChar = () => {
    const history = useHistory();
    const handleClick = () => history.push("/character-creator");

    return (
        <button className={styles.buttonCreateChar} onClick={handleClick}>Create a Character</button>
    )
}

export default ButtonCreateChar;