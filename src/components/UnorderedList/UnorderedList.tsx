import React from "react";

import styles from "./UnorderedList.module.scss";

export const UnorderedList: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return <ul className={styles.wrapper}>{children}</ul>;
};
