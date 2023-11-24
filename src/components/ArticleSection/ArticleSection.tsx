import React from 'react';

import { classNames } from '../../utilities/classnames';
import styles from './ArticleSection.module.scss';

export const ArticleSection: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <section className={classNames(styles.articleSection, "reveal-content")}>
      {children}
    </section>
  );
};
