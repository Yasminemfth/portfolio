import { notFound } from "next/navigation"
import Image from "next/image"
import styles from "./projectDetail.module.css"


/* type d'un projet */
type Project = {
  title: string        /* titre */
  slug: string         /* slug dynamique */
  role: string         /* role dans projet */
  year: string         /* année */
  description: string  /* description longue */
  image?: string       /* image si pas de video */
  video?: string       /* video embed youtube */
  technologies: string[] /* stack tech */
}


/* tableau qui contient tts projets */
const projects: Project[] = [

/*  projet 1  */
{
  title: "Lexilala – Refonte d’un site éducatif multilingue",
  slug: "lexilala",
  role: "Cheffe de projet & Développeuse — BAP (IIM Digital School)",
  year: "2025",

  /* description détaillée projet */
  description:
    "Dans le cadre du projet BAP, j’ai été cheffe d’équipe et développeuse pour la refonte du site Lexilala de l’association Dulala.\n\nJ’ai coordonné une équipe de huit étudiants tout en participant activement au développement du site sous WordPress.\n\nLe projet visait à moderniser l’interface, améliorer l’expérience utilisateur et optimiser le référencement naturel (SEO).\n\nCette refonte a permis d’améliorer la navigation, les performances du site et l’accessibilité des contenus multilingues.",

  /* video youtube */
  video: "https://www.youtube.com/embed/wLe-ZxM_Uk0?rel=0&mute=1",

  /* stack techno utilisée */
  technologies: [
    "WordPress",
    "PHP",
    "MySQL",
    "SEO",
    "Responsive Design",
    "OVH",
    "RGPD"
  ],
},

/*  projet 2  */
{
  title: "NatureQuest – Système de réservation MVC",
  slug: "naturequest-reservation",
  role: "Développeuse Front/Back-End",
  year: "2025",

  description:
    "NatureQuest est une application web de réservation développée en PHP orienté objet selon l’architecture MVC.\n\n En groupe nous avons conçu la logique métier, les contrôleurs et les vues afin de structurer l’application de manière claire et maintenable.\n\nLe projet intègre la gestion des comptes utilisateurs, un système d’authentification sécurisé et des opérations CRUD reliées à une base de données MySQL.",


  /* video demo */
  video: "https://www.youtube.com/embed/jxLBWrHYsOg?rel=0&mute=1",

  technologies: ["PHP", "Architecture MVC", "POO", "MySQL", "Authentification sécurisée"],
},

/*  projet 3  */
{
  title: "projet Tailwind CSS – Intégration de maquette",
  slug: "tailwind-css",
  role: "Intégratrice et Développeuse Front-End",
  year: "2025",

  description:
    "Intégration fidèle d’une maquette Figma en utilisant Tailwind CSS.\n\nL’objectif était de reproduire précisément le design en respectant la hiérarchie visuelle, les espacements et la cohérence des composants.\n\nLe projet met l’accent sur le responsive design, l’utilisation des classes utilitaires Tailwind et l’optimisation de la structure HTML pour garantir un code clair, maintenable et adaptable à différents formats d’écran.",

  image: "/project/tailwind1.png",

  technologies: ["HTML", "Tailwind CSS", "Responsive Design", "Figma"],
},

/*  projet 4  */
{
  title: "Light Interface – Add-on d’accessibilité Blender",
  slug: "light-interface",
  role: "Conceptrice & Développeuse ",
  year: "2026",

  description:
    "Light Interface est une extension Blender développée en Python visant à simplifier l’interface utilisateur et à réduire la charge cognitive dans un environnement logiciel complexe.\n\nCe projet a été réalisé en groupe, en collaboration avec des étudiants spécialisés en 3D afin d’approfondir notre compréhension du logiciel et de ses usages professionnels.\n\nLe projet repose sur une réflexion UX autour de la lisibilité et de l’accessibilité afin de créer un workspace minimaliste favorisant la concentration. L’add-on génère un espace de travail épuré, permet de masquer certains panneaux, d’activer un mode dyslexique et d’appliquer un thème optimisé pour améliorer le contraste et la lisibilité.",

  video: "https://www.youtube.com/embed/W0KrMh-a0Ls?mute=1",

  technologies: [
    "Python",
    "Blender API",
    "UI Scripting",
    "Theme XML",
    "UX Research"
  ],
},

/*  projet 5  */
{
  title: "projet Creative Dev – Expérience narrative interactive",
  slug: "creative-dev",
  role: "Développeuse Front-End",
  year: "2026",

  description:
    "Projet de Creative Development explorant la tendresse, la peur et le deuil à travers une expérience narrative interactive.\n\nDeux personnages tentent de s’étreindre mais sont séparés par une force invisible. La peur apparaît lorsque l’un est envahi par des mains anonymes, avant de laisser place au deuil dans une scène finale plongée dans l’obscurité, éclairée par une seule bougie.\n\nL’utilisateur progresse à l’aide des flèches du clavier et d’interactions spécifiques (navigation latérale, clics, extinction de la bougie), renforçant l’immersion et l’impact émotionnel.",

  video: "https://www.youtube.com/embed/UC4apg8f1H8?mute=1",

  technologies: [
    "HTML",
    "SCSS",
    "JavaScript",
    "Vite",
    "CSS Animations"
  ],
},

]


/* permet a next de generer ttes les pages dynamiques */
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug, /* cree une page par slug */
  }))
}


/* page dynamique /projects/[slug] */
export default async function ProjectPage({
  params,
}: {
  params: { slug: string }
}) {

  /* recup slug depuis url */
  const { slug } = await params

  /* cherche projet correspondant */
  const project = projects.find((p) => p.slug === slug)

  /* si pas trouvé -> 404 */
  if (!project) {
    notFound()
  }

  return (
    <main className={styles.container}>

      {/* header(fin juste le titre) et le role et year du projet */}
      <header className={styles.header}>
        <h1 className={styles.title}>{project.title}</h1>
        <p className={styles.meta}>
          {project.role} • {project.year}
        </p>
      </header>

      <div className={styles.content}>

        {/* texte */}
        <div className={styles.text}>

          {/* separe description en paragraphes via \n\n */}
          {project.description.split("\n\n").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}

          {/* techno utilisé */}
          <div className={styles.techStack}>
            <h3 className={styles.techTitle}>Technologies utilisées</h3>

            <div className={styles.techList}>
              {project.technologies.map((tech) => (
                <span key={tech} className={styles.tech}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* partie media (video prioritaire sinon image) */}
        <div className={styles.mediaWrapper}>
          {project.video ? (
            <iframe
              src={project.video}
              title={`Vidéo du projet ${project.title}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className={styles.video}
            />
          ) : project.image ? (
            <Image
              src={project.image}
              alt={`Aperçu du projet ${project.title}`}
              width={800}
              height={500}
              sizes="(max-width: 768px) 100vw, 800px"
              className={styles.image}
            />
          ) : null}
        </div>

      </div>
    </main>
  )
}