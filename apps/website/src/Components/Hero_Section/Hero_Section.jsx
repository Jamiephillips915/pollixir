import styles from './Hero_Section.module.css';

import GoogleLogo from '../../assets/google.svg';

function Hero_Section() {
    const companies = [
        { id: '1', image: GoogleLogo }, { id: '2', image: GoogleLogo }, { id: '3', image: GoogleLogo }
    ];

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h1>Less Clipboards,<br /> More Connections.</h1>
            </div>
            <div className={styles.caption} id={styles.campaignCaption}>
                <h2>Revolutionise your Campaign.</h2>
            </div>
            <div className={styles.caption} id={styles.descriptionCaption}>
                <h2>
                    Pollixir replaces clunky paperwork with a seamless digital toolkit, letting your canvassers focus on what they do best: talking to people.
                </h2>
            </div>
            <div className={styles.buttonContainer}>
                <button className={styles.button}>
                    <p>Request a Demo</p>
                </button>
                <button className={styles.button} id={styles.contactUsButton}>
                    <p>Contact Us</p>
                </button>
            </div>
            <div className={styles.photo}></div>
            <div className={styles.text} id={styles.trustedByText}>
                <p>Our software is trusted by</p>
            </div>
            <div className={styles.companyCarousel}>
                {companies.map((company) => {
                    return (
                        <div className={styles.carouselBox} key={company.id}>
                            <img src={company.image} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Hero_Section;