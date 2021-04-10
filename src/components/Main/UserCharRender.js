import React, { useEffect, useState } from "react";
import styles from "./UserCharRender.module.css";
import firebase from "../../services/firebase";
import { useHistory } from "react-router-dom";

const UserCharRender = (props) => {
    let [userChar, setUserChar] = useState([]);
    const history = useHistory();

    useEffect(() => {
        const tempArr = [];
        firebase.firestore().collection(props.userEmail).get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    tempArr.push({
                        charId: doc.id,
                        name: doc.data().name,
                        race: doc.data().raceDnd,
                        classNameDND: doc.data().classNameDND,
                        alignment: doc.data().alignment,
                        imageUrl: doc.data().imageUrl,
                        str: doc.data().str,
                        dex: doc.data().dex,
                        con: doc.data().con,
                        int: doc.data().int,
                        wis: doc.data().wis,
                        cha: doc.data().cha,
                        desc: doc.data().desc,
                        features: doc.data().features
                    })
                })
                setUserChar(tempArr);
            })
    }, []);

    const displayUserChars = userChar.map((char) => (
        <div className={styles.myProfileDiv} key={char.charId}>
            <section className={styles.char}>
                <section className={styles.charImgWrapper}>
                    <img src={char.imageUrl} alt="" className="" />
                </section>
                
                <section className={styles.charTextWrapper}>
                    <h3 id="name">{char.name}</h3>
                    <p>Race: {char.race}</p>
                    <p>Class: {char.classNameDND}</p>
                    <p>Alignment: {char.alignment}</p>
                </section>

                <ul className={styles.attributesLiWrapper}>
                    <h4>Attributes</h4>
                    <li>Strenght: {char.str}</li>
                    <li>Dexterity: {char.dex}</li>
                    <li>Constitution: {char.con}</li>
                    <li>Intelligence: {char.int}</li>
                    <li>Wisdom: {char.wis}</li>
                    <li>Charisma: {char.cha}</li>
                </ul>

                <section>
                    <button className={styles.btn} onClick={() => {
                        firebase.firestore()
                            .collection(props.userEmail)
                            .doc(char.charId)
                            .delete()
                            .then(() => {
                                alert("Character successfully deleted!");
                                history.push("/");
                            });
                    }}>Delete Character</button>
                </section>
            </section>

            <section className={styles.charDetailsWrapper}>
                <p><strong>Description:</strong> {char.desc}</p>
                <p><strong>Features & Traits:</strong> {char.features}</p>
            </section>
        </div>
    ))

    return (
        <div>
            {displayUserChars}
        </div>
    )
}

export default UserCharRender;