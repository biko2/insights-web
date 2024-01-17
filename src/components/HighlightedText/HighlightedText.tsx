import React from "react";

import styles from "./HighlightedText.module.scss";

interface Props {
  text: string;
}

export const HighlightedText: React.FC<Props> = ({ text }) => {
  return <span className={styles.highlightedText}>{text}</span>;
};
