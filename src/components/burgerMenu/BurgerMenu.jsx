import { NavLink } from "react-router"
import styles from './burgerMenu.module.css'

const BurgerMenu = () => {
    return (
        <nav className={styles.burgerMenu}>
            <ul>
                <li>
                    <NavLink to='/stays'>Ophold</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default BurgerMenu;