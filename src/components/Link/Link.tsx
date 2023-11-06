import React from "react";

import styles from "./Link.module.scss";

interface Props {
  href: string;
}

export const Link: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  href,
}) => {
  return (
    <a className={styles.wrapper} href={href} target="_blank">
      {children}
    </a>
  );
};
