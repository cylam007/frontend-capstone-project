// React library
import React from "react";

// Assets
import marioAdrianA from "./assets/Mario and Adrian A.jpg";
import marioAdrianB from "./assets/Mario and Adrian B.jpg";

// CSS styles
import styles from "./Chicago.module.css";


function Chicago() {
  return (
    <section className={styles.chicagoSection} aria-labelledby="about-chicago-title">
      <article className={styles.chicagoText}>
        <h1 id="about-chicago-title" className={styles.chicagoTitle}>Little Lemon</h1>
        <h2 className={styles.chicagoSubtitle}>Chicago</h2>
        <p className={styles.chicagoDesc}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.<br/>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
        </p>
      </article>
      <figure className={styles.chicagoImages} aria-label="Photos of restaurant owners Mario and Adrian">
        <img src={marioAdrianA} alt="Mario and Adrian, the restaurant owners, working in the kitchen" className={styles.chicagoImgA} />
        <img src={marioAdrianB} alt="Mario and Adrian, the restaurant owners, in their restaurant" className={styles.chicagoImgB} />
      </figure>
    </section>
  );
}

export default Chicago;
