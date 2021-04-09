import React, { useEffect, useState } from "react";
import styles from "./MyProfile.module.css";
import firebase from "../../services/firebase";
import SingleCharRender from "./SingleCharRender";

const MyProfile = (props) => {

    /* let [userChar, setUserChar] = useState([]);

    useEffect(() => {
        firebase.firestore().collection(props.userEmail).get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    setUserChar({
                        id: doc.id,
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
                });
            });
    }, []);

    console.log(userChar); */
    

    return (
            <SingleCharRender
                userEmail={props.userEmail}
                setUserEmail={props.setUserEmail}
            />
    )
}

export default MyProfile;