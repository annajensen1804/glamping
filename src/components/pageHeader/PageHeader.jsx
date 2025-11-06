import BtnFrontPage from '../btnFrontPage/BtnFrontPage';
import styles from './pageHeader.module.css'
import logo from '/logo.png'



const PageHeader = () => {
    return (
      <header className={styles.header}>
        <img src={logo} alt="logo" />
        <h1>Gittes Glamping</h1>
        <BtnFrontPage />
      </header>
    );
}

export default PageHeader;