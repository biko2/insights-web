import React from 'react';

import styles from './ArticleIntroduccion.module.scss';

export const ArticleIntroduccion: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return <section className={styles.articleIntroduccion}>{children}</section>;
};
