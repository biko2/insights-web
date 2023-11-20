import React from 'react';

import styles from './Paragraph.module.scss';

export const Paragraph: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <p className={styles.paragraph}>{children}</p>;
};
