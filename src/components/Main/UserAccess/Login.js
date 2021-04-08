import React, { useState } from "react";
import styles from "./Login.module.css";
import firebase from "../../../services/firebase";
import { useHistory } from "react-router-dom";

const Login = (props) => {
    let history = useHistory();
    const user = firebase.auth().currentUser;

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const signInUserWithEmailAndPasswordHandler = (event, email, password) => {
        event.preventDefault();
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                //props.setLoginStatus(user);
                props.setUserEmail(email);
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
        <div className={styles.logindiv}>
            <h2 className={styles.loginHeading}>Login</h2>
            <form action="" className={styles.loginForm}>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    name="email"
                    onChange={event => onChangeHandler(event)} />
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    name="password"
                    onChange={event => onChangeHandler(event)} />
                <input
                    type="submit"
                    id="loginbtn"
                    name="loginbtn"
                    className={styles.loginButton}
                    onClick={event => {
                        signInUserWithEmailAndPasswordHandler(event, email, password);
                    }} />
                <label htmlFor="loginbtn">Login</label>
            </form>
        </div>
    )
}

export default Login;