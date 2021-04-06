import React from "react";
import styles from "./Aside.module.css"

const Aside = () => {
    return (
        <aside>
            <img src="https://i.imgur.com/a8e3iNe.jpg" alt="" className={styles.asideImgOne} />
            <img src="https://i.imgur.com/a8e3iNe.jpg" alt="" className={styles.asideImgTwo} />
        </aside>
    )
}

export default Aside;