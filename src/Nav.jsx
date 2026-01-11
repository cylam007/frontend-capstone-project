// React Router
import { Link } from 'react-router-dom'

// CSS styles
import styles from './Nav.module.css'

function Nav({ vertical, footer }) {
    return (
        <nav className={footer ? styles.footerNav : styles.nav}>
            <ul className={vertical ? styles.navListVertical : styles.navList}>
                <li><Link to="/" className={footer ? styles.footerNavLink : styles.navLink}>Home</Link></li>
                <li><Link to="/about" className={footer ? styles.footerNavLink : styles.navLink}>About</Link></li>
                <li><Link to="/menu" className={footer ? styles.footerNavLink : styles.navLink}>Menu</Link></li>
                <li><Link to="/reservations" className={footer ? styles.footerNavLink : styles.navLink}>Reservations</Link></li>
                <li><Link to="/order-online" className={footer ? styles.footerNavLink : styles.navLink}>Order Online</Link></li>
                <li><Link to="/login" className={footer ? styles.footerNavLink : styles.navLink}>Login</Link></li>
            </ul>
        </nav>
    )
}

export default Nav