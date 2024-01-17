import React from "react";

import { Link } from "../Link";
import styles from "./FullContainerImage.module.scss";

export const FullContainerImage: React.FC = () => {
  return (
    <picture className={styles.FullContainerImage}>
      <img
        className={styles.image}
        src="/images/automatizando-las-tareas/art-uju-3.webp"
        alt="Foto de la autora de las cinco máquinas"
      ></img>
      <figcaption className={styles.caption}>
        <Link href="https://designawards.core77.com/Interaction/83604/Five-Machines">
          Design squiggle
        </Link>
      </figcaption>
    </picture>
  );
};
