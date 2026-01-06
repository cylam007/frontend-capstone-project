import LittleLemonLogo from '../src/assets/Logo.png'
import Nav from './Nav'
import styles from './Header.module.css'

function Header() {
    return (
        <header className={styles.header}>
            <img src={LittleLemonLogo} alt="Little Lemon Logo" className={styles.logo} />
            <Nav />
        </header>
    )
}

export default Header