import React from "react";

import { classNames } from "../../utilities/classnames";
import styles from "./NumberedSectionTitle.module.scss";

interface Props {
  number: number;
  title?: string;
  subtitle: string;
}

export const NumberedSectionTitle: React.FC<React.PropsWithChildren<Props>> = ({
  number,
  title,
  subtitle,
}) => {
  return (
    <>
      <h3 className="visually-hidden">{`1. ${title} ${subtitle}`}</h3>
      <div className={styles.numberedSectionTitle} aria-hidden="true">
        <span className={styles.numberedSectionTitle_number}>{number}</span>
        <div className={styles.numberedSectionTitle_title}>{title}</div>
        <div
          className={classNames(!title && styles.numberedSectionTitle_subtitle)}
        >
          {subtitle}
        </div>
      </div>
    </>
  );
};
