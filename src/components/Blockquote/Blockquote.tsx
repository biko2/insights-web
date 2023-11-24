import React from 'react';

import { classNames } from '../../utilities/classnames';
import styles from './Blockquote.module.scss';

export const Blockquote: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <blockquote className={classNames(styles.blockquote, "reveal-content")}>
      {children}
    </blockquote>
  );
};
