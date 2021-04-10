import React from "react";
import styles from "./Adventures.module.css";

class Adventures extends React.Component {
    render() {
        return (
            <div className={styles.advDiv}>
                <section className={styles.adventure}>
                    <section className={styles.imgWrapper}>
                        <img src="https://i.imgur.com/SNKjRNV.jpeg" alt="" className="" />
                    </section>
                    <section className={styles.textWrapper}>
                        <h3>Chaos</h3>
                        <p>Location: Astarian</p>
                        <p>Type: Campaign</p>
                        <p>Races divided, nations at War. A hidden darkness corrupts the lands. Uncover the secret of healing Astarian.</p>
                    </section>
                </section>

                <section className={styles.adventure}>
                    <section className={styles.imgWrapper}>
                        <img src="https://i.pinimg.com/564x/41/75/db/4175db1ce6579360b5ad91e0554ffa29.jpg" alt="" className="" />
                    </section>
                    <section className={styles.textWrapper}>
                        <h3>Miner Disaster</h3>
                        <p>Location: Irian</p>
                        <p>Type: Oneshot</p>
                        <p>During regular mining work, your crew discovers a hidden city beneath the dust and dirt. Explore the city and its secrets.</p>
                    </section>
                </section>

                <section className={styles.adventure}>
                    <section className={styles.imgWrapper}>
                        <img src="https://i.pinimg.com/564x/02/b3/a0/02b3a099545ee5065fbd1fd41d5aaf0b.jpg" alt="" className="" />
                    </section>
                    <section className={styles.textWrapper}>
                        <h3>Thief Unknown</h3>
                        <p>Location: Borliarde, Astarian</p>
                        <p>Type: Oneshot</p>
                        <p>During a grand ball hosted by House Ventruavian, a necklace belonging to the Duchess herself is stolen in a grand display of thievery. Uncover the thief.</p>
                    </section>
                </section>
            </div>
        )
    }
}

export default Adventures;