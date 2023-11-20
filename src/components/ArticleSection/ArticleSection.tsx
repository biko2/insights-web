import React from 'react';

import styles from './ArticleSection.module.scss';

export const ArticleSection: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return <section className={styles.articleSection}>{children}</section>;
};
