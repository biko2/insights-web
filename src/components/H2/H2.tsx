import React from "react";

import styles from "./H2.module.scss";

export const H2: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <h2 className={styles.content}>{children}</h2>;
};
