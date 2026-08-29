import styles from "./Embedded_Accordian.module.css";
import ExpandButton from "../../assets/expand-button.svg";

function Embedded_Accordian({ title, constituency, children }) {
    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.container}>
                <div className={styles.bar}>
                    <p>{constituency}</p>
                    <div className={styles.expandButton}><img src={ExpandButton} /></div>
                </div>
                {children}
            </div>
        </div>
    );
}

export function Bar({ location }) {
    return (
        <div className={styles.container}>
            <div className={styles.bar}>
                <p>{location}</p>
            </div>
        </div>
    );
}

export default Embedded_Accordian;