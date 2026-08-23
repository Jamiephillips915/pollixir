import { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './Navigation_Bar.module.css';
import wordmark from '../../assets/wordmark.svg';

import { Dropdown_Menu, Dropdown } from '../Dropdown_Menu/Dropdown_Menu';
import { HashLink } from 'react-router-hash-link';

function Navigation_Bar({ menuActive, SetMenuActive, SetToggleActive }) {

    return (
        <>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <img src={wordmark} alt="Pollixir Title" />
                </div>
                <HashLink smooth to="#home" className={styles.link} id={styles.homeLink}>
                    Home
                </HashLink>
                <HashLink smooth to="#for-organisers" className={styles.link} id={styles.organiserLink} onClick={() => {SetToggleActive(false);}}>
                    For Organisers
                </HashLink>
                <HashLink smooth to="#for-canvassers" className={styles.link} id={styles.canvasserLink} onClick={() => {SetToggleActive(true);}}>
                    For Canvassers
                </HashLink>
                <HashLink smooth to="#pricing" className={styles.link} id={styles.pricingLink}>
                    Pricing
                </HashLink>
                <Link to="/login" className={styles.button} id={styles.loginButton}>
                    <p>Login</p>
                </Link>
                <div className={styles.button} id={styles.getStartedButton}>
                    <p>Get Started</p>
                </div>
                <Dropdown_Menu menuActive={menuActive} SetMenuActive={SetMenuActive} />
            </div>
        </>
    );
}

export default Navigation_Bar;