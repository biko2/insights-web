import React from 'react';

import logo from '../../../public/logo.svg';
import container from '../components/container.module.scss';
import styles from './home.module.scss';

export const Home: React.FC = () => {
  return (
    <>
      <section className={styles.heroContainer}>
        <div className={container.container}>
          <div className={styles.heroWrapper}>
            <header className={styles.header}>
              <ul className={styles.headerItems}>
                <li>Sumario</li>
                <li>Ediciones anteriores</li>
              </ul>
            </header>
            <div className={styles.heroContent}>
              <p className={styles.heroLead}>
                Entre la <span className={styles.highlight}>esperanza</span> y
                el <span className={styles.highlight}>aburrimiento</span>{" "}
                tecnológico
              </p>
              <div className={styles.flexbox}>
                <span className={styles.insightNumber}>#06</span>
                <div className={styles.insight}>
                  <p className={styles.highlight}>BikoInsights</p>
                  <p>Tendencias digitales para un mundo en constante cambio.</p>
                </div>
              </div>
              <button className={styles.callToAction}>
                Descargar BikoInsights #6
              </button>
              <p className={styles.detail}>
                ¿Quieres una edición impresa de BikoInsigts #6?, envíanos un
                email y háznoslo saber.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section></section>
    </>
  );
};
