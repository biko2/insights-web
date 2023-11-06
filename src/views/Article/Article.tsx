import React from "react";

import containerStyles from "../components/container.module.scss";
import styles from "./Article.module.scss";

export const Article: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <main className={`${containerStyles.container} ${styles.wrapper}`}>
      {children}
    </main>
  );
};
