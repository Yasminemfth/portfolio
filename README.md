# Portfolio – Yasmine Meftah

## 👩‍💻 Présentation

Ce projet est mon portfolio professionnel développé avec **Next.js** et **TypeScript**.

Il a été réalisé dans le cadre du module NextJS.

L’objectif est de présenter :

- Mon parcours académique et professionnel  
- Mes compétences techniques  
- Mes projets réalisés  
- Un formulaire de contact fonctionnel avec envoi d’e-mail  

---

## 🚀 Technologies utilisées

- Next.js 16 (App Router)  
- TypeScript  
- React  
- Resend (envoi d’e-mails transactionnels)  
- Render (déploiement)  

---

## 📂 Structure des pages

- `/` → HomePage (présentation rapide)
- `/projects` → Liste des projets
- `/project/[slug]` → Page détaillée d’un projet dynamique
- `/about` → Parcours académique et compétences détaillées
- `/contact` → Formulaire de contact fonctionnel
- `/api/contact` → API Route pour l’envoi d’e-mails
- `not-found.tsx` → Page 404 personnalisée

---

## ✨ Fonctionnalités

- Design responsive 
- SEO optimisé via metadata Next.js
- essayer de faire le truc le plus optimisé
- Architecture en composants réutilisables
- Routing dynamique avec `[slug]`
- API Route sécurisée pour l’envoi d’e-mails
- Intégration de Resend pour le formulaire
- Page 404 personnalisée
- Animations et transitions

---


## Déploiement

Le site est déployé sur **Render**.

URL du projet :  
**https://portfolio-yasmine-meftah.onrender.com**

---

## 📧 Configuration du formulaire (Resend)

### 1️ Installer Resend

```bash
npm install resend
```

### 2️ Créer un compte sur Resend

Créer un compte sur https://resend.com  
Récupérer votre **clé API**.

---

## ✨Variables d’environnement

Créer un fichier `.env.local` à la racine du projet :

```
RESEND_API_KEY= your_api_key_here
```

⚠️ Ne jamais publier ce fichier sur GitHub.

---

## 📄 Modifier l’adresse mail

Dans le fichier :

```
/app/api/contact/route.ts
```

Remplacer :

```ts
to: ["email"]
```

par votre adresse e-mail personnelle :

```ts
to: ["votre@email.com"]
```

---


## 📦 Installation en local

### 1 Cloner le repository

```bash
git clone https://github.com/ton-username/portfolio.git
cd portfolio
```

### 2 Installer les dépendances

```bash
npm install
```

### 3️ Lancer le serveur de développement

```bash
npm run dev
```
