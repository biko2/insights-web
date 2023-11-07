import React from 'react';

import styles from './Image.module.scss';

interface Props {
  panoramicSrc: string;
  squareSrc: string;
  alt: string;
}

export const Image: React.FC<Props> = ({ panoramicSrc, squareSrc, alt }) => {
  return (
    <picture>
      <source media="(min-width:1024px)" srcSet={panoramicSrc} />
      <img className={styles.wrapper} src={squareSrc} alt={alt}></img>
    </picture>
  );
};
