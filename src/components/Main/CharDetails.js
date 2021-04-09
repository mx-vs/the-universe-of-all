import React, { useEffect, useState } from "react";
import styles from "./CharDetails.module.css";
import firebase from "../../services/firebase";
import "@firebase/firestore";
import { useHistory, Prompt } from "react-router-dom";

const CharDetails = (props) => {
    let history = useHistory();
    let [classes, setClasses] = useState([]);

    useEffect(() => {
        let fetchedClasses = [];
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

    const [name, setName] = useState("");
    const raceDnd = props.race;
    const [classNameDND, setClassNameDND] = useState("Barbarian");
    const [alignment, setAlignment] = useState("Chaotic");
    const [imageUrl, setImageUrl] = useState("");
    const [str, setStr] = useState("");
    const [dex, setDex] = useState("");
    const [con, setCon] = useState("");
    const [int, setInt] = useState("");
    const [wis, setWis] = useState("");
    const [cha, setCha] = useState("");
    const [desc, setDesc] = useState("");
    const [features, setFeatures] = useState("");

    const saveCharToDatabase = (event) => {
        event.preventDefault();
        firebase.firestore().collection("chars").add({
            name: name,
            raceDnd: raceDnd,
            classNameDND: classNameDND,
            alignment: alignment,
            imageUrl: imageUrl,
            str: str,
            dex: dex,
            con: con,
            int: int,
            wis: wis,
            cha: cha,
            desc: desc,
            features: features
        }).then(() => {
            alert("Character has been created! You can now join adventures")
            history.push("/adventures");
        })
    }

    return (
        <main className={styles.charDetailsMain}>
            <section className={styles.charDetailsHeaders}>
                <h4>Information</h4>
                <h4>Attributes</h4>
                <h4>Details</h4>
            </section>

            <Prompt when={!name || !imageUrl || !str || !con || !wis || !cha || !desc || !features} message="Your character is not saved! Would you like to exit this page?" />
            <form onSubmit={saveCharToDatabase} className={styles.charDetailsForm}>
                <section className={styles.charDetailsSection}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={name} onChange={e => setName(e.target.value)} required />
                    <label htmlFor="race">Race:</label>
                    <input type="text" id="race" name="race" value={raceDnd} readOnly />
                    <label htmlFor="classNameDND">Class:</label>
                    <select id="classNameDND" name="classNameDND" value={classNameDND} onChange={e => setClassNameDND(e.target.value)}>
                        {optionsClasses}
                    </select>
                    <label htmlFor="alignment">Alignment:</label>
                    <select id="alignment" name="alignment" value={alignment} onChange={e => setAlignment(e.target.value)}>
                        <option>Chaotic</option>
                        <option>Neutral</option>
                        <option>Lawful</option>
                        <option>Evil</option>
                    </select>
                    <label htmlFor="imageUrl">ImageURL:</label>
                    <input type="text" id="imageUrl" name="imageUrl" value={imageUrl} onChange={e => setImageUrl(e.target.value)} required />
                </section>

                <section className={styles.charDetailsSection}>
                    <label htmlFor="str">Strength:</label>
                    <input type="number" id={styles.str} name="str" value={str} onChange={e => setStr(e.target.value)} required />
                    <label htmlFor="dex">Dexterity:</label>
                    <input type="number" id={styles.dex} name="dex" value={dex} onChange={e => setDex(e.target.value)} required />
                    <label htmlFor="con">Constitution:</label>
                    <input type="number" id={styles.con} name="con" value={con} onChange={e => setCon(e.target.value)} required />
                    <label htmlFor="int">Intelligence:</label>
                    <input type="number" id={styles.int} name="int" value={int} onChange={e => setInt(e.target.value)} required />
                    <label htmlFor="wis">Wisdom:</label>
                    <input type="number" id={styles.wis} name="wis" value={wis} onChange={e => setWis(e.target.value)} required />
                    <label htmlFor="cha">Charisma:</label>
                    <input type="number" id={styles.cha} name="cha" value={cha} onChange={e => setCha(e.target.value)} required />
                </section>

                <section className={styles.charDetailsSection}>
                    <label htmlFor="desc">Description:</label>
                    <textarea type="text" id="desc" name="desc" rows="4" value={desc} onChange={e => setDesc(e.target.value)} required></textarea>
                    <label htmlFor="features">Features & Traits:</label>
                    <textarea type="text" id="features" name="features" rows="4" value={features} onChange={e => setFeatures(e.target.value)} required></textarea>
                </section>

                <section className={styles.charDetailsButtons}>
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