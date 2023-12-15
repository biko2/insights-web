import React from "react";

import styles from "./SingleImage.module.scss";

interface Props {
  src: string;
  alt: string;
}

export const SingleImage: React.FC<Props> = ({ src, alt }) => {
  return <img className={styles.image} src={src} alt={alt}></img>;
};
