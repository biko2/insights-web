import React from 'react';

import { classNames } from '../../utilities/classnames';
import styles from './ArticleIntroduccion.module.scss';

export const ArticleIntroduccion: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <section
      className={classNames(styles.articleIntroduccion, "reveal-content")}
    >
      {children}
    </section>
  );
};
