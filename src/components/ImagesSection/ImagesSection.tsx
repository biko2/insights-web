import React from 'react';

import { classNames } from '../../utilities/classnames';
import { Link } from '../Link';
import styles from './ImagesSection.module.scss';

interface Image {
  src: string;
  alt: string;
  caption: string;
  link: { text: String; href: string };
  position: "top" | "bottom";
  size: "big" | "small";
}

interface Props {
  leftImage: Image;
  rightImage: Image;
  backgroundImage: "neuromante" | "mirrorshades" | "revolution";
  reverseContent: boolean;
}

export const ImagesSection: React.FC<Props> = ({
  leftImage,
  rightImage,
  backgroundImage,
  reverseContent,
}) => {
  const biggerSpacing = rightImage.size === "big" && leftImage.size === "big";

  return (
    <section
      className={classNames(
        styles.imagesSection,
        reverseContent && styles.image_container__reserveContent,
        "reveal-content"
      )}
    >
      <picture
        className={classNames(
          styles.image_container,
          leftImage.position === "bottom"
            ? styles.image_container__bottom
            : styles.image_container__top,
          leftImage.size === "small"
            ? styles.image_container__small
            : styles.image_container__big
        )}
      >
        <img
          className={styles.image}
          src={leftImage.src}
          alt={leftImage.alt}
        ></img>
        <figcaption className={styles.caption}>
          <Link href={leftImage.link.href}>{leftImage.link.text}</Link>
          <span>{leftImage.caption}</span>
        </figcaption>
      </picture>

      <picture
        className={classNames(
          styles.image_container,
          rightImage.position === "bottom"
            ? styles.image_container__bottom
            : styles.image_container__top,
          rightImage.size === "small"
            ? styles.image_container__small
            : styles.image_container__big,
          biggerSpacing && styles.image_container__biggerSpacing
        )}
      >
        <img
          className={styles.image}
          src={rightImage.src}
          alt={rightImage.alt}
        ></img>
        {backgroundImage === "neuromante" && (
          <img
            className={styles.neuromanteBackgroundImage}
            src="/images/mas-alla-del-ciberespacio/bg-neuromante.webp"
            alt={leftImage.alt}
          ></img>
        )}

        {backgroundImage === "mirrorshades" && (
          <img
            className={styles.mirrorshadesBackgroundImage}
            src="/images/mas-alla-del-ciberespacio/bg-mirrorshades.webp"
            alt={leftImage.alt}
          ></img>
        )}
        <figcaption className={styles.caption}>
          <Link href={rightImage.link.href}>{rightImage.link.text}</Link>
          <span>{rightImage.caption}</span>
        </figcaption>
      </picture>

      {backgroundImage === "revolution" && (
        <img
          className={styles.revolutionBackgroundImage}
          src="/images/mas-alla-del-ciberespacio/bg-revolution.webp"
          alt={leftImage.alt}
        ></img>
      )}
    </section>
  );
};
