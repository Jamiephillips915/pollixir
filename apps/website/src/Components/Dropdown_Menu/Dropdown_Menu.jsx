import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

import styles from './Dropdown_Menu.module.css';
import menuButton from '../../assets/menu-button.svg';
import exitButton from '../../assets/exit-button.svg';
import { useEffect } from 'react';

export function Dropdown({SetToggleActive, SetMenuActive}) {
    return (
        <div className={styles.container}>
            <div className={styles.blur}></div>
            <div className={styles.dropdown}>
                <HashLink smooth to="/#home" className={styles.link} id={styles.homeLink} onClick={() => {SetMenuActive(false)}}>
                    <p>Home</p>
                </HashLink>
                <HashLink smooth to="/#for-organisers" className={styles.link} id={styles.organiserLink} onClick={() => {SetToggleActive(false); SetMenuActive(false)}}>
                    <p>For Organisers</p>
                </HashLink>
                <HashLink smooth to="/#for-canvassers" className={styles.link} id={styles.canvasserLink} onClick={() => {SetToggleActive(true); SetMenuActive(false)}}>
                    <p>For Canvassers</p>
                </HashLink>
                <HashLink smooth to="/#pricing" className={styles.link} id={styles.pricingLink} onClick={() => {SetMenuActive(false)}}>
                    <p>Pricing</p>
                </HashLink>
                <Link className={styles.button} id={styles.getStartedButton}>
                    <p>Get Started</p>
                </Link>
                <Link to="/login" className={styles.button} id={styles.loginButton}>
                    <p>Login</p>
                </Link>
            </div>
        </div>
    );
}

function Active_Menu({ menuActive, SetMenuActive }) {
    return (
        <>
            <div className={`${styles.menuButton} ${styles.active}`} onClick={() => SetMenuActive(!menuActive)}>
                <img src={exitButton} alt="Dropdown Menu Button" />
            </div>
        </>
    );
}
export function Dropdown_Menu({ menuActive, SetMenuActive }) {
    if (menuActive) {
        return (
            <Active_Menu menuActive={menuActive} SetMenuActive={SetMenuActive} />
        );
    }
    else {
        return (
            <div className={styles.menuButton} onClick={() => SetMenuActive(!menuActive)}>
                <img src={menuButton} alt="Dropdown Menu Button" />
            </div>
        );
    }
}

export default Dropdown_Menu;