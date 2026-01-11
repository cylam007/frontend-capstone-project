// React Router
import { Link } from 'react-router-dom'
// Assets
import LittleLemonLogo from '../src/assets/Logo.png'
// CSS styles
import styles from './Header.module.css'
// Components
import Nav from './Nav'

function Header() {
    return (
        <header className={styles.header}>
            <Link to="/" aria-label="Go to homepage">
                <img src={LittleLemonLogo} alt="Little Lemon Logo" className={styles.logo} />
            </Link>
            <Nav />
        </header>
    )
}

export default Header