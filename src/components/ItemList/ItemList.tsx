import React from 'react';

import styles from './ItemList.module.scss';

export const ItemList: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <ul className={styles.itemList}>{children}</ul>;
};
