import styles from './Header.module.css';

import igniteLogo from '../assets/logo-ignite.png';

export function Header() {

    return (
        <header className={styles.header}>
            <img src={igniteLogo} alt="" />
            <strong>Ignite Feed</strong>
        </header>
    )
}