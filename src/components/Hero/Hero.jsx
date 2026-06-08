import React from "react";
import styles from "./Hero.module.css";
import heroImg from "../../assets/hero.png";

function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroTitle}>
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
      </div>
      <div className={styles.imageContainer}>
        <img
          className={styles.heroImage}
          src={heroImg}
          alt="headphones"
        />
      </div>
    </div>
  );
}

export default Hero;
