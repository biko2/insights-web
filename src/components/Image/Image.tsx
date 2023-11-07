import React from 'react';

import styles from './Image.module.scss';

export const Image: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};
