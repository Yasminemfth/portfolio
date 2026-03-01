"use client"

/* composant image next */
import Image from "next/image"

/* css module about */
import styles from "./about.module.css"

/* page about */
export default function AboutPage() {
  return (
    <main className={styles.aboutPage}>

      {/* ================= ABOUT ME ================= */}
      <section className={styles.aboutSection}>

        {/* texte */}
        <div className={styles.sectionContent}>

          {/* titre principal */}
          <h1 className={styles.pageTitle}>About Me.</h1>

          {/* intro */}
          <p className={styles.paragraph}>
            Je m’appelle Yasmine Meftah, j’ai 19 ans et je suis étudiante en 2ᵉ année
            de Bachelor Coding & Digital Innovation à l’IIM Digital School.
          </p>

          {/* bac */}
          <p className={styles.paragraph}>
            J’ai obtenu un Baccalauréat général, spécialités Mathématiques et NSI,
            avec mention Assez Bien.
          </p>

          {/* passion code */}
          <p className={styles.paragraph}>
            Passionnée par la logique et la création, j’ai très tôt su que la programmation
            était faite pour moi : transformer des idées en expériences concrètes et interactives.
          </p>

          {/* stack actuelle */}
          <p className={styles.paragraph}>
            Aujourd’hui, je développe des applications web mêlant code, design et interactivité
            avec JavaScript, React, Next.js, PHP, SQL et Python.
            J’apprécie également beaucoup l’IoT et les projets connectés.
          </p>

        </div>

        {/* image portrait */}
        <div className={styles.imageContainer}>
          <Image
            src="/about/yasmine.jpg"
            alt="Portrait professionnel de Yasmine Meftah"
            width={500}
            height={600}
            className={styles.sectionImage}
            priority /* charge direct */
          />
        </div>
      </section>


      {/* ================= PASSIONS ================= */}
      <section className={styles.aboutSection}>

        {/* image passions */}
        <div className={styles.imageContainer}>
          <Image
            src="/about/passion.png"
            alt="Illustration représentant les passions créatives de Yasmine"
            width={500}
            height={500}
            className={styles.sectionImage}
          />
        </div>

        {/* texte passions */}
        <div className={styles.sectionContent}>

          <h2 className={styles.sectionTitle}>Passions</h2>

          <p className={styles.paragraph}>
            En dehors du code, je suis passionnée par :
          </p>

          {/* liste passions */}
          <ul className={styles.list}>
            <li>Théâtre – association Comédia (Pôle Léonard de Vinci)</li>
            <li>Jeux vidéo</li>
            <li>Dessin & création visuelle</li>
            <li>Musique</li>
            <li>Nouvelles technologies</li>
          </ul>

          <p className={styles.paragraph}>
            Ces passions influencent ma manière de développer : j’aime créer des projets immersifs,
            avec une identité forte et une vraie intention.
          </p>

        </div>
      </section>


      {/* ================= EXPERIENCES ================= */}
      <section className={styles.aboutSection}>

        <div className={styles.sectionContent}>

          <h2 className={styles.sectionTitle}>Experiences</h2>

          {/* experience 1 */}
          <article className={styles.paragraph}>
            <strong>🎓 Représentante des étudiants</strong><br />
            Représentation auprès de l’administration, médiation et transmission d’informations.
            <br />
            → Compétences en communication et organisation.
          </article>

          {/* experience 2 */}
          <article className={styles.paragraph}>
            <strong>🚀 Chef de projet – BAP</strong><br />
            Encadrement d’une équipe de 8 étudiants, gestion du planning et relation cliente.
            <br />
            → Gestion de projet et coordination.
          </article>

          {/* experience 3 */}
          <article className={styles.paragraph}>
            <strong>🎨 Animatrice en centre de loisirs</strong><br />
            Encadrement d’enfants et organisation d’activités.
            <br />
            → Adaptabilité et responsabilités.
          </article>

        </div>

        {/* image experiences */}
        <div className={styles.imageContainer}>
          <Image
            src="/about/experience.png"
            alt="Illustration symbolisant les expériences professionnelles"
            width={500}
            height={500}
            className={styles.sectionImage}
          />
        </div>
      </section>


      {/* ================= PROJECTS & DOC ================= */}
      <section className={styles.aboutSection}>

        {/* image code */}
        <div className={styles.imageContainer}>
          <Image
            src="/about/code.png"
            alt="Illustration représentant le développement et la documentation"
            width={500}
            height={500}
            className={styles.sectionImage}
          />
        </div>

        <div className={styles.sectionContent}>

          <h2 className={styles.sectionTitle}>Projects & Documentation</h2>

          {/* youtube + github */}
          <p className={styles.paragraph}>
            Je documente régulièrement mes projets sur YouTube et GitHub.
          </p>

          <p className={styles.paragraph}>
            Ma playlist YouTube regroupe les projets réalisés durant ma première année :
            développement web, mini-jeux et expérimentations.
          </p>

          <p className={styles.paragraph}>
            Mon GitHub présente principalement mes projets de deuxième année ainsi que
            certains travaux antérieurs.
          </p>

          <p className={styles.paragraph}>
            Également, si mon profil vous intéresse, n’hésitez pas à me contacter via le formulaire.
          </p>

          {/* petite citation signature */}
          <blockquote className={styles.quote}>
            “Code is not just logic — it's storytelling through systems.”
          </blockquote>

        </div>
      </section>

    </main>
  )
}