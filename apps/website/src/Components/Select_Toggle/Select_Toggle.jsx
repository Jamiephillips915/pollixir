import { useState } from 'react';
import styles from './Select_Toggle.module.css'

function Select_Toggle({canvasserToggleActive, SetToggleActive}) {
    return (
        <div className={styles.canvasserContainer}>
            <div className={styles.featureToggle}>
                <>
                    <div className={`${styles.selectToggle} ${canvasserToggleActive ? styles.active : ''}`} onClick={() => {SetToggleActive(!canvasserToggleActive)}} id='canvasserToggle'>
                        <p>Canvassers</p>
                    </div>
                    <div className={`${styles.selectToggle} ${!canvasserToggleActive ? styles.active : ''}`} onClick={() => {SetToggleActive(!canvasserToggleActive)}}>
                        <p>Organisers</p>
                    </div>
                </>
            </div>
        </div>
    );
}

export default Select_Toggle;