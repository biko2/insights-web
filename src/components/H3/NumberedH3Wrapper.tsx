import React from 'react';

import styles from './NumberedH3Wrapper.module.scss';

interface Props {
  number: number;
}

export const NumberedH3Wrapper: React.FC<React.PropsWithChildren<Props>> = ({
  number,
  children,
}) => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.number}>{number}</span> {children}
    </div>
  );
};
