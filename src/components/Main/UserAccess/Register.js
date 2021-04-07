import React, { useState } from "react";
import styles from "./Register.module.css";
import firebase from "../../../services/firebase";
import { useHistory } from "react-router-dom";

const Register = () => {
    let history = useHistory();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const createUserWithEmailAndPasswordHandler = (event, email, password) => {
        event.preventDefault();
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                history.push("/");
            });
    };

    const onChangeHandler = event => {
        const { name, value } = event.currentTarget;
        if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value);
        }
    };

    return (
        <div className={styles.registerdiv}>
            <h2 className={styles.registerHeading}>Sign Up</h2>
            <form action="" className={styles.registerForm}>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    onChange={event => onChangeHandler(event)} />
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    onChange={event => onChangeHandler(event)} />
                <input
                    type="submit"
                    id="registerbtn"
                    name="registerbtn"
                    className={styles.regButton}
                    onClick={event => {
                        createUserWithEmailAndPasswordHandler(event, email, password);
                    }} />
                <label htmlFor="registerbtn">Register</label>
            </form>
        </div>
    )
}

export default Register;