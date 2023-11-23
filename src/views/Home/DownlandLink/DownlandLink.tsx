import styles from "./downlandLink.module.scss";

export const DownlandLink: React.FC<{ to: string; edition: number }> = ({
  to,
  edition,
}) => (
  <a
    title={`Descarga el BikoInsights #${edition} (PDF)`}
    target="_blank"
    href={to}
    className={styles.downlandLink}
  >
    <svg
      style={{ width: 44, height: 44 }}
      role="img"
      aria-label={`Descarga el BikoInsights #${edition} (PDF)`}
    >
      <use xlinkHref={"/sprite.svg#download"} />
    </svg>
  </a>
);
