import React, { useEffect, useState } from "react";
import styles from "./SingleCharRender.module.css";
import firebase from "../../services/firebase";

const SingleCharRender = (props) => {
    let [userChar, setUserChar] = useState([]);

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
        <div className={styles.myProfileDiv} key={char.id}>
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
                    <button className={styles.btn}>Edit Character</button>
                    <button className={styles.btn}>Delete Character</button>
                    <button className={styles.btn}>Print Character</button>
                </section>
            </section>
            <section className={styles.charDetailsWrapper}>
                <p>Description: {char.desc}</p>
                <p>Features & Traits: {char.features}</p>
            </section>
        </div>
    ))

    return (
        <div>
            {displayUserChars}
        </div>
    )
}

export default SingleCharRender;