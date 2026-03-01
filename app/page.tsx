
import Link from "next/link"
import styles from "./css/homepage.module.css"
export default function Home() {
  return (
    <main className={styles.presentation}>

      {/* texte centré au dessus du bg */}
      <div className={styles.overlay}>

        {/* nom / titre principal */}
        <h1 className={styles.title}>Yasmine Meftah</h1>

        {/* description courte */}
        <p className={styles.subtitle}>
          Yasmine Meftah, future développeuse full-stack et iot.
          <br></br>
          Voici mon portfolio, qui vous permettra de découvrir mon univers,
          <br></br>
          mes projets et ma vision de la technologie.
        </p>

        {/* bouton vers page projets */}
        <Link href="/projects" className={styles.button}>
          Entrez dans mon monde
        </Link>

      </div>
    </main>
  )
}