import React from "react";

import { classNames } from "../../utilities/classnames";
import bottomPage from "../Layout/BottomPage.module.scss";
import footer from "../Layout/Footer.module.scss";
import { Header } from "../Layout/Header/Header";
import hero from "./EditorialHero.module.scss";
import editorialPage from "./EditorialPage.module.scss";

const styles = {
  ...footer,
  ...bottomPage,
  ...hero,
  ...editorialPage,
};

interface Props {
  title: string;
  authorship: string;
  authorshipSubtitle: string;
  audioSrc: string;
}

export const EditorialPage: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  title,
  authorship,
  authorshipSubtitle,
  audioSrc,
}) => {
  return (
    <>
      <Header audioSrc={audioSrc} />

      <main className={styles.mainContent}>
        <article className={styles.editorialContent}>
          <img
            className={styles.editorialBackgroundImage}
            src="/images/bg-xlarge.jpg"
            alt="televisión alternativa"
          />
          <section className={styles.hero}>
            <div
              className={classNames(
                styles.heroAuthorship,
                styles.editorialhero__authorship,
                "mb-m"
              )}
            >
              <img
                className="mr-s"
                src="/icons/bullet-red.svg"
                alt=""
                aria-hidden="true"
              />
              {authorship}
            </div>

            <h1 className={styles.heroTitle}>{title}</h1>
          </section>

          {children}
        </article>

        <section className={styles.editorialFooter}>
          <span
            className={classNames(
              styles.authorship,
              styles.editorialFooter__authorship
            )}
          >
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
          <a
            className={styles.caption_link}
            href="mailto:insightsmag@biko2.com"
          >
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
