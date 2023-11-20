import React from 'react';

import styles from './SecondaryTitle.module.scss';

export const SecondaryTitle: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return <h2 className={styles.secondaryTitle}>{children}</h2>;
};
