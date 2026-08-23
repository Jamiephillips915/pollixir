import { useState } from 'react';
import { Link } from 'react-router';
import { FaArrowLeft } from "react-icons/fa6";

import styles from './Login_Page.module.css';

import WordMark from '../../../assets/wordmark.svg';


function Login_Page() {
    return (
        <div className={styles.loginPageWrapper}>
            <div className={styles.container}>
                <Link to="/" className={styles.exitButton}>
                    <FaArrowLeft />
                </Link>
                <img className={styles.logo} src={WordMark} />
            </div>

            <h2 className={styles.signInText}>Sign in</h2>
            <div className={styles.loginContainer}>
                <input className={styles.loginInput} placeholder={"Organiser Number"} />
                <input className={styles.loginInput} placeholder={"Password"} type='password' />
                <Link to="/login-verification" className={styles.forgotPasswordLink} >
                    Forgot Password?
                </Link>
                <div className={styles.passwordContainer}>
                    <input type='checkbox' className={styles.rememberPasswordCheckbox} />
                    <p>Remember log in</p>
                </div>
            </div>
            <button className={styles.signInButton}>
                <p>Sign in</p>
            </button>
        </div>
    );
}

export default Login_Page;