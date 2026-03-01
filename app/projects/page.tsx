"use client";

/*  importe  hooks et composants utiles*/
import { useState, CSSProperties } from "react";
import Link from "next/link";
import styles from "../css/projects.module.css";
import Image from "next/image";

/* type d'un  card  */
type Card = {
  title: string;   /* titre  */
  desc: string;    /* ptite description */
  slug: string;    /* slug dynamique */
  image: string;   /* image du projet */
};

/* tableau qui contient tous mes projets */
const cards: Card[] = [
  {
    title: "Lexilala",
    desc: "WordPress / Multilingue / UX / SEO",
    slug: "lexilala",
    image: "/project/lexilala.png",
  },
  {
    title: "NatureQuest – Réservation MVC",
    desc: "PHP OOP / MVC / Sécurité",
    slug: "naturequest-reservation",
    image: "/project/naturequest.png",
  },
  {
    title: "Projet Tailwind CSS",
    desc: "Tailwind / Responsive / Intégration Figma",
    slug: "tailwind-css",
    image: "/project/tailwind.png",
  },
  {
    title: "Light Interface – Blender Add-on",
    desc: "Python / API Blender / UX",
    slug: "light-interface",
    image: "/project/blender.png",
  },
  {
    title: "Projet Creative Dev",
    desc: "Expérience narrative interactive / Animations CSS ",
    slug: "creative-dev",
    image: "/project/creadev.png",
  },
];

export default function ProjectsPage() {

  /* index du projet actuellement actif */
  const [active, setActive] = useState(0);

  /* nbre total de projets */
  const count = cards.length;

  /* bouton précédent :
     on enlève 1 à index
      permet de revenir à la fin si on est au début
  */
  const prev = () =>
    setActive((prevIndex) => (prevIndex - 1 + count) % count);

  /* bouton suivant :
     on ajoute 1 à index
      permet de revenir au début si on est à la fin
  */
  const next = () =>
    setActive((prevIndex) => (prevIndex + 1) % count);

  return (
    <main className={styles.section}>
      
      {/* header page (pas vrmt le header genre juste le titre)*/}
      <header className={styles.pageHeader}>
        <p className={styles.pageTitle}>Projects</p>
      </header>

      {/* conteneur principal cards (effet éventail via CSS variables(fait grace a une librairie)) */}
      <div
        className={styles.fan}
        aria-label="Liste des projets"
        style={
          {
            "--count": count,   /* nbre total */
            "--active": active, /* indx actif */
          } as CSSProperties
        }
      >
        {/* boucle sur ttes les cards */}
        {cards.map((card, index) => (
          <article
            key={card.slug}
            className={styles.card}
            style={{ "--i": index } as CSSProperties} /* position de la card */
          >
            {/* image du projet */}
            <div className={styles.thumb}>
              <Image
                src={card.image}
                alt={`Aperçu du projet ${card.title}`}
                fill
                sizes="(max-width: 768px) 90vw, 350px"
                className={styles.thumbImg}
                priority={index === 0}
              />
            </div>

            {/* titre */}
            <div className={styles.cardTitle}>{card.title}</div>

            {/* description */}
            <p className={styles.desc}>{card.desc}</p>

            {/* bouton pour go page détail */}
            <Link
              href={`/projects/${card.slug}`}
              className={styles.detailBtn}
            >
              Détail
            </Link>
          </article>
        ))}
      </div>

      {/* navigation flèches gauche / droite */}
      <div className={styles.navBottom}>
        <button
          type="button"
          className={styles.arrow}
          onClick={prev}
          aria-label="Projet précédent"
        >
          ←
        </button>

        <button
          type="button"
          className={styles.arrow}
          onClick={next}
          aria-label="Projet suivant"
        >
          →
        </button>
      </div>
    </main>
  );
}