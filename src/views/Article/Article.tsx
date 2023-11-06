import React from "react";

import containerStyles from "../components/container.module.scss";
import styles from "./Article.module.scss";

export const Article: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <header className={styles.header}>
        <img
          className={styles.heroLogo}
          src="/logo-bikoinsights.svg"
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

      <main className={`${containerStyles.container} ${styles.wrapper}`}>
        {children}
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
