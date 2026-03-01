"use client";

import { useState, useEffect } from "react";
import styles from "./contact.module.css";

/* page contact */
export default function ContactPage() {

  /* loading btn */
  const [loading, setLoading] = useState(false);

  /* msge succes */
  const [success, setSuccess] = useState(false);

  /* msge erreur */
  const [error, setError] = useState("");

  /* si succes -> disparait apres 3 sec */
  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => setSuccess(false), 3000);
      return () => clearTimeout(timer); /* clean timeout */
    }
  }, [success]);

  /* fction submit formulaire */
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {

    e.preventDefault(); /* pas de reload page */

    const form = e.currentTarget;
    const formData = new FormData(form); /* recup data */

    setLoading(true);   /* active loading */
    setError("");       /* reset erreur */
    setSuccess(false);  /* reset succes */

    try {

      /* envoi vers api route */
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });

      const data = await response.json();

      /* si erreur back */
      if (!response.ok) {
        setError(data.error || "Une erreur est survenue.");
      } else {
        setSuccess(true); /* ok */
        form.reset();     /* reset champs */
      }

    } catch (err) {
      /* erreur reseau */
      setError("Erreur réseau.");
    }

    setLoading(false); /* stop loading */
  }

  return (
    <div className={styles.wrapper}>
      
      {/* conteneur form centré */}
      <div className={styles.formContainer}>

        <h1 className={styles.title}>Contact</h1>

        <form onSubmit={handleSubmit} noValidate>

          {/* email */}
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            className={styles.input}
          />

          {/* obj */}
          <label htmlFor="name" className={styles.label}>
            Objet
          </label>
          <input
            id="name"
            type="text"
            name="name"
            required
            className={styles.input}
          />

          {/* message */}
          <label htmlFor="message" className={styles.label}>
            Sujet
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className={styles.input}
          />

          {/* bouton submit */}
          <button
            type="submit"
            className={styles.button}
            disabled={loading}     /* bloque si loading */
            aria-busy={loading}    /* accessibilité */
          >
            {loading ? "Envoi..." : "Envoyer"}
          </button>

          {/* msg succes */}
          {success && (
            <p className={styles.success}>Message envoyé ✨</p>
          )}

          {/* msg erreur */}
          {error && (
            <p className={styles.error}>{error}</p>
          )}

        </form>
      </div>
    </div>
  );
}