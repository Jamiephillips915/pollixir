import styles from "./Embedded_Accordian.module.css";
import ExpandButton from "../../assets/expand-button.svg";
import { useState } from "react";

function Embedded_Accordian({ title, constituency, children, areaStats }) {
    const [expandClicked, EnableExpansion] = useState(false);

    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.container}>
                <div style={{ display: "flex" }}>
                    <div className={styles.mainBar}>
                        <p>{constituency}</p>
                        {children && <div className={styles.expandButton} onClick={() => { EnableExpansion(!expandClicked) }}><img src={ExpandButton} /></div>}
                    </div>
                    <p className={styles.areaStats}>{" " + areaStats + " Wards"}</p>
                </div>
                {expandClicked && children}
            </div>
        </div>
    );
}

export function Bar({ location, children, areaStats }) {
    const [expandClicked, EnableExpansion] = useState(false);

    return (
        <div className={styles.container}>
            <div style={{ display: "flex" }}>
                <div className={styles.bar} style={children && { borderBottom: "1px solid white" }}>
                    <p>{location}</p>
                    {children && <div className={styles.expandButton} onClick={() => { EnableExpansion(!expandClicked) }}><img src={ExpandButton} /></div>}
                </div>
                <p className={styles.areaStats}>{areaStats + " Addresses"}</p>
            </div>
            {expandClicked && children}
        </div>
    );
}



export default Embedded_Accordian;