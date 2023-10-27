import React from 'react';

import styles from './home.module.scss';

export const Home: React.FC = () => {
  return (
    <>
      <section className={styles.heroWrapper}>
        <div className={styles.heroContent}>
          <p className={styles.heroLead}>
            Entre la <span className={styles.highlight}>esperanza</span> y el{" "}
            <span className={styles.highlight}>aburrimiento</span> tecnológico
          </p>
        </div>
      </section>
    </>
  );
};
