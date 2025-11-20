import { useEffect, useState, useRef } from "react";
import styles from "./burgerMenu.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import BurgerMenu from "./BurgerMenu";

const BurgerMenuWrapper = () => {
    
    const [open, setOpen] = useState(false);
    const menuRef = useRef(null)
    
    const toggleMenu = () => {
        setOpen((prev) => !prev);
    }
    
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (open && menuRef.current && !menuRef.current.contains(event.target)) {
                setOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        
        return () => {
        document.removeEventListener('mousedown', handleClickOutside)
    };
    }, [open]);

    
    return (
        <div className={styles.burgerWrapper} ref={menuRef}>
            <div className={styles.burgerIcon} onClick={toggleMenu}>
                {open ? <IoMdClose size={30} /> : < GiHamburgerMenu size={30} />}
            </div>
            {open && <BurgerMenu />}
        </div>
    )
}

export default BurgerMenuWrapper