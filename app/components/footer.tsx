import Link from "next/link"
import Image from "next/image"
import styles from "./css/Footer.module.css"

/* footer global */
export default function Footer() {
  return (
    <footer className={styles.footer}>

      {/* texte copyright dynamique (année auto) */}
      <p className={styles.text}>
        © {new Date().getFullYear()} Yasmine Meftah – Tous droits réservés – Mentions légales
      </p>

      {/* reseaux sociaux */}
      <div className={styles.socials}>
        
        {/* lien github */}
        <Link
          href="https://github.com/Yasminemfth"
          target="_blank" /* ouvre new onglet */
          rel="noopener noreferrer" /* securité */
          className={styles.icon}
        >
          <Image 
            src="/footer/github.png" 
            alt="GitHub" 
            width={35} 
            height={35} 
          />
        </Link>

        {/* lien youtube */}
        <Link
          href="https://youtube.com/playlist?list=PLcbnTddDoNweZg7VaDw6DIxei8O2tw72S&si=D1Ij2TMUKXB_MmYw"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.icon}
        >
          <Image 
            src="/footer/youtube.png" 
            alt="YouTube" 
            width={40} 
            height={40} 
          />
        </Link>

      </div>

    </footer>
  )
}