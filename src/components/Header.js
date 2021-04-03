import React from "react";

import styles from "./Header.module.css"

const Header = () => {
    return (
        <header>
            <div className={styles.headerDiv}>
                <h1>The Universe of All</h1>
            </div>

            <nav>
                <ul className={styles.navUl}>
                    <li className={styles.navLink}>Adventures</li>
                    <li className={styles.navLink}>Characters</li>
                    <li className={styles.navLink}>My Profile</li>
                    <li className={styles.navLink} hidden>Login</li>
                    <li className={styles.navLink} hidden>Register</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;