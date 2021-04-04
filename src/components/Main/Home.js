import React from "react";
import styles from "./Home.module.css";
import ButtonCreateChar from "./ButtonCreateChar";

const Home = () => {
    return (
        <div className={styles.homeDiv}>
            <ButtonCreateChar />

            <p>
                A cosmic entity beyond mortal imagination, refered simply by the wise as All, is said to be the creator of
                everything there was, is and will be. In the universe there are 2 realms. Each is home to a unique magical
                energy that defines its features, structure and inhabitants.
            </p>

            <ul className={styles.homeRealmsDescr}>
                <li>
                    <strong>Astarian, Realm of Darkness</strong>
                    <br />Under the glow of its thousand stars, Astarian is home to many dark dwellers.
                    Home realm of the Giants. Astarian's denizens are uniquely adapted for survival.
                    It is home to the powerful arcane energy known as Weave.
                </li>

                <li>
                    <strong>Irian, Realm of Light</strong>
                    <br />In contrast to Astarian, Irian is a realm of unending light,
                    illuminated by a single bright sentient being, Soneon, the Solar Vortex.
                    Its lands are as harsh and unforgiving as its native Dragons.
                    Denizens wield the mystical magic known as Force.
                </li>
            </ul>

            <div className={styles.mapDiv}>
                <img src="https://i.imgur.com/APW3sDx.png" alt="" className={styles.map} />
            </div>

            <p>Map of the Realms</p>
        </div>
    )
}

export default Home;