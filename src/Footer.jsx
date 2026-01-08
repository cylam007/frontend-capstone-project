
import Logo from "./assets/Logo.svg";
import Nav from "./Nav.jsx";
import styles from "./Footer.module.css";


function Footer() {
    return (
        <footer className={styles.footerSection} role="contentinfo">
            <section className={styles.footerLeft} aria-labelledby="footer-nav-title">
                <nav className={styles.footerCol} aria-labelledby="footer-nav-title">
                    <h3 id="footer-nav-title" className={styles.footerTitle}>Doormat navigation</h3>
                    <Nav vertical footer />
                </nav>
            </section>
            <img src={Logo} alt="Little Lemon restaurant logo" className={styles.footerLogo} />
            <section className={styles.footerColsWrap}>
                <address className={styles.footerCol} aria-labelledby="contact-title">
                    <h3 id="contact-title" className={styles.footerTitle}>Contact</h3>
                    <div className={styles.footerContact}>
                        <p>Address: 123 Main Street, Chicago, IL</p>
                        <p>Phone number: <a href="tel:+13125550123" className={styles.footerContactLink}>(312) 555-0123</a></p>
                        <p>Email: <a href="mailto:info@littlelemon.com" className={styles.footerContactLink}>info@littlelemon.com</a></p>
                    </div>
                </address>
                <nav className={styles.footerCol} aria-labelledby="social-title">
                    <h3 id="social-title" className={styles.footerTitle}>Social Media Links</h3>
                    <ul className={styles.footerSocial} role="list">
                        <li><a className={styles.footerLink} href="https://facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Visit our Facebook page">Facebook</a></li>
                        <li><a className={styles.footerLink} href="https://instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Visit our Instagram page">Instagram</a></li>
                        <li><a className={styles.footerLink} href="https://threads.net/" target="_blank" rel="noopener noreferrer" aria-label="Visit our Threads page">Threads</a></li>
                    </ul>
                </nav>
            </section>
        </footer>
    );
}

export default Footer;