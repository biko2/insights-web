import React from 'react';

import { classNames } from '../../utilities/classnames';
import styles from './SecondaryTitle.module.scss';

export const SecondaryTitle: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <h2 className={classNames(styles.secondaryTitle, "reveal-content")}>
      {children}
    </h2>
  );
};
