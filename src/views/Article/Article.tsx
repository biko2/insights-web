import React from "react";

import containerStyles from "../components/container.module.scss";
import styles from "./Article.module.scss";

interface Props {
  panoramicHeroImageUrl: string;
  squareHeroImageUrl: string;
  heroImageAlt: string;
  title: string;
  description: string;
}

export const Article: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  panoramicHeroImageUrl,
  squareHeroImageUrl,
  heroImageAlt,
  title,
  description,
}) => {
  return (
    <>
      <header className={styles.header}>
        <img
          className={styles.heroLogo}
          src="/logo-bikoinsights-dark.svg"
          alt="Logo de Jakala BikoInsights"
        />

        <nav>
          <ul className={styles.headerItems}>
            <li>
              <a href="#sumario" className={styles.headerItem}>
                Sumario{" "}
                <svg
                  style={{ width: 24, height: 24 }}
                  role="img"
                  aria-hidden="true"
                >
                  <use xlinkHref={"/sprite.svg#arrow-down"} />
                </svg>
              </a>
            </li>

            <li>
              <a href="#ediciones-anteriores" className={styles.headerItem}>
                Ediciones anteriores{" "}
                <svg
                  style={{ width: 24, height: 24 }}
                  role="img"
                  aria-hidden="true"
                >
                  <use xlinkHref={"/sprite.svg#arrow-down"} />
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main className={containerStyles.container}>
        <div className={styles.heroWrapper}>
          <picture>
            <source media="(min-width:1024px)" srcSet={panoramicHeroImageUrl} />
            <img
              src={squareHeroImageUrl}
              alt={heroImageAlt}
              className={styles.heroImage}
            />
          </picture>

          <div className={styles.heroContentWrapper}>
            <h1 className={styles.heroTitle}>{title}</h1>

            <p className={styles.heroDescription}>{description}</p>
          </div>
        </div>

        <div className={styles.wrapper}>{children}</div>
      </main>

      <footer className={styles.footer}>
        <div className={containerStyles.container}>
          <div className={styles.footerWrapper}>
            <img src="icons/jakala.svg" alt="Logo de Jakala" />
            <p className={styles.footerText}>
              BikoInsights es un documento sobre tendencias digitales elaborado
              por Jakala | Biko con carácter divulgativo.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
