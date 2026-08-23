import { useState } from 'react';

import styles from './Landing_Page.module.css'

import Navigation_Bar from "../../../Components/Navigation_Bar/Landing_Navigation_Bar";
import { Dropdown } from '../../../Components/Dropdown_Menu/Dropdown_Menu';
import Hero_Section from '../../../Components/Hero_Section/Hero_Section';
import Select_Toggle from '../../../Components/Select_Toggle/Select_Toggle';
import Footer from '../../../Components/Footer/Footer';

function Features({ canvasserToggleActive, canvasserFeatures, organiserFeatures }) {
    if (canvasserToggleActive) {
        return (
            canvasserFeatures.map((canvasserFeature) => {
                return (
                    <div key={canvasserFeature.id} className={styles.featureContainer}>
                        <div className={styles.featureBox}>
                            <div className={styles.icon}>

                            </div>
                            <div className={styles.featureSubtitle}>
                                <p>{canvasserFeature.subtitle}</p>
                            </div>
                            <div className={styles.featureText}>
                                <p>{canvasserFeature.text}</p>
                            </div>
                        </div>
                    </div>
                );
            })
        );
    }
    else {
        return (
            organiserFeatures.map((organiserFeature) => {
                return (
                    <div id={organiserFeature.id} className={styles.featureBox}>
                        <div className={styles.icon}>

                        </div>
                        <div className={styles.featureSubtitle}>
                            <p>{organiserFeature.subtitle}</p>
                        </div>
                        <div className={styles.featureText}>
                            <p>{organiserFeature.text}</p>
                        </div>
                    </div>
                );
            })
        );
    }
}

function Landing_Page() {
    const [menuActive, SetMenuActive] = useState(false);
    const [canvasserToggleActive, SetToggleActive] = useState(true);

    const canvasserFeatures = [
        { id: 1, subtitle: "Optimised Canvassing Routes", text: "Instantly recieve both custom and curated canvas routes from organisers or our state of the art generation." },
        { id: 2, subtitle: "User-Friendly Layouts", text: "Simple and easily navigable survey layout, for rapid real-time completion." },
        { id: 3, subtitle: "Instant Data Submission", text: "One button press to send data to the organisation, no more middleman data entry." }
    ]

    const organiserFeatures = [
        { id: 1, subtitle: "Adaptable Data Entry", text: "Easily modifiable survey, so that you can adapt to any changing and developing scenario." },
        { id: 2, subtitle: "Comprehensive Data Analysis", text: "Sleek and comprehensive data analytics dashboard, so that you can focus on taking action." },
        { id: 3, subtitle: "Efficient Management", text: "Manage many canvassers from your own computer, ensuring that you can mobilise any amount of canvassers." }
    ]

    return (
        <div className={styles.landingPageWrapper}>
            <div id="home" style={{ position: "absolute", top: "0" }}></div>

            <Navigation_Bar menuActive={menuActive} SetMenuActive={SetMenuActive} SetToggleActive={SetToggleActive} />
            {menuActive && <Dropdown SetToggleActive={SetToggleActive} SetMenuActive={SetMenuActive} />}

            <Hero_Section />

            <div id="for-organisers"></div>
            <div id="for-canvassers"></div>

            <Select_Toggle canvasserToggleActive={canvasserToggleActive} SetToggleActive={SetToggleActive} />
            <div className={styles.featureContainer}>
                <Features canvasserToggleActive={canvasserToggleActive} canvasserFeatures={canvasserFeatures} organiserFeatures={organiserFeatures} />
            </div>

            <div id='pricing' className={styles.pricesContainer}>
                <div className={styles.pricesBox}>
                    <h2 className={styles.pricesTitle}>Pricing, built on your ROI.</h2>
                    <p className={styles.pricesText}>We don't believe in flat rate pricing for our product, we scale our pricing based on organisation size and data requirements so that you get the most out of Pollixir.</p>
                    <p className={styles.pricesText}><span id={styles.steps}>- </span>Book a 15 minute consultation talk to discuss your data collection needs.</p>
                    <p className={styles.pricesText}><span id={styles.steps}>- </span>Pollixir will supply a demo copy to discover if the product fits your objectives.</p>
                    <p className={styles.pricesText}><span id={styles.steps}>- </span>We will follow up with another call to discuss pricings.</p>
                </div>
                <a className={styles.pricesButton}>
                    <p>Book a Consultation</p>
                </a>
            </div>

            <Footer />
        </div>
    );
}

export default Landing_Page;