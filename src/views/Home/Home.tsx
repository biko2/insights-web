import React from 'react';

import styles from './home.module.scss';

export const Home: React.FC = () => {
  return (
    <>
      <h1 className={styles.title}>Hello, World! 🌍🙋🏽‍♀️</h1>
      <p className={styles.text}>Aquí irá la web de los Biko Insights</p>
    </>
  );
};
