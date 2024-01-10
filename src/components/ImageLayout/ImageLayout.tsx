import React from "react";

import { Link } from "../Link";
import styles from "./ImageLayout.module.scss";

interface ImageLayoutProps {
  image1: ImageProps;
  image2: ImageProps;
  image3: ImageProps;
}

interface ImageProps {
  src: string;
  caption: string;
  link: string;
}

export const ImageLayout: React.FC<ImageLayoutProps> = ({
  image1,
  image2,
  image3,
}) => {
  return (
    <>
      <section className={styles.imageLayout}>
        <div className={styles.topImages}>
          <picture>
            <img src={image1.src} alt={image1.caption} />
            <figcaption>
              <Link href={image1.link}>{image1.caption}</Link>
            </figcaption>
          </picture>
          <picture className={styles.secondImage}>
            <img src={image2.src} alt={image2.caption} />
            <figcaption>
              <Link href={image2.link}>{image2.caption}</Link>
            </figcaption>
          </picture>
        </div>

        <picture>
          <img src={image3.src} alt={image3.caption} />
          <figcaption>
            <Link href={image3.link}>{image3.caption}</Link>
          </figcaption>
        </picture>
        <div className={styles.backgroundImage} aria-hidden="true" />
      </section>
    </>
  );
};

export default ImageLayout;
