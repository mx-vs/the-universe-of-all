import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import firebase from "../services/firebase";
import { useHistory } from "react-router-dom";

const Header = () => {
    let history = useHistory();
    const user = firebase.auth().currentUser;

    const logOut = () => {
        firebase.auth().signOut().then(() => {
            alert("See you soon")
            history.push("/");
        });
    }

    const dependantButtons = () => {
        if (user === "null") {
            return (
                <Link
                    to="/user-access"
                    style={{ textDecoration: "none" }}
                    className={styles.navLink}>
                    <li>Register/Login</li>
                </Link>)
        } else {
            return (
                <li
                    style={{ textDecoration: "none" }}
                    className={styles.navLink}
                    onClick={logOut}>
                    Logout
                </li>
            )
        }
    }

    return (
        <header>
            <div className={styles.headerDiv}>
                <Link
                    to="/"
                    style={{ textDecoration: "none" }}>
                    <h1>The Universe of All</h1>
                </Link>
            </div>

            <nav>
                <ul className={styles.navUl}>
                    <Link
                        to="/adventures"
                        style={{ textDecoration: "none" }}
                        className={styles.navLink}>
                        <li>Adventures</li>
                    </Link>
                    <Link
                        to="/characters"
                        style={{ textDecoration: "none" }}
                        className={styles.navLink}>
                        <li>Characters</li>
                    </Link>
                    <Link
                        to="/my-profile"
                        style={{ textDecoration: "none" }}
                        className={styles.navLink}>
                        <li>My Profile</li>
                    </Link>
                    {dependantButtons()}
                </ul>
            </nav>
        </header>
    )
}

export default Header;