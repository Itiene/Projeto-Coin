import {FaFacebook,FaInstagram, FaLinkedin} from 'react-icons/fa'

import styles from './Footer.modules.css'

function Footer(){
    return (
        <footer className={styles.footer}>
            <ul className={style.social_list}>
                <li>
                    <FaFacebook />
                </li>
                <li>
                    <FaInstagram />
                </li>
                <li>
                    <FaLinkedin />
                </li>
            </ul>
            <p className={style.copy_right}>
                <span>Costs</span> &copy;2026
            </p>    
        </footer>
    )
}

export default Footer