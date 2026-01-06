import styles from './Nav.module.css'

function Nav() {
    return (
        <nav className={styles.nav}>
            <ul className={styles.navList}>
                <li><a href="/" className={styles.navLink}>Home</a></li>
                <li><a href="/about" className={styles.navLink}>About</a></li>
                <li><a href="/menu" className={styles.navLink}>Menu</a></li>
                <li><a href="/reservations" className={styles.navLink}>Reservations</a></li>
                <li><a href="/order-online" className={styles.navLink}>Order Online</a></li>
                <li><a href="/login" className={styles.navLink}>Login</a></li>
            </ul>
        </nav>
    )
}

export default Nav