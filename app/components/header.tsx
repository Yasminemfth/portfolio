import Link from "next/link";
import Image from "next/image";
import styles from "./css/Header.module.css";

/*  header global */
export default function Header() {
  return (
    <header className={styles.header}>

      {/* mon logo*/}
      <div className={styles.logoWrapper}>
        <Link href="/" aria-label="Retour à l'accueil">
          <Image
            src="/header/chatlogo.png"
            alt="Logo Yasmine Meftah"
            width={125}
            height={125}
            className={styles.cat}
            priority /* charge priorité */
          />
        </Link>
      </div>

      {/* checkbox cachée (sert a controler le menu burger en css) je savais pas trop comment utiliser le jsx(ne voulais pas fonctionner) du coup j'ai fait du bricolage avec css */}
      <input
        type="checkbox"
        id="menu-toggle"
        className={styles.menuToggle}
        aria-hidden="true"
      />

      {/* bouton burger ( lié a la checkbox) */}
      <label
        htmlFor="menu-toggle"
        className={styles.burger}
        aria-label="Ouvrir le menu"
        aria-controls="main-navigation"
      >
        <span></span> {/* ligne 1 */}
        <span></span> {/* ligne 2 */}
        <span></span> {/* ligne 3 */}
      </label>

      {/*  nav  */}
      <nav
        id="main-navigation"
        className={styles.nav}
        aria-label="Navigation principale"
      >

        {/* bttn projects */}
        <Link href="/projects" className={styles.button}>
          <Image
            src="/header/mushroom.png"
            alt="" /* pas besoin car decoratif */
            width={25}
            height={25}
            aria-hidden="true"
          />
          Projects
        </Link>

        {/* bttn about */}
        <Link href="/about" className={styles.button}>
          <Image
            src="/header/mushroom.png"
            alt=""
            width={25}
            height={25}
            aria-hidden="true"
          />
          About
        </Link>

        {/* bttn contact */}
        <Link href="/contact" className={styles.button}>
          <Image
            src="/header/mushroom.png"
            alt=""
            width={25}
            height={25}
            aria-hidden="true"
          />
          Contact
        </Link>

      </nav>

    </header>
  );
}