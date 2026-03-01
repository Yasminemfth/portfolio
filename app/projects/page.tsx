"use client";

import { useState, CSSProperties } from "react";
import Link from "next/link";
import styles from "../css/projects.module.css";
import Image from "next/image";

type Card = {
  title: string;
  desc: string;
  slug: string;
  image: string;
};

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
    desc: "Expérience narrative interactive / Animations CSS / SCSS / Vite",
    slug: "creative-dev",
    image: "/project/creadev.png",
  },
];

export default function ProjectsPage() {
  const [active, setActive] = useState(0);
  const count = cards.length;

  const prev = () =>
    setActive((prevIndex) => (prevIndex - 1 + count) % count);

  const next = () =>
    setActive((prevIndex) => (prevIndex + 1) % count);

  return (
    <main className={styles.section}>
      
      <header className={styles.pageHeader}>
        <p className={styles.pageTitle}>Projects</p>
      </header>

      <div
        className={styles.fan}
        aria-label="Liste des projets"
        style={
          {
            "--count": count,
            "--active": active,
          } as CSSProperties
        }
      >
        {cards.map((card, index) => (
          <article
            key={card.slug}
            className={styles.card}
            style={{ "--i": index } as CSSProperties}
          >
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

            <div className={styles.cardTitle}>{card.title}</div>

            <p className={styles.desc}>{card.desc}</p>

            <Link
              href={`/projects/${card.slug}`}
              className={styles.detailBtn}
            >
              Détail
            </Link>
          </article>
        ))}
      </div>

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