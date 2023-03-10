import styles from './Post.module.css';

export function Post() {

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img 
                        className={styles.avatar} 
                        src="https://github.com/juniorcodinglab.png" 
                        alt="Foto Perfil - juniorcodinglab" 
                    />
                    <div className={styles.authorInfo}>
                        <strong>Silvio Junior</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="21 de Fevereiro ร s 12:32:00" dateTime="2023-02-21 12:32:00">Publicado hรก 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa ๐</p>
                <p>Acabei de subir mais um projeto no meu portifa. ร um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto รฉ DoctorCare ๐</p>
                <p><a href="">๐ jane.design/doctorcare</a> </p>
                <p><a href="">#novoprojeto #nlw #rocketseat</a></p>
            </div>
        </article>
    )
}