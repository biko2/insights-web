import React from 'react';

import styles from './IntroductionParagraphsWrapper.module.scss';

export const IntroductionParagraphsWrapper: React.FC<
  React.PropsWithChildren
> = ({ children }) => {
  return <div className={styles.content}>{children}</div>;
};
