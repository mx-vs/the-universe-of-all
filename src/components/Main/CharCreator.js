import React from "react";
import styles from "./CharCreator.module.css"

const CharCreator = () => {
    return (
        <main className={styles.charCreatorMain}>
            <h2>Character Creator</h2>
            <p>Select a Realm to begin your adventure</p>

            <section className={styles.charCreatorRealms}>
                <section className={styles.charCreatorRealmsOne}>
                    <img src="https://i.imgur.com/Q63VqRV.gif" alt="" className={styles.gif} />
                    <p><strong>Astarian</strong></p>
                </section>
                <section className={styles.charCreatorRealmsTwo}>
                    <img src="https://i.imgur.com/psnUA8V.gif" alt="" className={styles.gif} />
                    <p><strong>Irian</strong></p>
                </section>
            </section>

            <section className={styles.charCreatorRaces}>

                <p>Select a Race</p>

                <section className={styles.charCreatorRacesAstarian}>
                    <div>
                        <h4>Goliath</h4>
                        <p>
                            The goliaths are thought to be direct descendants of the Horned Giants native to the north of
                            Astarian.
                            These humanoids are extremely tall compared to other races ranging from 2 to 3m and have an
                            enormous
                            pair of
                            horns. They are highly skilled in magic and are experts in combat. Occupy the territories of
                            Atesonne, Lidenaath and Modar.
                        </p>
                    </div>

                    <div>
                        <img src="https://i.imgur.com/88IrDbe.jpg" alt="" className={styles.raceImg} />
                    </div>

                    <div>
                        <img src="https://i.imgur.com/VmYg0Zl.jpg" alt="" className={styles.raceImg} />
                    </div>

                    <div>
                        <h4>Vampirian</h4>
                        <p>
                            The Vampirian are goliath survivors of a contact with the tainted cursed mists of the Dark
                            Moors. They are direct descendants of Lazarian, an elder goliath scholar, who studied the mist.
                            Across the lands
                            of Astarian and beyond, they are famous for their thirst for blood and
                            extravagant parties. All vampirian live in the accursed city if Borliarde.
                        </p>
                    </div>
                </section>
            </section>
        </main>
    )
}

export default CharCreator;