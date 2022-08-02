import React from "react";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.hero_container}>
        <div className={styles.hero_container_txt}>
          <h1>Colchonpedia</h1>
          <h2>Tu centro de información sobre colchones</h2>
          <p>
            Te ayudamos a encontrar el mejor colchón que se adapte a tus
            necesidades y te ofrezca el mejor descanso.
          </p>
          <p>
            ¡Conoce sus caracteristicas principales y las opiniones más
            recientes¡!
          </p>
        </div>
      </div>
    </div>
  );
};
