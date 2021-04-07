import React from "react";
import styles from "./Register.module.css";

const Register = () => {
    return (
        <div className={styles.registerdiv}>
            <h2 className={styles.registerHeading}>Sign Up</h2>
            <form action="" className={styles.registerForm}>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" />
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" />
                <label for="repeatPassword">Confirm Password:</label>
                <input type="password" id="repeatPassword" name="repeatPassword" />
                <input type="submit" id="registerbtn" name="registerbtn" className={styles.regButton} />
                <label for="registerbtn">Register</label>
            </form>
        </div>
    )
}

export default Register;