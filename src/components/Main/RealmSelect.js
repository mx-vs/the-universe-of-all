import React from "react";
import styles from "./RealmSelect.module.css";

class RealmSelect extends React.Component {

    render() {

        return (
            <div>
                <p>Select a Realm to begin your adventure</p>

                <section className={styles.charCreatorRealms}>
                    <section className={styles.charCreatorRealmsOne}>
                        <img
                            src="https://i.imgur.com/Q63VqRV.gif"
                            alt=""
                            className={styles.gif}
                            onClick={() => this.props.handleRealmSelectProps("astarian")} />
                        <p><strong>Astarian</strong></p>
                    </section>
                    <section className={styles.charCreatorRealmsTwo}>
                        <img
                            src="https://i.imgur.com/psnUA8V.gif"
                            alt=""
                            className={styles.gif}
                            onClick={() => this.props.handleRealmSelectProps("irian")} />
                        <p><strong>Irian</strong></p>
                    </section>
                </section>
            </div>
        )
    }
}

export default RealmSelect;