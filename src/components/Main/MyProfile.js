import React from "react";
import styles from "./MyProfile.module.css";

const MyProfile = () => {
    return (
        <div className={styles.myProfileDiv}>
            <section className={styles.char}>
                <section className={styles.charImgWrapper}>
                    <img src="https://i.imgur.com/SNKjRNV.jpeg" alt="" className="" />
                </section>
                <section className={styles.charTextWrapper}>
                    <h3 id="name">Name</h3>
                    <p>Race: Placeholder</p>
                    <p>Class: Placeholder</p>
                    <p>Alignment: Placeholder</p>
                </section>
                <ul className={styles.attributesLiWrapper}>
                    <h4>Attributes</h4>
                    <li>Strenght:</li>
                    <li>Dexterity:</li>
                    <li>Constitution:</li>
                    <li>Intelligence:</li>
                    <li>Wisdom:</li>
                    <li>Charisma:</li>
                </ul>
                <section>
                    <button className={styles.btn}>Edit Character</button>
                    <button className={styles.btn}>Delete Character</button>
                    <button className={styles.btn}>Print Character</button>
                </section>
            </section>
            <section className={styles.charDetailsWrapper}>
                <p>Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <p>Features & Traits: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </section>
        </div>
    )
}

export default MyProfile;