// React library
import React from "react";

// React Router for navigation
import { Link } from 'react-router-dom';

// Components
import Button from "./components/Button";

// Assets
import restaurantFood from "./assets/restauranfood.jpg";

// CSS styles
import styles from "./AboutMe.module.css";

function AboutMe() {
  return (
    <section className={styles.aboutMeSection} aria-labelledby="hero-title">
      <article className={styles.aboutMeBox}>
        <h1 id="hero-title" className={styles.aboutMeTitle}>Little Lemon</h1>
        <h2 className={styles.aboutMeSubtitle}>Chicago</h2>
        <p className={styles.aboutMeDesc}>
          We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
        </p>
        <Link to="/reservations" aria-label="Navigate to reservations page">
          <Button word="Reserve a Table" />
        </Link>
      </article>
      <figure className={styles.aboutMeImageWrapper}>
        <img
          src={restaurantFood}
          alt="Delicious Mediterranean restaurant food showcasing our signature dishes"
          className={styles.aboutMePhoto}
        />
      </figure>
    </section>
  );
}

export default AboutMe;
