import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = (props) => {
    const regex = /.+?(?=@)/g;
    let user = regex.exec(props.userEmail);

    const dependantButtons = () => {
        if (props.userEmail === null) {
            return (
                <Link
                    to="/register"
                    style={{ textDecoration: "none" }}
                    className={styles.navLink}>
                    <li>Register</li>
                </Link>
            )
        } else {
            return (
                <li
                    style={{ textDecoration: "none" }}
                    className={styles.navLink}
                    onClick={props.logOut}>
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
                        to="/my-characters"
                        style={{ textDecoration: "none" }}
                        className={styles.navLink}>
                        <li>{user ? user + "'s" : "My"} Characters</li>
                    </Link>
                    {dependantButtons()}
                </ul>
            </nav>
        </header>
    )
}

export default Header;