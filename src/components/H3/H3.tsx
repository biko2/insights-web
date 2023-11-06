import React from "react";

import styles from "./H3.module.scss";

export const H3: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <h3 className={styles.content}>{children}</h3>;
};
