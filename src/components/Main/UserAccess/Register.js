import React, { useState } from "react";
import styles from "./Register.module.css";
import firebase from "../../../services/firebase";
import { useHistory, Link } from "react-router-dom";

const Register = (props) => {
    let history = useHistory();

    const [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [repeatPassword, setRepeatPassword] = useState("");

    const onChangeHandler = event => {
        const { name, value } = event.currentTarget;
        if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value);
        } else if (name === "repeatPassword") {
            setRepeatPassword(value);
        }
    };

    const createUserWithEmailAndPasswordHandler = (event, email, password) => {
        event.preventDefault();
        if (repeatPassword !== password) {
            alert("Passwords do not match!")
            setPassword(null);
            setRepeatPassword (null);
        } else {
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    props.setUserEmail(email);
                    history.push("/");
                })
                .catch(function (error) {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    if (errorCode) {
                        alert(errorMessage);
                    }
                })
        }
    };

    return (
        <div className={styles.registerdiv}>
            <h2 className={styles.registerText}>Sign Up</h2>
            <form action="" className={styles.registerForm}>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    onChange={event => onChangeHandler(event)} 
                    required />
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    onChange={event => onChangeHandler(event)} 
                    required />
                <label htmlFor="password">Confirm Password:</label>
                <input
                    type="password"
                    id="repeatPassword"
                    name="repeatPassword"
                    onChange={event => onChangeHandler(event)} 
                    required />
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

            <h3 className={styles.registerText}>If you already have an account<Link to="/login"><button className={styles.linkToLoginBtn}> Sign In</button></Link></h3>

        </div>
    )
}

export default Register;