import styles from './Footer.module.css';

import WordMark from '../../assets/wordmark.svg';
import Instagram_Logo from '../../assets/instagram-white-icon.svg';
import Twitter_Logo from '../../assets/x-social-media-white-icon.svg';
import Facebook_Logo from '../../assets/facebook-app-round-white-icon.svg';

function Footer() {
    return (
        <div className={styles.footerContainer}>
            <img src={WordMark}></img>
            <h2 className={styles.footerSubtitle}>
                Contact Us:
            </h2>
            <p className={styles.footerText}>+44 07700 900123</p>
            <p className={styles.footerText}>demo@pollixir.com</p>
            <h2 className={styles.footerSubtitle}>Follow Us:</h2>
            <div className={styles.socialContainer}>
                <a className={styles.socialLink}>
                    <img src={Instagram_Logo}></img>
                </a>
                <a className={styles.socialLink}>
                    <img src={Twitter_Logo}></img>
                </a>
                <a className={styles.socialLink}>
                    <img src={Facebook_Logo}></img>
                </a>
            </div>
            <div className={styles.legalContainer}>
                <a>Terms & Conditions</a>
                <a>Privacy Policy</a>
            </div>
            <p className={styles.trademark}>Copyright © 2026 Pollixir - All rights reserved.</p>
        </div>
    );
}

export default Footer;