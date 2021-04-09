import React from "react";
import { Link } from "react-router-dom";
import styles from "./RaceSelect.module.css";

class RaceSelect extends React.Component {

    const 
    render() {
        let displayNone = {};
        let displayAstarianRaces = {};
        let displayIrianRaces = {};

        if (this.props.realmSelected === "none") {
            displayAstarianRaces.display = "none";
            displayIrianRaces.display = "none";
        } else if (this.props.realmSelected === "astarian") {
            displayIrianRaces.display = "none";
        } else if (this.props.realmSelected === "irian") {
            displayAstarianRaces.display = "none";
        }

        return (
            <section className={styles.charCreatorRaces}>

                <p>Select a Race</p>

                <section style={displayNone}>

                </section>

                <section className={styles.charCreatorRacesAstarian} style={displayAstarianRaces} >
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
                        <Link to="./character-details"><img src="https://i.imgur.com/88IrDbe.jpg" alt="" className={styles.raceImg} onClick={() => {this.props.setRace("Goliath")}}/></Link>
                    </div>

                    <div>
                        <Link to="./character-details"><img src="https://i.imgur.com/VmYg0Zl.jpg" alt="" className={styles.raceImg} onClick={() => {this.props.setRace("Vampirian")}}/></Link>
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

                <section className={styles.charCreatorRacesIrian} style={displayIrianRaces}>
                    <div>
                        <h4>Lumian</h4>
                        <p>
                            Lumian, in their native tongue Light Incarnate, are beings without a physical
                            body, but
                            their body is a pure manifestation of the magic Force itself. The whole race
                            has aligned
                            themselves with the Amber Crystalborn in a meritocratic alliance,
                            where
                            individuals are given power based on individual achievements.
                        </p>
                    </div>

                    <div>
                        <Link to="./character-details"><img src="https://i.imgur.com/LeQtQM3.png" alt="" className={styles.raceImg} onClick={() => {this.props.setRace("Lumian")}}/></Link>
                    </div>

                    <div>
                        <Link to="./character-details"><img src="https://i.imgur.com/RRGpfki.png" alt="" className={styles.raceImg} onClick={() => {this.props.setRace("Crystalborn")}}/></Link>
                    </div>

                    <div>
                        <h4>Crystalborn</h4>
                        <p>
                            The Crystalborn are lizard-like creatures with scales of pure crystal. Their hight can
                            drastically vary between 4 to 7 feet. The Race is divided into 3
                            subraces,
                            with each heavily discriminating against each other. The 3 divisions are Amber
                            (scholarly-oriented), Jade
                            (primal tribal), Obsidian (militaristic).
                        </p>
                    </div>
                </section>
            </section>



        )

    }
}


export default RaceSelect;



