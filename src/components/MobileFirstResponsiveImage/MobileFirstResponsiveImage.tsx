import React from "react";

import styles from "./MobileFirstResponsiveImage.module.scss";

export const MobileFirstResponsiveImage: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return <div className={styles.wrapper}>{children}</div>;
};
