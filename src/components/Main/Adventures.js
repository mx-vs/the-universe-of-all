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
                        <p>Races divided, nations at War. A hidden darkness corrupts the lands. Join to uncover the secret of healing this Astarian.</p>
                    </section>
                    <ul className={styles.liWrapper}>
                        <h4>Characters</h4>
                        <li>Morina</li>
                        <li>Zorna</li>
                        <li>Libeto</li>
                    </ul>
                    <button className={styles.joinBtn}>Join Adventure</button>
                </section>

                {/* <section className={styles.adventure}>
                    <img src="https://i.pinimg.com/564x/41/75/db/4175db1ce6579360b5ad91e0554ffa29.jpg" alt="" className="" />
                    <h3>Miner Disaster</h3>
                    <p>Location: Irian</p>
                    <p>During regular mining work, your crew discovers a hidden city beneath the dust and dirt. Explore the city and its secrets.</p>
                    <h4>Characters</h4>
                    <ul>
                        <li>Zepho</li>
                        <li>Hosel</li>
                        <li>Lisna</li>
                    </ul>
                </section>

                <section className={styles.adventure}>
                    <img src="https://i.pinimg.com/564x/02/b3/a0/02b3a099545ee5065fbd1fd41d5aaf0b.jpg" alt="" className="" />
                    <h3>Thief Unknown</h3>
                    <p>Location: Borliarde, Astarian</p>
                    <p>During a grand ball hosted by House Ventruavian, a necklace belonging to the Duchess herself is stolen in a grand display of thievery. Uncover the thief.</p>
                    <h4>Characters</h4>
                    <ul>
                        <li>Senga</li>
                        <li>Lida</li>
                        <li>Ronio</li>
                    </ul>
                </section> */}
            </div>
        )
    }
}

export default Adventures;