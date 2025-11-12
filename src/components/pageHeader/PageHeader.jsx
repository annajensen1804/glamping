import { useState } from 'react';
import BtnFrontPage from '../btnFrontPage/BtnFrontPage';
import styles from './pageHeader.module.css'



const PageHeader = ({logo, titleOne, titleTwo, button}) => {

    const [open, setOpen] = useState(false)

    const toggle = () => {
        setOpen(!open)

    }

    return (
      <header className={styles.header}>
        
        {logo && <img src={logo} alt="logo" />}
        <h1>{titleOne} <br></br> {titleTwo} </h1>
        
        {/* <button onClick={toggle}> {open ? 'Læs mere' : 'Book nu'}</button> */}
        
        {button && <BtnFrontPage
        buttonText='Book nu' 
        onClick={toggle} 
        background='transparent' 
        border='white 1px solid'/>
      }
        
      </header>
    );
}

export default PageHeader;