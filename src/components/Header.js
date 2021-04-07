import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
    return (
        <header>
            <div className={styles.headerDiv}>
                <Link to="/" style={{textDecoration: "none"}}><h1>The Universe of All</h1></Link>
            </div>

            <nav>
                <ul className={styles.navUl}>
                    <Link to="/adventures" style={{textDecoration: "none"}} className={styles.navLink}><li>Adventures</li></Link>
                    <Link to="/characters" style={{textDecoration: "none"}} className={styles.navLink}><li>Characters</li></Link>
                    <Link to="/my-profile" style={{textDecoration: "none"}} className={styles.navLink}><li>My Profile</li></Link>
                    <Link to="/user-access" style={{textDecoration: "none"}} className={styles.navLink}><li>Register/Login</li></Link>
                </ul>
            </nav>
        </header>
    )
}

export default Header;