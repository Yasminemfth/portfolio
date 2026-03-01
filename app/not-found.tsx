
import Image from "next/image"
import Link from "next/link"
import styles from "./not-found.module.css"

/* page 404 customiser */
export default function NotFound() {
  return (
    <main className={styles.wrapper}>
      
      {/* container central */}
      <div className={styles.container}>

        {/* image chat triste car vive les chats*/}
        <Image
          src="/sadcat.png"
          alt="Sad cat"
          width={220}
          height={220}
          priority /* charge priorité */
          className={styles.cat}
        />

        {/* titre erreur */}
        <h1 className={styles.title}>404</h1>

        {/* petit texte */}
        <p className={styles.text}>
          Le petit chat n’a pas trouvé la page…
        </p>

        {/* lien retour homepage */}
        <Link href="/" className={styles.link}>
          Retour à l’accueil
        </Link>

      </div>
    </main>
  )
}