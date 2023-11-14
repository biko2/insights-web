import React from 'react';

import styles from './ResponsiveImage.module.scss';

interface Props {
  desktopSrc: string;
  mobileSrc: string;
  desktopWidth: number;
  desktopHeight: number;
  mobileWidth: number;
  mobileHeight: number;
  alt: string;
}

export const ResponsiveImage: React.FC<Props> = ({
  desktopSrc,
  mobileSrc,
  desktopWidth,
  desktopHeight,
  mobileWidth,
  mobileHeight,
  alt,
}) => {
  return (
    <picture className={styles.wrapper}>
      <source
        srcSet={desktopSrc}
        media="(min-width: 1024px)"
        width={desktopWidth}
        height={desktopHeight}
      ></source>
      <img
        src={mobileSrc}
        width={mobileWidth}
        height={mobileHeight}
        alt={alt}
        className={styles.image}
      ></img>
    </picture>
  );
};
