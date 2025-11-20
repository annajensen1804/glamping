import { useState } from 'react';
import BtnFrontPage from '../btnFrontPage/BtnFrontPage';
import styles from './pageHeader.module.css'
import { useNavigate } from 'react-router';
import BurgerMenuWrapper from '../burgerMenu/BurgerMenuWrapper';



const PageHeader = ({logo, titleOne, titleTwo, bgImg, button, variant='default'}) => {

    const [open, setOpen] = useState(false)

    const toggle = () => {
        setOpen(!open)
    }

const navigate = useNavigate()

const isHome = variant === "home";

    return (
      <header
        className={styles.header}
        style={{ backgroundImage: `url(${bgImg})` }} >

        <BurgerMenuWrapper />
        
        {logo && <img 
        src={logo} 
        alt="logo" 
        className={isHome ? styles.logoHome : styles.logoDefault}
        />}
        
        <h1>{titleOne} <br></br> {titleTwo}</h1>
        
        {/* <button onClick={toggle}> {open ? 'Læs mere' : 'Book nu'}</button> */}
        
        {button && (
          <BtnFrontPage
            buttonText="Book nu"
            onClick={() => navigate('/stays')}
            /* onClick={toggle} */
            background="transparent"
            border="white 1px solid"
          />
        )}

      </header>
    );
}

export default PageHeader;