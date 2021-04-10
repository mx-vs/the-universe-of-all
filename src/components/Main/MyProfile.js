import React, { useEffect, useState, useRef } from "react";
import styles from "./MyProfile.module.css";
import SingleCharRender from "./SingleCharRender";
import ReactToPrint from 'react-to-print';

const MyProfile = (props) => {

    const printRef = useRef();

    return (
        <div className={styles.profDiv}>
            <ReactToPrint
                trigger={() => <button className={styles.btn}>Print My Characters</button>}
                content={() => printRef.current}
            />
            <div ref={printRef}>
                <SingleCharRender
                    userEmail={props.userEmail}
                    setUserEmail={props.setUserEmail}
                />
            </div>
        </div>
    )
}

export default MyProfile;