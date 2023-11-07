import React from "react";

import styles from "./Image.module.scss";

interface Props {
  panoramicSrc: string;
  alt: string;
}

export const Image: React.FC<Props> = ({ panoramicSrc, alt }) => {
  return (
    <picture>
      <img className={styles.wrapper} src={panoramicSrc} alt={alt}></img>
    </picture>
  );
};
