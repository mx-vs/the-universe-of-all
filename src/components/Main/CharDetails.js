import React, { useEffect, useState } from "react";
import styles from "./CharDetails.module.css";
import firebase from "../../services/firebase";
import { v4 as uuidv4 } from "uuid";

const CharDetails = (props) => {
    let [classes, setClasses] = useState([]);

    useEffect(() => {
        let fetchedClasses = [];
        let fetchedEquipment = [];
        fetch("https://www.dnd5eapi.co/api/classes")
            .then(res => res.json())
            .then(data => {
                fetchedClasses = data.results.map((classDnd) => {
                    return classDnd.name;
                })
                setClasses(fetchedClasses);
            })
    });

    let optionsClasses = classes.map((classDnd) =>
        <option key={classDnd}>{classDnd}</option>
    );

    const [input, setInput] = useState();

    return (
        <main className={styles.charDetailsMain}>
            <section className={styles.charDetailsHeaders}>
                <h4>Information</h4>
                <h4>Attributes</h4>
                <h4>Details</h4>
            </section>

            <form action="" className={styles.charDetailsForm}>
                <section className={styles.charDetailsSection}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" onChange={e => setInput(e.target.value)} />
                    <label htmlFor="race">Race:</label>
                    <input type="text" id="race" name="race" onChange={e => setInput(e.target.value)} />
                    <label htmlFor="classNameDND">Class:</label>
                    <select id="classNameDND" name="classNameDND" onChange={e => setInput(e.target.value)}>
                        {optionsClasses}
                    </select>
                    <label htmlFor="alignment">Alignment:</label>
                    <select id="alignment" name="alignment" onChange={e => setInput(e.target.value)}>
                        <option>Chaotic</option>
                        <option>Neutral</option>
                        <option>Lawful</option>
                        <option>Evil</option>
                    </select>
                </section>

                <section className={styles.charDetailsSection}>
                    <label htmlFor="str">Strength:</label>
                    <input type="number" id={styles.str} name="str" onChange={e => setInput(e.target.value)} />
                    <label htmlFor="dex">Dexterity:</label>
                    <input type="number" id={styles.dex} name="dex" onChange={e => setInput(e.target.value)} />
                    <label htmlFor="con">Constitution:</label>
                    <input type="number" id={styles.con} name="con" onChange={e => setInput(e.target.value)} />
                    <label htmlFor="int">Intelligence:</label>
                    <input type="number" id={styles.int} name="int" onChange={e => setInput(e.target.value)} />
                    <label htmlFor="wis">Wisdom:</label>
                    <input type="number" id={styles.wis} name="wis" onChange={e => setInput(e.target.value)} />
                    <label htmlFor="cha">Charisma:</label>
                    <input type="number" id={styles.cha} name="cha" onChange={e => setInput(e.target.value)} />
                </section>

                <section className={styles.charDetailsSection}>
                    <label htmlFor="desc">Description:</label>
                    <textarea type="text" id="desc" name="desc" rows="4" onChange={e => setInput(e.target.value)}></textarea>
                    <label htmlFor="features">Features & Traits:</label>
                    <textarea type="text" id="features" name="features" rows="4" onChange={e => setInput(e.target.value)}></textarea>
                </section>

                <section className={styles.charDetailsButtons}>
                    <input type="file" id="img" name="img" accept="image/*" className={styles.uploadImgButton} />
                    <label htmlFor="img">Choose an Image</label>
                    <input type="button" id="rollbtn" name="rollbtn" className={styles.rollButton} onClick={() => window.open("https://rgbstudios.org/dnd-dice/char?r=#")} />
                    <label htmlFor="rollbtn">Roll Attributes</label>
                    <input type="submit" id="savebtn" name="savebtn" className={styles.saveButton} />
                    <label htmlFor="savebtn">Save Character</label>
                </section>
            </form>
        </main>
    )
}

export default CharDetails;