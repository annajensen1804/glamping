import { NavLink } from "react-router"
import styles from './burgerMenu.module.css'

const BurgerMenu = () => {
    return (
      <nav className={styles.burgerMenu}>
        <ul>
            <li><NavLink to="/">Forside</NavLink></li>
            <li><NavLink to="/stays">Ophold</NavLink></li>
            <li><NavLink to="/contact">Kontakt</NavLink></li>
            <li><NavLink to="/activities">Aktiviteter</NavLink></li>
            <li><NavLink to="/myList">Min Liste</NavLink></li>
            <li><NavLink to="/backoffice">Backoffice</NavLink></li>
        </ul>
      </nav>
    );
}

export default BurgerMenu;