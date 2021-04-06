import React from "react";
import styles from "./CharDetails.module.css";

const CharDetails = () => {
    return (
        <main className={styles.charDetailsMain}>
            <section className={styles.charDetailsHeaders}>
                <h4>Information</h4>
                <h4>Attributes</h4>
                <h4>Details</h4>
            </section>

            <form action="" className={styles.charDetailsForm}>
                <section className={styles.charDetailsSection}>

                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" />
                    <label for="race">Race:</label>
                    <input type="text" id="race" name="race" />
                    <label for="classNameDND">Class:</label>
                    <input type="text" id="classNameDND" name="classNameDND" />
                    <label for="backgroundDND">Background:</label>
                    <input type="text" id="backgroundDND" name="backgroundDND" />
                    <label for="alignment">Alignment:</label>
                    <input type="text" id="alignment" name="alignment" />
                    <label for="equipment">Equipment:</label>
                    <input type="text" id="equipment" name="equipment" />
                </section>

                <section className={styles.charDetailsSection}>
                    <label for="str">Strength:</label>
                    <input type="number" id={styles.str} name="str" />
                    <label for="dex">Dexterity:</label>
                    <input type="number" id={styles.dex} name="dex" />
                    <label for="con">Constitution:</label>
                    <input type="number" id={styles.con} name="con" />
                    <label for="int">Intelligence:</label>
                    <input type="number" id={styles.int} name="int" />
                    <label for="wis">Wisdom:</label>
                    <input type="number" id={styles.wis} name="wis" />
                    <label for="cha">Charisma:</label>
                    <input type="number" id={styles.cha} name="cha" />
                </section>

                <section className={styles.charDetailsSection}>
                    <label for="desc">Description:</label>
                    <textarea type="text" id="desc" name="desc" rows="4"></textarea>
                    <label for="features">Features & Traits:</label>
                    <textarea type="text" id="features" name="features" rows="4"></textarea>
                    <label for="proficiencies">Proficiencies:</label>
                    <textarea type="text" id="proficiencies" name="proficiencies" rows="4"></textarea>
                </section>

                <section className={styles.charDetailsButtons}>
                    <input type="file" id="img" name="img" accept="image/*" className={styles.uploadImgButton} />
                    <label for="img">Choose an Image</label>
                    <input type="button" id="rollbtn" name="rollbtn" className={styles.rollButton} />
                    <label for="rollbtn">Roll Attributes</label>
                    <input type="submit" id="savebtn" name="savebtn" className={styles.saveButton} />
                    <label for="savebtn">Save Character</label>
                </section>
            </form>
        </main>
    )
}

export default CharDetails;