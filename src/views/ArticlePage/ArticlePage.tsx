import React from 'react';

import containerStyles from '../_modules/container.module.scss';
import styles from './ArticlePage.module.scss';

interface Props {
  panoramicHeroImageUrl: string;
  squareHeroImageUrl: string;
  heroImageAlt: string;

  title: string;
  description: string;
  authorship: string;
  authorshipSecondary: string;
}

export const ArticlePage: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  panoramicHeroImageUrl,
  squareHeroImageUrl,
  heroImageAlt,
  title,
  description,
  authorship,
  authorshipSecondary,
}) => {
  return (
    <>
      <header className={`${containerStyles.container} ${styles.header}`}>
        <a className={styles.headerLogoLink} href="/" title="Vuelve al inicio">
          <img
            className={styles.heroLogo}
            src="/logo-bikoinsights-dark.svg"
            alt="Logo de Jakala BikoInsights"
          />
        </a>

        <nav>
          <ul className={styles.headerItems}>
            <li>
              <a href="/#sumario" className={styles.headerItem}>
                <svg
                  style={{ width: 24, height: 24 }}
                  role="img"
                  aria-hidden="true"
                >
                  <use xlinkHref={"/sprite.svg#arrow-left"} />
                </svg>{" "}
                Sumario
              </a>
            </li>

            <li>
              <a href="/#ediciones-anteriores" className={styles.headerItem}>
                Ediciones anteriores
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main className={containerStyles.container}>
        <div className={styles.heroWrapper}>
          <picture>
            <source
              height={797}
              width={1416}
              media="(min-width:1024px)"
              srcSet={panoramicHeroImageUrl}
            />
            <img
              src={squareHeroImageUrl}
              alt={heroImageAlt}
              height={720}
              width={720}
              className={styles.heroImage}
            />
          </picture>

          <div className={styles.heroContentWrapper}>
            <div className={styles.heroAuthorshipWrapper}>
              <p className={styles.authorship}>
                <img
                  className={styles.bulletpoint}
                  src="/icons/bullet-red.svg"
                  alt=""
                  aria-hidden="true"
                />
                {authorship}
              </p>
            </div>

            <h1 className={styles.heroTitle}>{title}</h1>

            <p className={styles.heroDescription}>{description}</p>
          </div>
        </div>

        <div className={styles.wrapper}>{children}</div>

        <div className={styles.fullAuthorshipWrapper}>
          <p className={styles.authorship}>
            <img
              className={styles.bulletpoint}
              src="/icons/bullet-red.svg"
              alt=""
              aria-hidden="true"
            />
            {authorship}
          </p>
          <p className={styles.authorshipSecondary}>{authorshipSecondary}</p>
        </div>

        <div className={styles.callToActionWrapper}>
          <p className={styles.callToActionMessage}>
            Si lo prefieres, puedes descargarte la revista de BikoInsights #6 en
            formato pdf.
          </p>

          <a
            href="https://www.biko2.com/insights/BIKO-INSIGHTS-6-2023.pdf"
            className={styles.callToActionLink}
          >
            Descargar BikoInsights #6{" "}
            <img alt="" aria-hidden="true" src="/icons/cta-download.svg" />
          </a>
        </div>

        <p className={styles.detail}>
          <img
            className={styles.bulletpoint}
            src="/icons/bullet-red.svg"
            alt=""
            aria-hidden="true"
          />
          ¿Quieres una edición impresa de BikoInsigts #6?, envíanos un{" "}
          <a className={styles.link} href="mailto:insightsmag@biko2.com">
            email
          </a>{" "}
          y háznoslo saber.
        </p>

        <div className={styles.goToTopWrapper}>
          <a
            className={styles.goToTopLink}
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
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={containerStyles.container}>
          <div className={styles.footerWrapper}>
            <img src="/icons/jakala.svg" alt="Logo de Jakala" />
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
