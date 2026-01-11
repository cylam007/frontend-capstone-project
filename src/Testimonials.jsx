// React library
import React from "react";

// Assets
import human from "./assets/human.png";

// CSS styles
import styles from "./Testimonials.module.css";


function Testimonials() {
  return (
    <section className={styles.testimonialsSection} aria-labelledby="testimonials-title">
      <h2 id="testimonials-title" className={styles.testimonialsTitle}>Testimonials</h2>
      <div className={styles.testimonialsCards} role="list" aria-label="Customer testimonials">
        <article className={styles.testimonialCard} role="listitem">
          <header>
            <div className={styles.testimonialRating} aria-label="Rating: 4 out of 5 stars">Rating: ★★★★☆</div>
          </header>
          <figure className={styles.testimonialProfile}>
            <img src={human} alt="Profile photo of Jane Doe" className={styles.testimonialImg} />
            <figcaption className={styles.testimonialName}>Jane Doe</figcaption>
          </figure>
          <blockquote className={styles.testimonialText}>
            "Amazing food and friendly staff! Will definitely come back."
          </blockquote>
        </article>
        <article className={styles.testimonialCard} role="listitem">
          <header>
            <div className={styles.testimonialRating} aria-label="Rating: 5 out of 5 stars">Rating: ★★★★★</div>
          </header>
          <figure className={styles.testimonialProfile}>
            <img src={human} alt="Profile photo of John Smith" className={styles.testimonialImg} />
            <figcaption className={styles.testimonialName}>John Smith</figcaption>
          </figure>
          <blockquote className={styles.testimonialText}>
            "The best Mediterranean restaurant in Chicago! Highly recommend."
          </blockquote>
        </article>
        <article className={styles.testimonialCard} role="listitem">
          <header>
            <div className={styles.testimonialRating} aria-label="Rating: 4 out of 5 stars">Rating: ★★★★☆</div>
          </header>
          <figure className={styles.testimonialProfile}>
            <img src={human} alt="Profile photo of Maria Rossi" className={styles.testimonialImg} />
            <figcaption className={styles.testimonialName}>Maria Rossi</figcaption>
          </figure>
          <blockquote className={styles.testimonialText}>
            "Loved the modern twist on classic recipes. Great atmosphere."
          </blockquote>
        </article>
        <article className={styles.testimonialCard} role="listitem">
          <header>
            <div className={styles.testimonialRating} aria-label="Rating: 5 out of 5 stars">Rating: ★★★★★</div>
          </header>
          <figure className={styles.testimonialProfile}>
            <img src={human} alt="Profile photo of Ahmed Ali" className={styles.testimonialImg} />
            <figcaption className={styles.testimonialName}>Ahmed Ali</figcaption>
          </figure>
          <blockquote className={styles.testimonialText}>
            "Delicious food, quick service, and a cozy place for family dinners."
          </blockquote>
        </article>
      </div>
    </section>
  );
}

export default Testimonials;
