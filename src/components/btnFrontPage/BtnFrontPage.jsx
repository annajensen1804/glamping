import styles from './btnFrontPage.module.css'

const BtnFrontPage = ({buttonText, onClick, background, border}) => {
    return (
        <button 
        className={styles.btnFrontPage} 
        style= {{backgroundColor: background, border: border}} 
        onClick={onClick}>
            <p>{buttonText}</p>
        </button>
    )
}

export default BtnFrontPage