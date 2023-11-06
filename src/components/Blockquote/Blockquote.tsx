import React from "react";

import styles from "./Blockquote.module.scss";

export const Blockquote: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <blockquote className={styles.wrapper}>{children}</blockquote>;
};
