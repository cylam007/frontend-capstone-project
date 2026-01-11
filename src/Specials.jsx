// React library
import React from "react";

// Components
import Button from "./components/Button";

// Assets
import greekSalad from "./assets/greek salad.jpg";
import bruchetta from "./assets/bruchetta.svg";
import lemonDessert from "./assets/lemon dessert.jpg";

// CSS styles
import styles from "./Specials.module.css";


function Specials() {
  return (
    <section className={styles.specialsSection} aria-labelledby="specials-title">
      <header className={styles.specialsHeader}>
        <h2 id="specials-title" className={styles.specialsTitle}>This weeks specials!</h2>
          <Button word="Online Menu" />
      </header>
      <div className={styles.specialsCards}>
        <div className={styles.specialsCard}>
          <img src={greekSalad} alt="Greek salad" className={styles.specialsPhoto} />
          <div className={styles.specialsCardContent}>
            <div className={styles.specialsCardHeader}>
              <h3 className={styles.specialsDishName}>Greek salad</h3>
              <span className={styles.specialsPrice}>$12.99</span>
            </div>
            <p className={styles.specialsDesc}>
              The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.
            </p>
            <button className={styles.specialsOrderBtn} aria-label="On Click">Order a delivery</button>
          </div>
        </div>
        <div className={styles.specialsCard}>
          <img src={bruchetta} alt="Bruchetta" className={styles.specialsPhoto} />
          <div className={styles.specialsCardContent}>
            <div className={styles.specialsCardHeader}>
              <h3 className={styles.specialsDishName}>Bruchetta</h3>
              <span className={styles.specialsPrice}>$5.99</span>
            </div>
            <p className={styles.specialsDesc}>
              Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.
            </p>
            <button className={styles.specialsOrderBtn} aria-label="On Click">Order a delivery</button>
          </div>
        </div>
        <div className={styles.specialsCard}>
          <img src={lemonDessert} alt="Lemon Dessert" className={styles.specialsPhoto} />
          <div className={styles.specialsCardContent}>
            <div className={styles.specialsCardHeader}>
              <h3 className={styles.specialsDishName}>Lemon Dessert</h3>
              <span className={styles.specialsPrice}>$5.00</span>
            </div>
            <p className={styles.specialsDesc}>
              This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.
            </p>
            <button className={styles.specialsOrderBtn} aria-label="On Click">Order a delivery</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Specials;
