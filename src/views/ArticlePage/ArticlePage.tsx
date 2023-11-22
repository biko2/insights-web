import React from "react";

import { classNames } from "../../utilities/classnames";
import bottomPage from "../Layout/BottomPage.module.scss";
import footer from "../Layout/Footer.module.scss";
import header from "../Layout/Header.module.scss";
import articlePage from "./ArticlePage.module.scss";
import hero from "./Hero.module.scss";

const styles = {
  ...header,
  ...footer,
  ...bottomPage,
  ...hero,
  ...articlePage,
};

interface Props {
  heroImageUrl: string;
  heroImageAlt: string;
  title: string;
  description: string;
  authorship: string;
  authorshipSubtitle: string;
}

export const ArticlePage: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  heroImageUrl,
  heroImageAlt,
  title,
  description,
  authorship,
  authorshipSubtitle,
}) => {
  return (
    <>
      <header className={styles.header}>
        <a className={styles.outlineLink} href="/" title="Vuelve al inicio">
          <img
            className={styles.logo}
            src="/logo-bikoinsights-dark.svg"
            alt="Logo de Jakala BikoInsights"
          />
        </a>
        <nav>
          <ul className={styles.navMenu}>
            <li>
              <a href="/#sumario" className={styles.navMenu_Item}>
                <svg role="img" aria-hidden="true">
                  <use xlinkHref={"/sprite.svg#arrow-left"} />
                </svg>{" "}
                Sumario
              </a>
            </li>

            <li>
              <a href="/#ediciones-anteriores" className={styles.navMenu_Item}>
                Ediciones anteriores
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main className={styles.mainContent}>
        <section className={styles.hero}>
          <picture className={styles.heroPicture}>
            <img
              className={styles.heroImage}
              src={heroImageUrl}
              alt={heroImageAlt}
            />
          </picture>

          <div className={styles.heroContent}>
            <div className={styles.heroAuthorship}>
              <img
                className="mr-s"
                src="/icons/bullet-red.svg"
                alt=""
                aria-hidden="true"
              />
              {authorship}
            </div>

            <h1 className={styles.heroTitle}>{title}</h1>

            <p className={styles.heroDescription}>{description}</p>
          </div>
        </section>

        <article className={styles.articleContent}>{children}</article>

        <section className={styles.articleFooter}>
          <span className={styles.authorship}>
            <img
              className="mr-s"
              src="/icons/bullet-red.svg"
              alt=""
              aria-hidden="true"
            />
            {authorship}
          </span>
          <span
            className={classNames(
              styles.authorship,
              styles.authorship__subtitle
            )}
          >
            {authorshipSubtitle}
          </span>
        </section>

        <section className={styles.banner}>
          <p className="mb-l">
            Si lo prefieres, puedes descargarte la revista de BikoInsights #6 en
            formato pdf.
          </p>

          <a
            href="https://www.biko2.com/insights/BIKO-INSIGHTS-6-2023.pdf"
            className={styles.downloadLink}
          >
            Descargar BikoInsights #6{" "}
            <img alt="" aria-hidden="true" src="/icons/cta-download.svg" />
          </a>
        </section>

        <section className={styles.caption}>
          <img
            className="mr-s"
            src="/icons/bullet-red.svg"
            alt=""
            aria-hidden="true"
          />
          ¿Quieres una edición impresa de BikoInsigts #6?, envíanos un{" "}
          <a className={styles.captio_link} href="mailto:insightsmag@biko2.com">
            email
          </a>{" "}
          y háznoslo saber.
        </section>

        <section className={styles.goToTop}>
          <a
            className={styles.goToTop_link}
            href="#top"
            title="Sube al inicio del artículo"
          >
            <img
              width={24}
              height={24}
              src="/icons/go-to-top-arrow.svg"
              alt=""
              aria-hidden="true"
            />
            TOP
          </a>
        </section>
      </main>

      <footer className={styles.footer}>
        <img src="/icons/jakala.svg" alt="Logo de Jakala" />
        <p className={styles.footerText}>
          BikoInsights es un documento sobre tendencias digitales elaborado por
          Jakala | Biko con carácter divulgativo.
        </p>
      </footer>
    </>
  );
};
