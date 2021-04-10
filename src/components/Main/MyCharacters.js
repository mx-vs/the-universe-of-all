import React, { useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./MyCharacters.module.css";
import UserCharRender from "./UserCharRender";
import ReactToPrint from 'react-to-print';

const MyCharacters = (props) => {

    const printRef = useRef();
    let divToRender;

    if (props.userEmail) {
        divToRender =
            <div>
                <ReactToPrint
                    trigger={() => <button className={styles.btn}>Print My Characters</button>}
                    content={() => printRef.current}
                />
                <div ref={printRef}>
                    <UserCharRender
                        userEmail={props.userEmail}
                        setUserEmail={props.setUserEmail}
                    />
                </div>
            </div>
    } else {
        divToRender = <Link to="/register" style={{ textDecoration: "none" }}><h1 className={styles.message}> Please Register or Login to see your Characters</h1></Link>
    }

    return (

        <div className={styles.profDiv}>
            {divToRender}
        </div>
    )
}

export default MyCharacters;