import styles from './Sidebar.module.css';
import {  PencilLine  } from "phosphor-react";

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover}
                src="https://images.unsplash.com/photo-1623479322729-28b25c16b011?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=40"
                alt="Developer" 
            />

            <div className={styles.profile}>
                <img 
                    className={styles.avatar}
                    src="https://github.com/juniorcodinglab.png" 
                    alt="Foto de Perfil" 
                />
                <strong>Silvio Junior</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}